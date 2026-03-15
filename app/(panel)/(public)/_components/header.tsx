'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { LogIn, Menu } from 'lucide-react'

const header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const session = null

    const navItems = [
        { href: '#profissionais', label: 'Profissionais' },
    ]

    const NavLinks = () => (
        <>
            {navItems.map((item) => (
                <Button onClick={() => setIsOpen(false)} key={item.href} asChild variant="ghost" className='bg-transparent hover:bg-transparent text-black shadow-none text-lg lg:text-xl'>
                    <Link href={item.href}>
                        {item.label}
                    </Link>
                </Button>
            ))}
            {session ? (
                <Button asChild className="w-full md:w-auto text-lg px-6 py-6">
                    <Link href='/dashboard'>
                        Acessar da clinica
                    </Link>
                </Button>
            ) : (
                <Button className="w-full md:w-auto py-6 text-lg px-6">
                    <LogIn />
                    Portal da clinica
                </Button>
            )}
        </>
    )


    return (
        <header className='fixed top-0 right-0 left-0 z-999 py-4 px-6 bg-white'>
            <div className='container mx-auto flex items-center justify-between'>
                <Link href={'/'} className='text-3xl font-bold text-zinc-900'>
                    Odonto<span className='text-emerald-500'>PRO</span>
                </Link>

                <nav className='hidden md:flex items-center gap-4 space-x-4'>
                    <NavLinks />
                </nav>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className='md:hidden'>
                        <Button className='text-black hover:bg-transparent' variant='ghost' size='icon'>
                            <Menu className='w-6 h-6' />
                        </Button>

                    </SheetTrigger>

                    <SheetContent side='right' className='w-[240px] sm:w-[300px] z-9999 flex flex-col items-center p-8'>
                        <SheetHeader className='flex flex-col items-center mt-8'>
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription className='text-center'>
                                Navegue pelas opções disponíveis
                            </SheetDescription>
                        </SheetHeader>
                        <nav className='flex flex-col items-center gap-6 mt-12 w-full'>
                            <NavLinks />
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header >
    )
}

export default header