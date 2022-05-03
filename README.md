
# Boring *Neutral* Avatars

Boring *neutral* avatars is a tiny JavaScript React library that generates custom, SVG-based avatars from any username and color palette.

![boring avatars preview](https://github.com/henry-burgess/boring-neutral-avatars/blob/master/public/boring-neutral-avatars-preview.png?raw=true)

<a href="https://www.npmjs.com/package/boring-neutral-avatars">

![hi](https://badgen.net/npm/v/boring-neutral-avatars)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</a>

## Install

```
yarn add boring-neutral-avatars
```

or

```
npm install boring-neutral-avatars
```

## Usage

```jsx
import Avatar from "boring-neutral-avatars";

<Avatar
  size={40}
  name="Maria Mitchell"
  variant="marble"
  colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
/>;
```

### Props

| Prop    | Type                                                         |
| ------- | ------------------------------------------------------------ |
| size    | number or string                                             |
| square  | boolean                                                      |
| name    | string                                                       |
| variant | oneOf: `marble`, `beam`, `pixel`,`sunset`, `ring`, `bauhaus` |
| colors  | array of colors                                              |
