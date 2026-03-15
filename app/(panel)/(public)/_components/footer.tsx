import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../../public/logo.png'

const Footer = () => {
  return (
    <footer className='bg-gray-50 py-20 text-center text-sm text-zinc-600'>
        <p>Todos os direitos reservados {new Date().getFullYear()} - BLSites | Tecnologia</p>
    </footer>
  )
}

export default Footer