import { Link, useSearchParams } from "remix"
import { Flex } from "~/components/flex"
import { TextInput, PasswordInput } from "~/components/text-input"
import { Button } from "~/components/button"
import { styled } from "~/styles"

const Box = styled(Flex, {
  margin: "$6 auto",
  width: "$breaks$s"
})

const FormHeading = styled("h1", {
  margin: "0 0.5rem"
})

const LoginForm = styled("form", {
  background: `linear-gradient(165deg, $violet7, $blue8)`,
  border: "1px solid $gray2",
  borderRadius: "1rem",
  padding: "$4",
  width: "100%"
})

const inputStyle = {
  width: "auto"
}

const FormActions = styled(Flex, {
  padding: "$3 0 $1 0"
})

export default function Login() {
  let [searchParams] = useSearchParams()

  return (
    <Box
      align="start"
      direction="column"
      gap="1">
      <FormHeading>Login</FormHeading>
      <LoginForm method="post">
        <TextInput
          inputId="email"
          inputName="email"
          label="Email Address"
          css={inputStyle}
          state="normal" />
        <PasswordInput
          inputId="password"
          inputName="password"
          label="Password"
          css={inputStyle} />
        <FormActions justify="end">
          <Button type="submit">
            Submit
          </Button>
        </FormActions>
      </LoginForm>
    </Box>
  )
}
