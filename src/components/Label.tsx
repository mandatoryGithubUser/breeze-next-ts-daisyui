//#region Props
import { ComponentProps, ReactNode } from 'react'

interface Props extends ComponentProps<'label'> {
    className?: string
    children: ReactNode
}
//#endregion Props

const Label = ({ className, children, ...props }: Props) => (
    <label
        className={`${className} block font-medium text-sm text-gray-700`}
        {...props}>
        {children}
    </label>
)

export default Label
