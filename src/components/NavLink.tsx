import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

//#region Types
interface Props extends LinkProps {
    active?: boolean
    children: ReactNode
}
//#endregion Types

const NavLink = ({ active = false, children, ...props }: Props) => (
    <Link
        {...props}
        className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
            active
                ? 'border-indigo-400  focus:border-indigo-700'
                : 'border-transparent hover:border-gray-300 focus:border-gray-300'
        }`}>
        {children}
    </Link>
)

export default NavLink
