"use client";
import { Button, Input } from "@nextui-org/react";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../lib/firebase";

type SignformProps = {
  method: "in" | "up";
};

export default function SignInOutForm({ method }: SignformProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const router = useRouter();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  function formSubmitFunction(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setErrorMessage("Email inválido.");
      return;
    }

    if (method === "in") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorMessage.includes("invalid-credential")) {
            setErrorMessage("Email ou senha inválidos.");
          }
        });

      router.push("/dashboard");
    } else {
      if (password !== passwordConfirmation) {
        setErrorMessage("As senhas não condizem.");
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      setPassword("");
      setEmail("");
      setPasswordConfirmation("");
    }
  }

  return (
    <form
      onSubmit={formSubmitFunction}
      className={`
            flex
            flex-col
            w-full
            flex-wrap
            md:flex-nowrap
            ${method === "in" ? "gap-6" : "gap-4"}   
            bg-white
            max-w-72
            p-0
            box-border
            rounded-3xl
            h-96
            justify-end
        `}
    >
      <h1 className="font-semibold text-4xl text-black">
        {method === "in" ? "Entrar" : "Cadastrar"}
      </h1>

      <Input
        variant="underlined"
        type="email"
        label="email"
        placeholder="insira seu email"
        required
        value={email}
        onChange={(e) => {
          setErrorMessage("");
          setEmail(e.target.value);
        }}
      />
      <Input
        variant="underlined"
        type={showPassword ? "text" : "password"}
        label="senha"
        placeholder="insira sua senha"
        endContent={
          <button type="button" onClick={() => handleShowPassword()}>
            {showPassword ? (
              <EyeIcon className=" h-6 w-6 text-gray-500" />
            ) : (
              <EyeSlashIcon className=" h-6 w-6 text-gray-500" />
            )}
          </button>
        }
        required
        onChange={(e) => {
          setErrorMessage("");
          setPassword(e.target.value);
        }}
      />
      {method === "up" && (
        <Input
          variant="underlined"
          type={showPassword ? "text" : "password"}
          label=""
          placeholder="repita sua senha"
          required
          onChange={(e) => {
            setErrorMessage("");
            setPasswordConfirmation(e.target.value);
          }}
        />
      )}
      {errorMessage && (
        <div>
          <p className="text-red-900 text-xs">{errorMessage}</p>
        </div>
      )}
      {method === "in" && (
        <p className="font-extralight text-sm">
          Não é membro?
          <Link className="text-red-900 font-medium" href={"/sign-up"}>
            Cadastre-se já
          </Link>
        </p>
      )}
      {method === "up" && (
        <p className="font-extralight text-sm">
          Já é membro?
          <Link className="text-red-900 font-medium" href={"/sign-in"}>
            Entre aqui
          </Link>
        </p>
      )}
      <Button className="bg-red-900 text-white" radius="lg" type="submit">
        {method === "in" ? "Entrar" : "Cadastrar"}
      </Button>
    </form>
  );
}
