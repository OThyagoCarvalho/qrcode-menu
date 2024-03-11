'use client'

import { Button } from "@nextui-org/react"
import Link from "next/link"
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from "react"
import { AppUser } from "./interfaces/menu";
import { auth } from "./lib/firebase";

export default function Home() {

  const [user, setUser] = useState<AppUser>(undefined as unknown as AppUser);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Mapeando o objeto firebaseUser para a interface User
        const user: AppUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
        };
        setUser(user);
      } else {
        setUser(undefined as unknown as AppUser);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div
        className='flex flex-nowrap p-24 bg-white rounded-3xl flex-col'
        >
          <h1
            className="text-red-900 font-extrabold text-[72px]"
          > 
            QR CODE MENU
          </h1>
          <ul
            className="flex gap-4 justify-center items-center"
          >
           {
            !user && 
           <>
           <li>
              <Button className="bg-red-900 text-white">
              <Link href={"sign-in"}>
                  Entrar
              </Link>
              </Button>
            </li>
            <li>
              <Button className="bg-red-900 text-white">
              <Link href={"sign-up"}>
                  Cadastrar
              </Link>
              </Button>
            </li>
           </> 
            }
            {
              user &&
              <>
                <li>
                <Button className="bg-red-900 text-white">
                <Link href={"/dashboard"}>
                    Dashboard
                </Link>
                </Button>
                </li>
                <li>
                <Button className="outline-1 text-white" onClick={()=> signOut(auth)}>
                <Link href={"#"}>
                    Encerrar -&gt;
                </Link>
                </Button>
                </li>
              </>
            }
          </ul>
      </div>     
    </main>
  )
}
