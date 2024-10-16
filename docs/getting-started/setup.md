---
outline: deep
---

# Setup

Add the necessary tags to the template.
If you are using importmap-rails and have `javascript_importmap_tags` embedded, please remove it. `clapton_javascript_tag` wraps `javascript_importmap_tags`.

This is because Clapton uses import-maps, and only one `<script type="importmap">` can be placed in the HTML.

`app/views/layouts/application.html.erb`:

```diff
- <%= javascript_importmap_tags %>
+ <%= clapton_javascript_tag %>
```

You need to mount Clapton to a desired path. This will be an endpoint that wraps Action Cable.

`config/routes.rb`:

```ruby
mount Clapton::Engine => "/clapton"
```

`app/components` is codes that are compiled to JavaScript. So, you need to ignore the directory from autoloading.

Otherwise, the interpreter will try to interpret the code in `app/components`, and Rails will fail to start because it cannot find the definition of the parent class.

```ruby
# config/initializers/clapton.rb
Rails.autoloaders.main.ignore(Rails.root.join("app/components"))
```
