import ButtonBase, { ButtonBaseProps } from '../ButtonBase'

const ButtonCircle = (props: ButtonBaseProps) => {
  const { className, ...rest } = props

  return <ButtonBase className={`btn-circle ${className ?? ''}`} {...rest} />
}

export default ButtonCircle
