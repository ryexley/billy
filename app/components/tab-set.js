import * as TabsPrimitive from "@radix-ui/react-tabs"
import { blackA, whiteA } from "@radix-ui/colors"
import { styled } from "~/styles"

const StyledTabs = styled(TabsPrimitive.Root, {
  boxShadow: `0 0.125rem 0.625rem ${blackA.blackA4}`,
  display: "flex",
  flexDirection: "column"
})

const StyledList = styled(TabsPrimitive.List, {
  borderBottom: "1px solid $gray2",
  display: "flex",
  flexShrink: 0
})

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  alignItems: "center",
  backgroundColor: whiteA.whiteA10,
  color: "$indigo4",
  cursor: "pointer",
  display: "flex",
  flex: 1,
  fontFamily: "inherit",
  fontSize: "1.25rem",
  height: "3rem",
  justifyContent: "center",
  lineHeight: "1.5rem",
  minWidth: "10rem",
  padding: "0 $4",
  userSelect: "none",

  ["&:first-child"]: {
    borderTopLeftRadius: "1rem"
  },

  ["&:last-child"]: {
    borderTopRightRadius: "1rem"
  },

  ["&:hover"]: {
    backgroundColor: whiteA.whiteA12,
    color: "$indigo5"
  },

  ["&[data-state='active'"]: {
    backgroundColor: whiteA.whiteA11,
    boxShadow: "inset 0 -0.0625rem 0 0 currentColor, 0 0.0625rem 0 0 currentColor",
    color: "$indigo5"
  },

  ["&:focus"]: {
    backgroundColor: whiteA.whiteA11,
    boxShadow: "0 0 0 0.125rem $gray1",
    position: "relative"
  }
})

const StyledContent = styled(TabsPrimitive.Content, {
  backgroundColor: whiteA.whiteA8,
  borderBottomLeftRadius: "1rem",
  borderBottomRightRadius: "1rem",
  flexGrow: 1,
  outline: "none",
  padding: "$4",

  ["&:focus"]: {
    boxShadow: "0 0 0 0.125rem $gray1"
  }
})

export const TabSet = StyledTabs
export const TabList = StyledList
export const Tab = StyledTrigger
export const TabContent = StyledContent
