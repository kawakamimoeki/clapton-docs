---
outline: deep
---

# Helper

## `clapton_javascript_tag`

A `<script type="importmap">` tag is embedded to load code related to Clapton.

`app/views/layouts/application.html.erb`:

```html
<%= clapton_javascript_tag %>
```

If you are using importmap-rails, please remove the following tag.
`clapton_javascript_tag` detects the use of importmap-rails and generates the script tag.

```diff
- <%= javascript_importmap_tags %>
```

## `clapton_tag`

Renders all components specified in `@components` defined in the Controller.

```html
<%= clapton_tag %>
```

## `clapton_component_tag`

This is a helper to render the given component individually.

```html
<%= clapton_component_tag(ComponentName, states)
```

### Arguments

- `ComponentName`: The name of the component to be rendered as a string.
- `states`: A hash of the initial state of the component to be rendered.
