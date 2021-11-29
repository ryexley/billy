import * as LabelPrimitive from "@radix-ui/react-label"
import { styled } from "~/styles"

const StyledLabel = styled(LabelPrimitive.Root, {
  color: "$white",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: 500,
  userSelect: "none"
})

export function InputLabel({ children, ...props }) {
  return <StyledLabel {...props}>{children}</StyledLabel>
}
