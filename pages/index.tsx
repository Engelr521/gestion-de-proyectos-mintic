import React from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div className="bg-green-300">
      <Head>
        <title>Home | Gestion De Proyectos</title>
      </Head>
      <p>pagina de index </p>
      <Link href="/admin/usuarios"> 
        <a className="cursor-pointer">Ir a Admin usuarios</a> 
      </Link>
      <div>
      <i className="fas fa-home"></i>
      </div>
    </div>
  )
}

export default Home
