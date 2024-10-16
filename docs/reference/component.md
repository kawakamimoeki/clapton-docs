---
outline: deep
---

# Component

## `#initialize`

```ruby
MyComponent.new(state)
```

Instantiate the component when rendering it in another component.

### Arguments

- `state`: A hash of attributes of the State to be passed to the component. Attributes defined in `MyState` etc. can be received.

## `#render`

```ruby
class MyComponent < Clapton::Component
  def render
    Clapton::Text.new("Hello!")
  end
end
```

The `#render` method returns an object of the child component.

## `.effect`

```ruby
class MyComponent < Clapton::Component

  # ...

  effect dependencies do |state|
    # Something to do
  end
end
```

### Arguments

- Array of `dependencies`: A list of attributes of the dependent State. When these are changed, the block's processing is executed. If an empty array `[]` is passed, it is executed immediately after the initial rendering.

## `@state`

```ruby
class MyComponent < Clapton::Component
  def render
    Clapton::Text.new(@state.message)
  end
end
```

`@state` is synonymous with an instance of a state defined by each user, such as `MyState`. You can access the attributes defined with `Clapton::State.attribute`.

```ruby
class MyState < Clapton::State
  attribute :message
end
```
