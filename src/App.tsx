import Formulario from "./components/form"

function App() {

  return (
    <main className="flex flex-col w-full h-full items-center bg-gradient-to-t from-selectiveyellow-50 to-selectiveyellow-200">

        <div id="Hero" className="w-full h-full">
          <div className="w-full h-64 md:h-96 relative top-0 left-0 bg-laco bg-no-repeat bg-[length:200px_200px] md:bg-[length:auto] bg-right py-5 md:py-2">

            <h1 className="text-6xl md:text-9xl font-black relative top-4 left-6 uppercase text-selectiveyellow-950">Setembro</h1>

            <h1 className="text-6xl md:text-9xl font-black relative left-20 uppercase text-selectiveyellow-950">Amarelo</h1>

            <h2 className="bg-selectiveyellow-700 rounded-lg text-selectiveyellow-400 z-10 relative  uppercase font-bold py-2 md:px-8 px-2 text-center left-32  md:left-80 -translate-y-5 md:-translate-y-8 text-[10px] md:text-base w-fit">Preservar a vida não é só se manter vivo</h2>
          </div>
        </div>

          <div className="relative shadow-shape bg-selectiveyellow-200 p-4 md:p-10 flex flex-col md:gap-1 mx-3 pb-10">
            <h2 className="text-center uppercase font-bold text-selectiveyellow-950">Responda de forma sincera a todas as perguntas!</h2>
            <Formulario />
          </div>

          <div className="relative p-4 md:p-10 flex md:gap-4 mx-3 pb-10">
            <h2 className="text-center uppercase font-bold text-selectiveyellow-950">
              Gráficos
            </h2>

          </div>





        <footer className="w-full mx-3">
          <div className="flex justify-center items-center bg-selectiveyellow-700 text-selectiveyellow-400 w-full h-16">
            <p className="text-center text-[10px] md:text-base">Desenvolvido por <a href="https://wentz.dev.br" target="_blank" rel="noopener noreferrer">Wentz.dev</a>, todos os direitos reservados. &#169;2024</p>

            <a href="https://wentz.dev.br" target="_blank" className="size-20 md:size-24"><img src="/public/logo white.svg" alt="Logo Wentz.dev.br" /></a>
          </div>
        </footer>
    </main>
  )
}

export default App