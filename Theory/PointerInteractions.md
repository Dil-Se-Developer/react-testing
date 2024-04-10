# Pointer Interactions

**user-events are asynchronous**

## Convenience APIs

Convenience API calls internally Pointer API.

**Always take first approach to use convenience API rather than pointer API**

- click()
- dblClick()
- hover()
- unhover()

## Pointer APIs

- pointer({keys: '[MouseLeft]'})
- pointer({keys: '[MouseLeft][Mouseright]'})
- pointer('[MouseLeft][Mouseright]')
- pointer('[MouseLeft]')
- pointer('[MouseLeft>]') **(Press a button without releasing it)**
- pointer('[/MouseLeft]') **(Release the previously pressed button)**
