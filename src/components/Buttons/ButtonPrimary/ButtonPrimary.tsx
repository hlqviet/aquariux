import ButtonBase, { ButtonBaseProps } from '../ButtonBase'

const ButtonPrimary = (props: ButtonBaseProps) => {
  const { className, ...rest } = props

  return <ButtonBase className={`btn-primary ${className ?? ''}`} {...rest} />
}

export default ButtonPrimary
