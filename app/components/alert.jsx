import PropTypes from "prop-types"
import { AnimatePresence, motion } from "framer-motion"
import { styled } from "~/styles"

export const variants = {
  error: "error",
  info: "info",
  question: "question",
  success: "success",
  warning: "warning"
}

const MessageBox = styled(motion.div, {
  padding: "$2 $3"
})

const Title = styled("div", {
  color: "$mainText",
  fontSize: "1rem",
  fontWeight: "bold",
  lineHeight: "1.5rem"
})

const Message = styled("p", {
  color: "$mainText",
  fontSize: "0.8125rem",
  lineHeight: "1.25rem",
  margin: "0"
})

const AlertBox = styled(motion.div, {
  alignItems: "center",
  borderRadius: "0.375rem",
  display: "flex",
  flexDirection: "row",
  gap: "$1",
  justifyContent: "start",
  margin: "0 0 $4 0",
  transformOrigin: "top center",
  wrap: "noWrap",

  variants: {
    type: {
      [variants.error]: {
        background: "$crimson8",
        border: "1px solid $crimson8",
        color: "$white"
      },
      [variants.info]: {
        background: "$blue8",
        border: "1px solid $blue8",
        color: "$white"
      },
      [variants.question]: {
        background: "$gray7",
        border: "1px solid $gray7",
        color: "$white"
      },
      [variants.success]: {
        background: "$lime11",
        border: "1px solid $lime11",
        color: "$gray1"
      },
      [variants.warning]: {
        background: "$amber9",
        border: "1px solid $amber9",
        color: "$gray1"
      }
    }
  }
})

const alertAnimation = {
  initial: {
    opacity: 0,
    transform: "scaleY(0)"
    // y: -20
  },
  animate: {
    opacity: 1,
    transform: "scaleY(1)"
    // y: 0
  },
  exit: {
    height: 0,
    opacity: 0,
    transform: "scaleY(0)"
    // y: -20
  },
  transition: {
    duration: 0.5,
    ease: "easeInOut"
  }
}

const contentAnimation = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  },
  transition: {
    duration: 0.25,
    ease: "easeInOut"
  }
}

export const Alert = ({
  type,
  show,
  title,
  message,
  ...props
}) => {
  const alertProps = {
    type,
    gap: "1",
    ...alertAnimation,
    ...props
  }

  return (
    <AnimatePresence>
      {show ? (
        <AlertBox {...alertProps}>
          <MessageBox {...contentAnimation}>
            <Title>{title}</Title>
            <Message>{message}</Message>
          </MessageBox>
        </AlertBox>
      ) : null }
    </AnimatePresence>
  )
}

Alert.propTypes = {
  type: PropTypes.oneOf([...Object.values(variants)]),
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired
}

Alert.defaultProps = {
  type: variants.info,
  show: false
}
