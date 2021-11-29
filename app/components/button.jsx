import { blackA, blue } from "@radix-ui/colors"
import { styled } from "~/styles"

export const Button = styled("button", {
  background: blackA.blackA9,
  border: "none",
  borderRadius: 4,
  boxShadow: `0 0 0 1px ${blackA.blackA12}`,
  color: "$gray11",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "bold",
  padding: "0.5rem 1rem",
  smoothTransition: "all",

  ["&:hover"]: {
    background: blackA.blackA11,
    boxShadow: `0 0 1px 2px ${blue.blue9}`,
    color: "$white"
  },

  ["&:focus"]: {
    background: blackA.blackA11,
    boxShadow: `0 0 1px 2px ${blue.blue9}`,
    color: "$white"
  },

  ["&:focus-visible"]: {
    outline: `1px solid ${blue.blue9}`
  }
})
