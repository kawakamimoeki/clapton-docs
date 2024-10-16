---
outline: deep
---

# State

Now, let's display a custom message in the previously created Component.

First, make the Component's message refer to the state's `message`.

```ruby
class HelloWorldComponent < Clapton::Component
  def render
    c(:text, @state.message)
  end
end
```

Next, define the `message` attribute in the state.

`app/states/hello_world_state.rb`:

```ruby
class HelloWorldState < Clapton::State
  attribute :message
end
```

Now you can pass the message from the Controller.

`app/controllers/hello_world_controller.rb`:

```ruby
class HelloWorldController < Clapton::Controller
  def index
    @components = [
      [:HelloWorldComponent, { message: "This is a message from state." }]
    ]
  end
end
```
