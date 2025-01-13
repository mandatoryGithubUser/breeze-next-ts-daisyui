import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

//#region Types
interface Props extends LinkProps {
    active?: boolean
    children: ReactNode
}
//#endregion Types

const ResponsiveNavLink = ({ active = false, children, ...props }: Props) => (
    <Link
        {...props}
        className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
            active
                ? 'border-indigo-400 focus:border-indigo-700'
                : 'border-transparent hover:border-gray-300 focus:border-gray-300'
        }`}>
        {children}
    </Link>
)

export const ResponsiveNavButton = props => (
    <button
        className="block w-full pl-3 pr-4 py-2 border-l-4 text-left text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
        {...props}
    />
)

export default ResponsiveNavLink
