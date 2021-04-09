# 🈂️ 🐷🌵Gobit UIkit

[🌵Gobit UIkit](https://www.npmjs.com/package/@gobitswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@Gobitswap-libs/uikit)](https://www.npmjs.com/package/@gobitswap-libs/uikit)

Gobit UIkit is a set of React components and hooks used to build pages on Gobit's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @gobitswap-libs/uikit`

## Setup

### Theme

Before using Gobit UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@gobitswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@gobitswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://gobitswap.github.io/gobitswap-uikit/)
