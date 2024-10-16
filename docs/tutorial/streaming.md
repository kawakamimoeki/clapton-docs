---
outline: deep
---

# Streaming

This section explains how to continuously update the state of a component while an action is being executed.

First, let's write the code to increment numbers from 1 to 10 in the previous action.
By including `yield` within the loop, the state will be reflected in the component at that point.

```ruby{5,6,7,8,9}
class HelloWorldState < Clapton::State
  attribute :message

  def update_message(params)
    1.upto(10) do |i|
      self.message = "This is a message from action. #{i}"
      yield
      sleep 1
    end
  end
end
```
