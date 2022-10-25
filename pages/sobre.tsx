import type { NextPage } from 'next'
import Head from 'next/head'

const Sobre: NextPage = () => {
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
            <h1 className='text-4xl font-medium text-orange-100'>Sobre o Clube de Robótica:</h1>
            <div className='sobreCard w-3/6 m-16'>
              <h3 className='text-2xl italic'>
                O Clube "Robótica Valois" foi um clube criado em 2022 na escola Valois Scortecci com o objetivo de desenvolver projetos tecnológicos utilizando os materiais disponíveis na própria escola.
              </h3>
            </div>
          </div>
        </div>
        
      </main>

    </div>
  )
}

export default Sobre
