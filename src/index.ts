import { Stack } from 'aws-cdk-lib';
import {
  CfnEventBusPolicy,
  EventBus,
  EventBusProps,
  EventPattern,
  Rule,
} from 'aws-cdk-lib/aws-events';
import { CloudWatchLogGroup } from 'aws-cdk-lib/aws-events-targets';
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { paramCase } from 'change-case';
import { Construct } from 'constructs';

export interface EventbridgeWithLoggerProps {
  readonly logRetention?: RetentionDays;
  readonly eventBusProps: EventBusProps;
  readonly loggerEventPattern?: EventPattern;
  readonly enableCrossEnvironment?: boolean;
};

export class EventbridgeWithLogger extends Construct {
  eventBus: EventBus;
  policy: CfnEventBusPolicy;
  constructor(scope: Construct, id: string, props: EventbridgeWithLoggerProps) {
    super(scope, id);
    const {
      eventBusProps,
      logRetention,
      enableCrossEnvironment,
      loggerEventPattern,
    } = props;

    // Event bus setup
    const bus = new EventBus(this, 'Bus', eventBusProps);
    const normalizedId = paramCase(id);
    if (enableCrossEnvironment) {
      bus._enableCrossEnvironment();
    }
    // allow same-account same-region buses to send events to our local bus
    const policy = new CfnEventBusPolicy(this, 'AllowPutEventsFromLocalBuses', {
      eventBusName: bus.eventBusName,
      statementId: `${normalizedId}-allow-put-events-from-local-buses`,
      statement: {
        Principal: { AWS: Stack.of(this).account },
        Action: 'events:PutEvents',
        Resource: bus.eventBusArn,
        Effect: 'Allow',
      },
    });

    const busEventLoggerRule = new Rule(this, 'BusEventLoggerRule', {
      ruleName: `${normalizedId}-log-all-ingress-events`,
      description: 'Log all ingress events',
      eventPattern: loggerEventPattern || {
        region: [Stack.of(this).region],
      },
      eventBus: bus,
    });

    const busLogGroup = new LogGroup(this, 'BusLogGroup', {
      logGroupName: `/aws/events/${eventBusProps.eventBusName}/all-ingress-events`,
      retention: logRetention,
    });

    busEventLoggerRule.addTarget(new CloudWatchLogGroup(busLogGroup));

    this.eventBus = bus;
    this.policy = policy;
  }
}
