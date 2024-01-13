import Image from 'next/image'
import SignInForm from './components/SignInOutForm'
import SignInOutCard from './components/SignInOutCard'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div
        className='flex flex-nowrap p-24 bg-white rounded-3xl'
        >
        <SignInForm />
        <SignInOutCard />
      </div>
    </main>
  )
}
