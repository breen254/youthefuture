import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen items-center justify-center flex flex-col gap-3'>
      <div className='absolute top-[64px]'>


        <section className='flex items-center justify-around w-full'>
          <div className="w-16 h-16 rounded-full relative mt-10">
            

            <div className='border bg-white transform -translate-x-1/2 -translate-y-1/2 eye-pupil  animate-blink rounded-full overflow-hidden'>

              <div className="w-8 h-8 bg-black rounded-full absolute top-1/2 left-1/2 ">

              </div>


            </div>
            
            <div className="raindrop"></div>
            
          

          </div>
          

        </section>
        
      </div>

      <div className='rounded-full border'>

        <h2 className='flex items-center justify-center'>Ooops!!! </h2>
        <p className='flex items-center justify-center'>Nothing here...</p>

        <Link href="/">
          <Button className='rounded-b-full'>
            Return Home
          </Button>
        </Link>

        
      </div>

    </div>
  )
}