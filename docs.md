# Clapton

Clapton is a framework for building real-time web applications in Ruby.

`app/components/like_button_component.rb`:

```ruby
class LikeButtonComponent < Clapton::Component
  def render
    button = c(:button)
      .add(c(:text, "Like! #{@state.count}"))
      .add_action(:click, :LikeButtonState, :countup)

    c(:box).add(button)
  end
end
```

`app/states/like_button_state.rb`:

```ruby
class LikeButtonState < Clapton::State
  attribute :count

  def countup(params)
    Like.create
    self.count = params[:count] + 1
  end
end
``` 

## Quick Start

First, install Rails and Clapton, and create the necessary resources.

```sh
rails new clapton-sample
cd clapton-sample
bundle add clapton
rails generate model like
rails db:migrate
rails generate controller likes index
rails generate clapton like_button
```

Add the necessary tags to the template.

`app/views/layouts/application.html.erb`:

```diff
- <%= javascript_importmap_tags %>
+ <%= clapton_javascript_tag %>
```

`app/views/likes/index.html.erb`:

```html
<%= clapton_tag %>
```

Mount Clapton to the routing.

`config/routes.rb`:

```ruby
mount Clapton::Engine => "/clapton"
```

Create the component and state.

`app/components/like_button_component.rb`:

```ruby
class LikeButtonComponent < Clapton::Component
  def render
    button = c(:button)
      .add(c(:text, "Like! #{@state.count}"))
      .add_action(:click, :LikeButtonState, :countup)

    c(:box).add(button)
  end
end
```

`app/states/like_button_state.rb`:

```ruby
class LikeButtonState < Clapton::State
  attribute :count

  def countup(params)
    Like.create
    self.count = params[:count] + 1
  end
end
```

Last, mount the component to the controller.

`app/controllers/likes_controller.rb`:

```ruby
class LikesController < ApplicationController
  def index
    @likes = Like.all
    @components = [
      [:LikeButton, { count: @likes.count }],
    ]
  end
end
```

Start the server and navigate to `http://localhost:3000/likes/index`.
```bash
rails s
```

## Features

### Reactivity

Clapton automatically updates the UI in response to state changes.

```ruby
button.add_action(:click, :LikeButtonState, :countup)
```

### Flexible Component Definition

Define the component with a simple Ruby.

```ruby
button = c(:button)
button.add(c(:text, "Like! #{@state.count}"))
```

### Access to browser API

Access to browser API using `window` object or `document` object and so on.

```ruby
window.localStorage.getItem("foo")
```

## Dependencies

- **[ActionCable](https://guides.rubyonrails.org/action_cable_overview.html)**: Synchronize UI and database bidirectionally using built-in WebSocket.
- **[Ruby2JS](https://github.com/ruby2js/ruby2js)**: Convert Ruby code to JavaScript code.
- **[Morphdom](https://github.com/patrick-steele-idem/morphdom)**: Fast DOM diffing algorithm.
- **[import-maps](https://github.com/WICG/import-maps)**: Compiled JavaScript maintains the cache of unchanged files.
