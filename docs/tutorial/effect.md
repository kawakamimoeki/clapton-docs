---
outline: deep
---

# Effect
So far, we have seen how to update the state of a component on the server side in response to user actions.
But how do we interact with the rendered DOM or external APIs outside the component?
This is where Effects come in handy.

Before explaining Effects, let's create a simple component that plays a video from a specified URL.

```ruby
class VideoPlayerComponent < Clapton::Component
  def render
    box = c(:box)
    box.add(
      c(:button)
        .add(c(:text, @state.is_playing ? "Pause" : "Play")))
        .add_action(:click, :VideoState, :toggle_play)
    box.add(c(:embed, <<~HTML
      <video id="video" src="#{@state.url}" loop playsInline></video>
    HTML
    ))
    box
  end
end
```

```ruby
class VideoPlayerState < Clapton::State
  attribute :url
  attribute :is_playing

  def toggle_play(_)
    self.is_playing = !self.is_playing
  end
end
```

At this point, the video will not play. Simply setting `is_playing` to true is not enough; you also need to use the media API to play the video.

Here, you can define an Effect using the `effect` method.

```ruby{15-21}
class VideoPlayerComponent < Clapton::Component
  def render
    box = c(:box)
    box.add(
      c(:button)
        .add(c(:text, @state.is_playing ? "Pause" : "Play")))
        .add_action(:click, :VideoState, :toggle_play)
    box.add(c(:embed, <<~HTML
      <video id="video" src="#{@state.url}" loop playsInline></video>
    HTML
    ))
    box
  end

  effect [:is_playing] do |state|
    if state[:is_playing]
      document.getElementById("video").play()
    else
      document.getElementById("video").pause()
    end
  end
end
```

Passing `:is_playing` in the array as the first argument to the `effect` method allows the block to execute when the `is_playing` attribute defined in the State changes.

The `state` passed to the block refers to the current state of the component.

If the first argument array is empty, the block will execute immediately after the component is initially rendered.

```ruby
effect [] do |_|
  document.getElementById("video").play()
end
```

