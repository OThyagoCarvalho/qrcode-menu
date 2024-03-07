'use client'
import SignInForm from './components/SignInOutForm'
import SignInOutCard from './components/SignInOutCard'
import { useSelector } from 'react-redux'
import InputText from './components/InputText'

export default function Home() {
  const menu = useSelector( state => state.value.menu)
  console.log(menu)
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div
        className='flex flex-nowrap p-24 bg-white rounded-3xl'
        >
        <SignInForm method='up' />
        <SignInOutCard imgPath='/pexels-andrea-piacquadio-3801422.jpg' />         
        <InputText/>
      </div>
    </main>
  )
}
