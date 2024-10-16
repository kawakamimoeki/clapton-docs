---
outline: deep
---

# Action

Actions are used to update the state of a component or to save data.

Actions are defined in the State.

```ruby{4,5,6}
class HelloWorldState < Clapton::State
  attribute :message

  def update_message(params)
    self.message = "This is a message from action."
  end
end
```

This action is called by an event received by an element in the component.
Specify the element that calls the action with the `add_action` method.

```ruby{3,4,5,6,7,8}
class HelloWorldComponent < Clapton::Component
  def render
    box = c(:box)
    box.add(c(:text, @state.message))
    button = c(:button)
    button.add(c(:text, "Update Message"))
    button.add_action(:click, :HelloWorldState, :update_message)
    box.add(button)
    box
  end
end
```

Next, let's make the message input by the user reflect the state.

```ruby{5}
class HelloWorldState < Clapton::State
  attribute :message

  def update_message(params)
    self.message = params[:new_message]
  end
end
```

```ruby{5}
class HelloWorldComponent < Clapton::Component
  def render
    box = c(:box)
    box.add(c(:text, @state.message))
    box.add(c(:input, @state, :new_message))
    button = c(:button)
    button.add(c(:text, "Update Message"))
    button.add_action(:click, :HelloWorldState, :update_message)
    box.add(button)
    box
  end
end
```
