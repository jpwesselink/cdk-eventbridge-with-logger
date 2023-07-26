# cdk-eventbridge-with-logger

This is a CDK construct library that allows you to easily create an EventBridge event bus with a CloudWatch log group and a CloudWatch log stream.

Consider this an easy landing without having to think about it.

## Usage

```typescript
import { EventbridgeWithLogger } from 'cdk-eventbridge-with-logger'

new EventbridgeWithLogger(this, 'EventbridgeWithLogger', {
  eventBusName: 'my-event-bus',
});
```
