import { useUser, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import SignInPage from './SignInPage/SignInPage'
import { Routes, Route } from 'react-router-dom'
import SignUpComponent from './SignUpPage/SignUpPage'
import './Login.scss'

export default function Login() {
  const { user } = useUser()

  return (
    <div className='LoginPage mx-auto my-auto flex h-screen w-screen items-center justify-center'>
      <div>
        <SignedOut>
          <Routes>
            <Route path='/' element={<SignInPage />} />
            <Route path='signup' element={<SignUpComponent />} />
          </Routes>
        </SignedOut>
        <SignedIn>
          <p>Welcome, {user?.fullName}!</p>
          <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}
