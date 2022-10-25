import type { NextPage } from 'next'
import Head from 'next/head'

const Projetos: NextPage = () => {
  return (
    <div className="bganimado h-screen w-screen antialiased select-none">
      <Head>
        <title>Robótica Valois</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">

        <div className='flex flex-col text-center'>
          <a href="/"><h1 className='text-7xl italic text-amber-200 font-bold hover:text-8xl'>Clube de robótica</h1></a>
          <div className=''>
            <h1 className='text-4xl font-medium text-orange-100'>Projetos desenvolvidos:</h1>
          </div>
        </div>
        
      </main>

    </div>
  )
}

export default Projetos
