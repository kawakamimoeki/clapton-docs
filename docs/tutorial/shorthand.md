---
outline: deep
---

# Shorthand

You can use the following methods `c` to create a component.

```ruby
c(:text, "Hello, World!")
```

This method is equivalent to the following code.

```ruby
Clapton::Text.new("Hello, World!")
```

So, replace `Clapton::Text.new("Hello, World!")` with `c(:text, "Hello, World!")`.

```ruby{3}
class HelloWorldComponent < Clapton::Component
  def render
    c(:text, "Hello, World!")
  end
end
```

