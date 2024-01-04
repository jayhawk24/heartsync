import { SignIn } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
    return (
        <SignIn signUpUrl='/start/signup' />
    )
}

export default Login