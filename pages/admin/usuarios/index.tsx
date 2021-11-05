import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


const index = () => {
    return (
        <div>
            <Head>
                <title>Admin Usuarios | Gestion De Proyectos</title>
            </Head>
           <div>pagina de admin de usuarios</div>
           <Link href='/'>
            <a className ="cursor-pointer">Ir al la Pagina de Home</a>
           </Link>
        </div>
    )
}

export default index
