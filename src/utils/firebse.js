import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

import { toast } from 'react-toastify'

const firebaseConfig = {
  apiKey: 'AIzaSyAwiMediDxBRNzGnzAW6MvawuBAXFuDYpw',
  authDomain: 'gpt-3-eed09.firebaseapp.com',
  projectId: 'gpt-3-eed09',
  storageBucket: 'gpt-3-eed09.appspot.com',
  messagingSenderId: '929691749941',
  appId: '1:929691749941:web:2cc147441da7ab7dc22b7c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const SigninWithGoogle = async () =>
  await signInWithPopup(auth, provider)
export const signout = async () => await signOut(auth)

export const LoginInWithEmailAndPassword = async (email, password) => {
  if (!email && !password) return

  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error.code)

    switch (error.code) {
      case 'auth/user-not-found':
        toast('Not an Registered user')
        return
      default:
        break
    }
  }
}

export const SignupWithEmailAndPassword = async (
  email,
  password,
  displayName,
) => {
  if (!email && !password && !displayName) return

  try {
    console.log('in')

    await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(auth.currentUser, { displayName })
  } catch (error) {
    console.log(error.message)
    switch (error.code) {
      case 'auth/weak-password':
        return toast('Weak Password')
      case 'auth/email-already-in-use':
        return toast('Email already in use')
      default:
        break
    }
  }
}
