import styles from './styles'

const getClasses = (primary: boolean | undefined, dashed: boolean | undefined, className: string | undefined) =>
  ['button', className, primary && 'primary', dashed && 'dashed']
  .filter(className => className)
  .join(' ')

type PropTypes = {
  primary?: boolean
  dashed?: boolean
  children?: any
  className?: string
}

const Button = ({ primary, dashed, children, className }: PropTypes) => <span className={getClasses(primary, dashed, className)}>
  {children}
  <style jsx>{styles}</style>
</span>;

export default Button;
