'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AppUser } from '../interfaces/menu';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'


export default function NavBar() {
    return (
    <div className="relative flex items-center justify-center  w-full bg-red-900 text-white h-28 rounded-es-3xl rounded-ee-3xl font-montserrat mb-12">
      <ul className="flex gap-14 text-2xl underline hover:[&_a]:opacity-60 [&_a]:transition">
        <li>
          <a href={'/'}>Início</a>
        </li>
        <li>
          <Link href={'/dashboard'}>Dashboard</Link>
        </li>       
      </ul>
      <div className="h-14 w-14 bg-gray-700 rounded-full absolute right-6" />
    </div>
  );
}
