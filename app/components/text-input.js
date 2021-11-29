import { blackA, crimsonA } from "@radix-ui/colors"
import { Flex } from "~/components/flex"
import { InputLabel } from "~/components/input-label"
import { styled } from "~/styles"

const StyledInput = styled("input", {
  all: "unset",
  alignItems: "center",
  backgroundColor: blackA.blackA5,
  borderRadius: 4,
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  color: "$white",
  display: "inline-flex",
  fontSize: "1rem",
  fontWeight: 200,
  height: "2.1875rem",
  justifyContent: "center",
  lineHeight: "1.25rem",
  minWidth: 200,
  padding: "0 0.625rem",
  smoothTransition: "all",

  ["&:focus"]: {
    boxShadow: `0 0 1px 2px ${blackA.blackA10}`
  },

  variants: {
    state: {
      normal: {},

      error: {
        background: blackA.blackA7,
        border: "1px solid $crimson8",
        borderLeft: "5px solid $crimson8",
        boxShadow: `0 0 0 1px ${crimsonA.crimsonA8}`,

        ["&:focus"]: {
          background: blackA.blackA7,
          border: "1px solid $crimson8",
          borderLeft: "5px solid $crimson8",
          boxShadow: `0 0 1px 2px ${crimsonA.crimsonA8}`
        }
      },

      disabled: {}
    }
  },

  defaultVariants: {
    state: "normal"
  }
})

function InputContainer({ children }) {
  const containerStyle = {
    marginBottom: "$3"
  }

  return (
    <Flex
      align="stretch"
      direction="column"
      gap="1"
      css={containerStyle}>
      {children}
    </Flex>
  )
}

const labelStyle = {
  margin: "0 0.15rem"
}

export function TextInput({
  label,
  showLabel,
  inputId,
  inputName,
  state,
  ...props
}) {
  return (
    <InputContainer>
      {
        showLabel ? (
          <InputLabel
            htmlFor={inputId}
            css={labelStyle}>
            {label}
          </InputLabel>
        ) : null
      }
      <StyledInput
        type="text"
        id={inputId}
        name={inputName}
        state={state}
        {...props} />
    </InputContainer>
  )
}

TextInput.defaultProps = {
  showLabel: true
}

export function PasswordInput({ ...props }) {
  const passwordInputStyle = {
    fontSize: "2rem",
    letterSpacing: "0.15rem"
  }

  return (
    <TextInput type="password" css={passwordInputStyle} {...props} />
  )
}