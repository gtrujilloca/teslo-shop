interface Props {
  className?: string
  children?: React.ReactNode
}
export const MaxWidthWrapper: React.FC<Props> = ({
  className,
  children
}) => {
  return (
    <div className={`mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ${className}`}>
      {children}
    </div>
  )
}
