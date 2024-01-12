'use client'
import { Button, Input } from "@nextui-org/react"

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid"
import { useState } from "react"
import Link from "next/link"

export default function SignInForm () {

    const [showPassword, setShowPassword] = useState(false)
    
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <form
            className="
                flex
                flex-col
                w-full
                flex-wrap
                md:flex-nowrap
                gap-6
                bg-white
                max-w-80
                p-8
                pb-0
                rounded-3xl
                h-96
                justify-end
            "
        >   
            <h1 className="font-semibold text-4xl"> Entrar </h1>
            <Input variant="underlined" type="email" label="email" placeholder="insira seu email" required/>
            <Input 
                variant="underlined" 
                type={ showPassword ? "text" : "password"} 
                label="senha" 
                placeholder="insira sua senha" 
                endContent={
                    <button type="button" onClick={() => handleShowPassword()}>
                        {
                            showPassword ? <EyeIcon className=" h-6 w-6 text-gray-500"/> : <EyeSlashIcon className=" h-6 w-6 text-gray-500"/>
                        }
                    </button>} 
                required 
            />
            <p className="font-extralight text-sm"> Ainda não é membro <Link className="text-red-900 font-medium" href={'#'}> Cadastre-se já </Link></p>

            <Button className="bg-red-900 text-white" radius="lg" type="submit"> Entrar </Button>
        </form>
    )
}