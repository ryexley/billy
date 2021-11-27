import { globalCss } from "./"

export const globalStyles = globalCss({
  ["*"]: {
    margin: 0,
    padding: 0
  },
  body: {
    background: "$gray12",
    color: "$white",
    fontFamily: "$primary"
  }
})
