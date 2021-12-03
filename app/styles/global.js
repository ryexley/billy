import { globalCss } from "./"

export const globalStyles = globalCss({
  ["*"]: {
    boxSizing: "border-box",
    margin: 0,
    padding: 0
  },
  body: {
    backgroundColor: "$gray1",
    color: "$white",
    fontFamily: "$primary",
    minHeight: "100vh",
    minWidth: "100vw",

    ["&::after"]: {
      backgroundColor: "$gray1",
      backgroundRepeat: "no-repeat",
      backgroundImage: `
        radial-gradient(circle 800px at 700px 200px, $crimson2, $transparent),
        radial-gradient(circle 600px at calc(100% - 300px) 300px, var(--colors-violet2), $transparent)
      `,
      height: "100vh",
      position: "absolute",
      width: "100vw"
    }
  },
  main: {
    padding: "$4"
  }
})
