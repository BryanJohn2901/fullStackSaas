import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import doctorImg from '../../../../public/doctor-hero.png'
const Hero = () => {
    return (
        <section className='bg-white'>
            <div className='container mx-auto px-4 pr-20 sm:px-6 lg:px-8 pb-4 sm:pb-0'>
                <main className='flex items-center justify-center'>
                    <article className='space-y-8 max-w-3xl flex flex-col justify-center'>
                        <h1 className='text-4xl lg:text-5xl font-bold text-zinc-900 max-w-2xl tracking-tight'>
                            Encontre os melhores profissionais em um único local!
                        </h1>
                        <p className='text-lg sm:text-xl text-gray-600'>
                            Nós somos uma plataforma para profissionais da saúde com foco em
                            agilizar seu atendimento de forma simplificada e organizada.
                        </p>
                        <Button className='bg-emerald-500 hover:bg-emerald-600 w-fit text-lg px-8 py-6 font-semibold'>
                            Encontre uma clinica
                        </Button>
                    </article>

                    <div className='hidden lg:block'>
                        <Image src={doctorImg} alt='doctor' width={340} height={400} className='object-contain' quality={100} priority />
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Hero