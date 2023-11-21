import Carousel from '@/components/home/Carousel'
import Categorias from '@/components/home/Categorias'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-between">
      <Carousel />
      <div className="w-full h-auto p-10 flex flex-wrap justify-around">
        <Categorias />
      </div>
      <div className='w-full flex justify-center'>
        <h1>seguir con destacados</h1>
      </div>
    </main>
  )
}
