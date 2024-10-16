---
outline: deep
---

# `c` Method

Clapton comes with preset components.
The `c` method is a method that generates preset components.

```ruby
c(tagname, attrs)
```

### Arguments

- `tagname`: The name of the HTML tag.
- `attrs`: A hash of attributes to set on the HTML element.


### Return Value

An instance of the `Clapton::TagName` class or the `Clapton::Element` class corresponding to the tag name.

## `:input` and `:textarea` tag

For `:input` and `:textarea`, set the state and attribute corresponding to the value as follows:

```ruby
c(tagname, state, attr_name, html_attrs)
```

In Clapton, you do not need to explicitly define callbacks like `onChange` as in React. The attribute passed to `attr_name` is updated according to the input. This is updated on the client side.

This design avoids communication with the server to re-render the component for each input.

### Arguments

- `tagname`: The name of the HTML tag.
- `state`: An instance of the State. It is synonymous with `@state` within the Component.
- `attr_name`: The name of the attribute of the State corresponding to the value.
- `attrs`: A hash of attributes to set on the HTML element.

### Examples

```ruby
c(:input, @state, :message, { type: "text" })
c(:textarea, @state, :message, {})
```

## `#add`

```ruby
component = c(tagname, attrs)
component.add(child)
```

This method allows you to add a child component.

### Arguments

- `child`: Any component. You can pass both preset components and custom components.

### Return Value

Returns the instance of the component that called `#add_action`.


## `#add_action`

```ruby
component = c(tagname, attrs)
component.add_action(event_name, StateName, action_name, options)
```

Defines user actions on the component and the corresponding State actions

### Arguments

- `event_name`: The name of the event that triggers the action. You can select event names available in the JavaScript API.
- `StateName`: Pass the state to which the action belongs, such as `:MyState`.
- `action_name`: The name of the action to be executed
- `options`:
  - `debounce`: Specifies the debounce time in milliseconds
