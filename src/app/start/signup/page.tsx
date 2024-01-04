import { SignUp } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const SignUpPage = (props: Props) => {
    return (
        <SignUp signInUrl='/start/login' />
    )
}

export default SignUpPage