import { createStitches } from "@stitches/react"
import {
  grayDark as gray,
  limeDark as lime,
  violetDark as violet,
  blueDark as blue,
  plumDark as plum,
  oliveDark as olive,
  crimsonDark as crimson,
  amberDark as amber
} from "@radix-ui/colors"

const colors = {
  ...gray,
  ...lime,
  ...plum,
  ...olive,
  ...crimson,
  ...violet,
  ...blue,
  ...amber,
  white: "$gray12"
}

export const breaks = {
  xs: "320px",
  s: "512px",
  sm: "640px",
  m: "768px",
  ml: "960px",
  l: "1024px",
  xl: "1280px"
}

export const sizes = {
  1: "0.25rem",
  2: "0.5rem",
  3: "1rem",
  4: "1.5rem",
  5: "2rem",
  6: "2.5rem",
  7: "3rem",
  8: "3.5rem",
  9: "4rem",
  10: "4.5rem",
  11: "5rem"
}

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors,
    fonts: {
      primary: `Outfit, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`
    },
    fontSizes: { ...sizes },
    space: { ...sizes },
    sizes,
    breaks
  },
  media: {
    xs: `(min-width: ${breaks.xs})`,
    s: `(min-width: ${breaks.s})`,
    sm: `(min-width: ${breaks.sm})`,
    m: `(min-width: ${breaks.m})`,
    ml: `(min-width: ${breaks.ml})`,
    l: `(min-width: ${breaks.l})`,
    xl: `(min-width: ${breaks.xl})`
  },
  utils: {
    smoothTransition: value => {
      const propertiesToTransition = value.split(",")
      const transitionDuration = "250ms"
      const transitionEasing = "ease-in-out"

      const transitionProperties = propertiesToTransition.map(p => `${p.trim()} ${transitionDuration} ${transitionEasing}`)

      return {
        transition: transitionProperties.join(", ")
      }
    }
  }
})
