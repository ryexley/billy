import { styled } from "~/styles"

export const Container = styled("div", {
  margin: "0 auto",

  ["@ml"]: {
    maxWidth: "$breaks$ml"
  }
})
