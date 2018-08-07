# Material-ui-chip-text-input

This component provides a [chip input field](https://material.io/design/components/chips.html#chips-behavior) using Input component from  [Material-UI](https://material-ui.com/) library.

## Demo
[Click here to 🚀](https://codesandbox.io/s/jv2k4po5yv)

## Installation
As a prerequisite, you must include the Material icon font in your project, for instance, via Google Web Fonts:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```
```shell
npm i material-ui-chip-text-input --save
```
**Note:** If you are using Material-UI 1.0.0-beta, you should update to the latest version.

## Usage
```jsx
import ChipTextInput from 'material-ui-chip-text-input';

<ChipTextInput
  name="foo"
  placeholde="Type here!"
  onChange={(chips) => handleChange(chips)}
/>

<ChipTextInput
  name="foo"
  placeholde="Type here!"
  values={['foo', 'bar']}
  onChange={(chips) => handleChange(chips)}
/>
```

## TODO
- [x] Initial component
- [ ] Test
- [x] Initial Values

## License
The files included in this repository are licensed under the MIT license.
