import Carousel from '@/components/home/Carousel'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <Carousel />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div>
    </main>
  )
}
