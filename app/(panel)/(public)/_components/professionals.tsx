import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'   
import Image from 'next/image'
import fotoImg from '../../../../public/foto1.png'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const professionals = () => {
    return (
        <section className='bg-gray-50 py-20'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className='text-3xl font-bold text-zinc-900 mb-12 text-center'>Clinicas disponíveis</h2>

                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Card className='overflow-hidden'>
                        <CardContent className='p-0'>
                            <div>
                                <div className='relative w-full h-48'>
                                    <Image src={fotoImg} alt='foto' fill className='object-cover' />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-lg font-bold text-zinc-900'>Clínica 1</h3>
                                        <p className='text-sm text-zinc-600'>Rua dos Bobos, 0</p>
                                    </div>
                                    <div className="w-2 5 h-2 5 bg-emerald-500 rounded-full"> </div>
                                </div>
                                <Link href='/clinica/1' className='w-full md:w-auto text-center bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center justify-center text-sm font-semibold md:text-base'>
                                    Agendar horário
                                    <ArrowRight className='w-4 h-4' />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='overflow-hidden'>
                        <CardContent className='p-0'>
                            <div>
                                <div className='relative w-full h-48'>
                                    <Image src={fotoImg} alt='foto' fill className='object-cover' />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-lg font-bold text-zinc-900'>Clínica 1</h3>
                                        <p className='text-sm text-zinc-600'>Rua dos Bobos, 0</p>
                                    </div>
                                    <div className="w-2 5 h-2 5 bg-emerald-500 rounded-full"> </div>
                                </div>
                                <Link href='/clinica/1' className='w-full md:w-auto text-center bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center justify-center text-sm font-semibold md:text-base'>
                                    Agendar horário
                                    <ArrowRight className='w-4 h-4' />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='overflow-hidden'>
                        <CardContent className='p-0'>
                            <div>
                                <div className='relative w-full h-48'>
                                    <Image src={fotoImg} alt='foto' fill className='object-cover' />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-lg font-bold text-zinc-900'>Clínica 1</h3>
                                        <p className='text-sm text-zinc-600'>Rua dos Bobos, 0</p>
                                    </div>
                                    <div className="w-2 5 h-2 5 bg-emerald-500 rounded-full"> </div>
                                </div>
                                <Link href='/clinica/1' className='w-full md:w-auto text-center bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center justify-center text-sm font-semibold md:text-base'>
                                    Agendar horário
                                    <ArrowRight className='w-4 h-4' />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </section>
    )
}

export default professionals