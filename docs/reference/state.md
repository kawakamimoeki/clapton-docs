---
outline: deep
---

# State

## `.attribute`

```ruby
class MyState < Clapton::State
  attribute attr_name
end
```

The `.attribute` method allows you to define an attribute in the State.
By defining it, a getter `#attr_name` and a setter `#attr_name=` will be defined.

### Arguments

- `attr_name`: An arbitrary attribute name.


## Action

```ruby
class MyState < Clapton::State
  def action_name(params)
    # something to do
  end
end
```

By defining an action, you can define a process to be executed in an event-driven manner.

### Arguments

- `params`: A hash of the state of the component **where the event occurred**.

### Example

```ruby
class MyState < Clapton::State
  attribute :message

  def update_message(params)
    self.message = params[:message]
  end
end
```

### Streaming

Using `yield`, you can reflect the state in the component during the process.

```ruby
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

