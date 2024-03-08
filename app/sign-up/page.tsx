import SignInForm from "../components/SignInOutForm";
import SignInOutCard from "../components/SignInOutCard";

export default function SignUpPage () {
    return (
        <main className="flex min-h-screen items-center justify-center">
            <div
            className='flex flex-nowrap p-24 bg-white rounded-3xl gap-8'
            >
                <SignInForm method="up" />
                <SignInOutCard imgPath="pexels-andrea-piacquadio-3801649.jpg"/>
            </div>
        </main>
    )
}