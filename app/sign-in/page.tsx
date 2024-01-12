import SignInForm from "../components/SignInForm";
import SignInOutCard from "../components/SignInOutCard";

export default function SignInPage (){
    return (
        <main className="flex min-h-screen items-center justify-center">
        <div
          className='flex flex-nowrap p-24 bg-white rounded-3xl'
          >
          <SignInForm />
          <SignInOutCard />
        </div>
      </main>
    )
}