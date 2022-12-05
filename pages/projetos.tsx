import type { NextPage } from 'next'
import Head from 'next/head'

const Projetos: NextPage = () => {
  return (
    <div className="bganimado h-screen w-screen antialiased select-none overflow-hidden">
      <Head>
        <title>Robótica Valois</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">

        <div className='flex flex-col text-center'>
          <a href="/"><h1 className='text-7xl italic text-amber-400 font-bold hover:text-8xl'>Clube de robótica</h1></a>
          <div className=''>
            <h1 className='text-4xl font-medium text-orange-100'>Projetos desenvolvidos:</h1>
            <div className='grid grid-cols-3 gap-4 m-16'>
              <img src='/robocasa1.jpg' className='h-60 rounded-lg' />
              <img src='/robocasa2.jpg' className='h-60 rounded-lg' />
              <img src='/robopronto1.jpg' className='h-60 rounded-lg' />
              <img src='/robopronto2.jpg' className='h-60 rounded-lg' />
              <img src='/fotopessoal1.jpg' className='h-60 rounded-lg' />
              <video controls className='h-60 rounded-lg'> 
                <source src='/videoOBR.mp4' type='video/mp4'/>
              </video>
              <video controls className='h-60 rounded-lg'> 
                <source src='/videoPrimeiroTeste.mp4' type='video/mp4'/>
              </video>
            </div>
          </div>
        </div>
        
      </main>

    </div>
  )
}

export default Projetos