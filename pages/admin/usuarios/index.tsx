import React from 'react'
import Link from 'next/link'

const index = () => {
    return (
        <div>
           <div>pagina de admin de usuarios</div>
           <Link href='/'>
            <a className ="cursor-pointer">Ir al la Pagina de Home</a>
           </Link>
           <div>
      <i className="fas fa-home"></i>
      </div>
        </div>
    )
}

export default index
