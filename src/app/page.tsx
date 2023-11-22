import Carousel from '@/components/home/Carousel'
import Categorias from '@/components/home/Categorias'
import Destacados from '@/components/home/Destacados'

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-between">
      <Carousel />
      <div className="w-full h-auto p-10 flex flex-wrap justify-around">
        <Categorias />
      </div>
      <h1>Destacados</h1>
      <div className='w-full flex flex-wrap'>
        <Destacados />
      </div>
    </main>
  )
}
