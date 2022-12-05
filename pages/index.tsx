import type { NextPage } from 'next'
import Head from 'next/head'
import textos from '../utils/textos.json'

const Home: NextPage = () => {
  return (
    <div className="bganimado h-screen w-screen antialiased select-none">
      <Head>
        <title>Robótica Valois</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">

        <div className='flex flex-col text-center'>
          <h1 className='text-7xl italic text-amber-400 font-bold'>Clube de robótica</h1>
          <h2 className='text-4xl my-4 italic text-yellow-400 font-medium'>{textos.clube_sobre}</h2>
          <div className='divPrincipalGlass flex flex-col flex-wrap m-40 w-5/6 rounded-md'>
{/*             <div className='m-6 rounded-lg'>
              <a href="sobre"><h1 className='w-full h-40 grid place-content-center text-6xl text-orange-200 font-medium hover:text-8xl'>Sobre</h1></a>
            </div> */}
            <div className='m-6 rounded-lg'>
              <a href="projetos"><h1 className='w-full h-40 grid place-content-center text-6xl text-orange-200 font-medium hover:text-8xl'>Projetos</h1></a>
            </div>
          </div>
        </div>
        
      </main>

    </div>
  )
}

export default Home