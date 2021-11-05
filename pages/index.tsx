import React from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div className="bg-green-300">
      <p>pagina de index </p>
      <Link href="/admin/usuarios"> 
        <a className="cursor-pointer">Ir a Admin usuarios</a> 
      </Link>
    </div>
  )
}

export default Home
