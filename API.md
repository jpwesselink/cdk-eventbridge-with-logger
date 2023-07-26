# cdk-eventbridge-with-logger

This is a CDK construct library that allows you to easily create an EventBridge event bus with a CloudWatch log group and a CloudWatch log stream.

## Usage

```typescript
import { EventbridgeWithLogger } from 'cdk-eventbridge-with-logger'

new EventbridgeWithLogger(this, 'EventbridgeWithLogger', {
  eventBusName: 'my-event-bus',
});
```

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventbridgeWithLogger <a name="EventbridgeWithLogger" id="cdk-eventbridge-with-logger.EventbridgeWithLogger"></a>

#### Initializers <a name="Initializers" id="cdk-eventbridge-with-logger.EventbridgeWithLogger.Initializer"></a>

```typescript
import { EventbridgeWithLogger } from 'cdk-eventbridge-with-logger'

new EventbridgeWithLogger(scope: Construct, id: string, props: EventbridgeWithLoggerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLogger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLogger.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLogger.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLoggerProps">EventbridgeWithLoggerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-eventbridge-with-logger.EventbridgeWithLogger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-eventbridge-with-logger.EventbridgeWithLogger.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-eventbridge-with-logger.EventbridgeWithLogger.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-eventbridge-with-logger.EventbridgeWithLoggerProps">EventbridgeWithLoggerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLogger.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-eventbridge-with-logger.EventbridgeWithLogger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLogger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-eventbridge-with-logger.EventbridgeWithLogger.isConstruct"></a>

```typescript
import { EventbridgeWithLogger } from 'cdk-eventbridge-with-logger'

EventbridgeWithLogger.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-eventbridge-with-logger.EventbridgeWithLogger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLogger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLogger.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.EventBus</code> | *No description.* |
| <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLogger.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | *No description.* |
| <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLogger.property.logRule">logRule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | *No description.* |
| <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLogger.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_events.CfnEventBusPolicy</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-eventbridge-with-logger.EventbridgeWithLogger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `eventBus`<sup>Required</sup> <a name="eventBus" id="cdk-eventbridge-with-logger.EventbridgeWithLogger.property.eventBus"></a>

```typescript
public readonly eventBus: EventBus;
```

- *Type:* aws-cdk-lib.aws_events.EventBus

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="cdk-eventbridge-with-logger.EventbridgeWithLogger.property.logGroup"></a>

```typescript
public readonly logGroup: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

---

##### `logRule`<sup>Required</sup> <a name="logRule" id="cdk-eventbridge-with-logger.EventbridgeWithLogger.property.logRule"></a>

```typescript
public readonly logRule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

---

##### `policy`<sup>Optional</sup> <a name="policy" id="cdk-eventbridge-with-logger.EventbridgeWithLogger.property.policy"></a>

```typescript
public readonly policy: CfnEventBusPolicy;
```

- *Type:* aws-cdk-lib.aws_events.CfnEventBusPolicy

---


## Structs <a name="Structs" id="Structs"></a>

### EventbridgeWithLoggerProps <a name="EventbridgeWithLoggerProps" id="cdk-eventbridge-with-logger.EventbridgeWithLoggerProps"></a>

#### Initializer <a name="Initializer" id="cdk-eventbridge-with-logger.EventbridgeWithLoggerProps.Initializer"></a>

```typescript
import { EventbridgeWithLoggerProps } from 'cdk-eventbridge-with-logger'

const eventbridgeWithLoggerProps: EventbridgeWithLoggerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLoggerProps.property.eventBusProps">eventBusProps</a></code> | <code>aws-cdk-lib.aws_events.EventBusProps</code> | *No description.* |
| <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLoggerProps.property.allowPutEventsFromLocalBuses">allowPutEventsFromLocalBuses</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLoggerProps.property.enableCrossEnvironment">enableCrossEnvironment</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLoggerProps.property.loggerEventPattern">loggerEventPattern</a></code> | <code>aws-cdk-lib.aws_events.EventPattern</code> | *No description.* |
| <code><a href="#cdk-eventbridge-with-logger.EventbridgeWithLoggerProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | *No description.* |

---

##### `eventBusProps`<sup>Required</sup> <a name="eventBusProps" id="cdk-eventbridge-with-logger.EventbridgeWithLoggerProps.property.eventBusProps"></a>

```typescript
public readonly eventBusProps: EventBusProps;
```

- *Type:* aws-cdk-lib.aws_events.EventBusProps

---

##### `allowPutEventsFromLocalBuses`<sup>Optional</sup> <a name="allowPutEventsFromLocalBuses" id="cdk-eventbridge-with-logger.EventbridgeWithLoggerProps.property.allowPutEventsFromLocalBuses"></a>

```typescript
public readonly allowPutEventsFromLocalBuses: boolean;
```

- *Type:* boolean

---

##### `enableCrossEnvironment`<sup>Optional</sup> <a name="enableCrossEnvironment" id="cdk-eventbridge-with-logger.EventbridgeWithLoggerProps.property.enableCrossEnvironment"></a>

```typescript
public readonly enableCrossEnvironment: boolean;
```

- *Type:* boolean

---

##### `loggerEventPattern`<sup>Optional</sup> <a name="loggerEventPattern" id="cdk-eventbridge-with-logger.EventbridgeWithLoggerProps.property.loggerEventPattern"></a>

```typescript
public readonly loggerEventPattern: EventPattern;
```

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="cdk-eventbridge-with-logger.EventbridgeWithLoggerProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays

---



