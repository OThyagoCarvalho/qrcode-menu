'use client'
import { Button, Input } from "@nextui-org/react"

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid"
import { useState } from "react"
import Link from "next/link"

type SignformProps = {
    method: 'in' | 'up'
}

export default function SignInOutForm ( { method }: SignformProps) {

    const [showPassword, setShowPassword] = useState(false)
    
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <form
            className={`
            flex
            flex-col
            w-full
            flex-wrap
            md:flex-nowrap
            ${method === "in" ? 'gap-6' : 'gap-4'}   
            bg-white
            max-w-72
            p-0
            box-border
            rounded-3xl
            h-96
            justify-end
        `}
        >   
            <h1 className="font-semibold text-4xl"> { method === 'in' ? 'Entrar' : 'Cadastrar'} </h1>
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
            { method === 'up' && <Input 
                variant="underlined" 
                type={ showPassword ? "text" : "password"} 
                label="" 
                placeholder="repita sua senha" 
                required 
            /> }
            { method === 'in' && <p className="font-extralight text-sm"> Não é membro? <Link className="text-red-900 font-medium" href={'/sign-up'}> Cadastre-se já </Link></p>} 
            { method === 'up' && <p className="font-extralight text-sm"> Já é membro? <Link className="text-red-900 font-medium" href={'/sign-in'}> Entre aqui </Link></p>}
            <Button className="bg-red-900 text-white" radius="lg" type="submit"> { method === "in" ? 'Entrar' : 'Cadastrar' }</Button>
        </form>
    )
}