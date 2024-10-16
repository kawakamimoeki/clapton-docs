---
outline: deep
---

# Multiple Components

In Clapton, you can treat the entire page as a single component, but you can also place multiple components within a page.

First, let's introduce how to call multiple components in the Controller.

```ruby{5}
class HelloWorldController < Clapton::Controller
  def index
    @components = [
      [:HelloWorldComponent, { message: "Hello!" }],
      [:HelloWorldComponent, { message: "Hola!" }],
    ]
  end
end
```

You can also call components using helper methods, allowing you to place components anywhere in the template. In this case, defining `@components` in the Controller is not necessary.

```ruby
class HelloWorldController < Clapton::Controller
  def index
  end
end
```

```html
<%= clapton_component_tag(
  :HelloWorldComponent,
  { message: "Hello!" }
) %>

<p>
  Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>

<%= clapton_component_tag(
  :HelloWorldComponent,
  { message: "Hola!" }
) %>
```


