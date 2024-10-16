---
outline: deep
---

# Hello World

Generate the component and state.

```sh
rails generate clapton hello_world
rails generate controller hello_world index
```

The following files are generated.

```
app
 ├── components
 │    └── hello_world_component.rb
 └── states
      └── hello_world_state.rb
```

Write render logic in the component.

```ruby
# app/components/hello_world_component.rb
class HelloWorldComponent < Clapton::Component
  def render
    Clapton::Text.new("Hello, World!")
  end
end
```

Write the controller.

```ruby
# app/controllers/hello_world_controller.rb
class HelloWorldController < Clapton::Controller
  def index
    @components = [
      [:HelloWorldComponent, {}]
    ]
  end
end
```

`app/views/hello_world/index.html.erb`:

```html
<%= clapton_tag %>
```

And run the server.

```sh
rails server
```

Open the browser and access `http://localhost:3000/hello_world/index`.

