'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            {user ? (
                <Link href="/dashboard" className="ml-4 text-sm underline">
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link href="/login" className="text-sm underline">
                        Login
                    </Link>

                    <Link href="/register" className="ml-4 text-sm underline">
                        Register
                    </Link>
                </>
            )}
        </div>
    )
}

export default LoginLinks
