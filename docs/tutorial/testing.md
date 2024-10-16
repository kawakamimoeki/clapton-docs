---
outline: deep
---

# Testing

Clapton components are compiled into JavaScript before generating HTML, and we provide helpers to test the state of that HTML using [Capybara](https://teamcapybara.github.io/capybara/).
Clapton can be tested with both Minitest and RSpec.

## RSpec

Set up the test by including `Clapton::TestHelper::RSpec`.

```ruby{2,5}
# spec/spec_helper.rb
require "clapton/test_helper/rspec"

RSpec.configure do |config|
  config.include Clapton::TestHelper::RSpec, type: :component
end
```
Use the `render_component` method to render the component.
After rendering, you can inspect it as a `page` object.

When passing to describe, do not pass the component class.
Clapton components cannot be interpreted by the Ruby interpreter, so pass the class name as a string instead.

```ruby
# spec/components/task_list_component_spec.rb

describe "TaskListComponent", type: :component do
  it "renders" do
    render_component(
      "TaskListComponent",
      tasks: [{ id: 1, title: "Task 1", done: false, due: Time.current }]
    )

    # You can use Capybara matchers here
    expect(page).to have_selector("input[type='text']")
  end
end
```

## Minitest

For Minitest, include `Clapton::TestHelper::Minitest`.

```ruby{2,5}
# test/test_helper.rb
require "clapton/test_helper/minitest"

class ActiveSupport::TestCase
  include Clapton::TestHelper::Minitest
end
```

You can render the component using the `render_component` method and verify the state of the component using Capybara matchers.

```ruby
# test/components/task_list_component_test.rb
class TaskListComponentTest < ActiveSupport::TestCase
  test "renders" do
    render_component(
      "TaskListComponent",
      tasks: [{ id: 1, title: "Task 1", done: false, due: Time.current }]
    )
    # You can use Capybara matchers here
    assert_select "input[type='text']"
  end
end
```
