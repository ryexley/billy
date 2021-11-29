import { globalCss } from "./"

export const globalStyles = globalCss({
  ["*"]: {
    boxSizing: "border-box",
    margin: 0,
    padding: 0
  },
  body: {
    background: "$gray1",
    color: "$white",
    fontFamily: "$primary"
  }
})
