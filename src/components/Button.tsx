//#region Props

import { ComponentProps } from 'react'

interface Props extends ComponentProps<'button'> {
    type?: 'submit' | 'button' | 'reset'
    className?: string
}
//#endregion Props

const Button = ({ type = 'submit', className, ...props }: Props) => (
    <button
        type={type}
        className={`${className} inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`}
        {...props}
    />
)

export default Button
