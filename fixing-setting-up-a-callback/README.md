# Fixing setting up a callback

The below code has an error. Fix it.

```javascript
const solution = (messages) => {
  class Emitter {
    constructor(messages = []) {
      this.messages = messages;
      this.event = () => {};
    }

    setEvent(fn) {
      this.event = fn;
    }

    trigger() {
      this.messages.forEach((message) =>
        this.event(message),
      );
    }
  }

  class Receiver {
    constructor() {
      this.messages = [];
    }

    ping(message) {
      this.messages.push(message);
    }
  }

  const myEmitter = new Emitter(messages);
  const myReceiver = new Receiver();

  myEmitter.setEvent(myReceiver.ping);
  myEmitter.trigger();

  return myReceiver.messages;
};
```

Input

```console
[
  'Hello~',
  'Can you hear me?',
  'Nice to meet you.',
  'This is a test message.',
]
```

Output

```console
[
  'Hello~',
  'Can you hear me?',
  'Nice to meet you.',
  'This is a test message.',
]
```

## Execute

```bash
node solution.js
```
