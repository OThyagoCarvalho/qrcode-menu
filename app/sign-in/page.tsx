import SignInOutCard from "../components/SignInOutCard";
import SignInOutForm from "../components/SignInOutForm";

export default function SignInPage (){
    return (
        <main className="flex min-h-screen items-center justify-center">
        <div
          className='flex flex-nowrap p-24 bg-white rounded-3xl gap-8'
          >
          <SignInOutForm method="in"/>
          <SignInOutCard imgPath="pexels-andrea-piacquadio-3801422.jpg"/>
        </div>
      </main>
    )
}