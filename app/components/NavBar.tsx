import Link from 'next/link';

export default function NavBar() {
  return (
    <div className="relative flex items-center justify-center  w-full bg-[#F9F9F9] text-black h-28 rounded-es-3xl rounded-ee-3xl font-montserrat">
      <ul className="flex gap-14 text-2xl underline hover:[&_a]:opacity-60 [&_a]:transition">
        <li>
          <Link href={'#'}>Comunidade</Link>
        </li>
        <li>
          <Link href={'#'}>Meus Cardápios</Link>
        </li>
        <li>
          <Link href={'#'}>Ajuda</Link>
        </li>
      </ul>
      <div className="h-14 w-14 bg-gray-700 rounded-full absolute right-6" />
    </div>
  );
}
