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
  /**
   * An existing event bus to use
   */
  readonly existingEventBusInterface?: EventBus;

  /**
   * Properties for a new event bus
   * If you provide both an existing event bus and event bus props, an error will be thrown
   * If you provide neither an existing event bus nor event bus props, an error will be thrown
   */
  readonly eventBusProps?: EventBusProps;

  /**
   * The log retention for the log group
   */
  readonly logRetention?: RetentionDays;

  /**
   * The event pattern to use for the logger rule, defaults to events in the current region
   */
  readonly loggerEventPattern?: EventPattern;

  /**
   * Generates a physical name for this resource during synthesis, so the resource
   * can be referenced through its absolute name/arn.
   */
  readonly enableCrossEnvironment?: boolean;

  /**
   * Allow same-account same-region buses to send events to our local bus
   */
  readonly allowPutEventsFromLocalBuses?: boolean;

  /**
   * The name of the log group to create, defaults to '/aws/events/{eventBusName}/ingress'
   */
  readonly logGroupName?: string;
};

export class EventbridgeWithLogger extends Construct {
  eventBus: EventBus;
  policy?: CfnEventBusPolicy;
  logGroup: LogGroup;
  logRule: Rule;
  constructor(scope: Construct, id: string, props: EventbridgeWithLoggerProps) {
    super(scope, id);
    const {
      existingEventBusInterface,
      eventBusProps,
      logRetention,
      enableCrossEnvironment,
      loggerEventPattern,
      allowPutEventsFromLocalBuses,
      logGroupName,
    } = props;

    // Event bus setup
    const eventBus = existingEventBusInterface || new EventBus(this, 'Bus', eventBusProps);
    const normalizedId = paramCase(id);
    if (enableCrossEnvironment) {
      eventBus._enableCrossEnvironment();
    }

    if (allowPutEventsFromLocalBuses) {
      // allow same-account same-region buses to send events to our local bus
      const policy = new CfnEventBusPolicy(this, 'AllowPutEventsFromLocalBuses', {
        eventBusName: eventBus.eventBusName,
        statementId: `${normalizedId}-allow-put-events-from-local-buses`,
        statement: {
          Principal: { AWS: Stack.of(this).account },
          Action: 'events:PutEvents',
          Resource: eventBus.eventBusArn,
          Effect: 'Allow',
        },
      });
      this.policy = policy;
    }
    const logRule = new Rule(this, 'LogRule', {
      ruleName: `${normalizedId}-ingress-region-${Stack.of(this).region}`,
      description: 'Log all ingress events',
      eventPattern: loggerEventPattern || {
        region: [Stack.of(this).region],
      },
      eventBus: eventBus,
    });

    const logGroup = new LogGroup(this, 'LogGroup', {
      logGroupName: logGroupName || `/aws/events/${eventBus.eventBusName}/ingress`,
      retention: logRetention,
    });

    logRule.addTarget(new CloudWatchLogGroup(logGroup));

    this.eventBus = eventBus;
    this.logGroup = logGroup;
    this.logRule = logRule;
  }
}
