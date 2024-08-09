import Formulario from "./components/form"

function App() {

  return (
    <main className="flex flex-col w-full h-full items-center bg-gradient-to-t from-selectiveyellow-50 to-selectiveyellow-200 gap-9">
        <div id="Hero" className="w-full h-fit">
          <div className="w-full h-64 md:h-96 fixed top-0 left-0 bg-laco bg-no-repeat bg-[length:200px_200px] md:bg-[length:auto] bg-right py-5 md:py-10">
            <h1 className="text-6xl md:text-9xl font-black relative top-4 left-6 uppercase text-selectiveyellow-950">Setembro</h1>
            <h1 className="text-6xl md:text-9xl font-black relative left-20 uppercase text-selectiveyellow-950">Amarelo</h1>
            <h2 className="bg-selectiveyellow-700 rounded-lg text-selectiveyellow-400 z-10 relative  uppercase font-bold py-2 md:px-8 px-2 text-center left-32  md:left-80 -translate-y-5 md:-translate-y-8 text-[10px] md:text-base w-fit">Preservar a vida não é só se manter vivo</h2>
          </div>
          <div className="relative shadow-shape bg-selectiveyellow-200 p-4 md:p-10 flex flex-col top-44 md:gap-4 md:top-80 m-3 pb-10">
            <h2 className="text-center uppercase font-bold text-selectiveyellow-950">Responda de forma sincera a todas as perguntas!</h2>
            <Formulario />
          </div>
        </div>

        <footer>
          <div className="flex flex-row justify-around items-center bg-selectiveyellow-700 text-selectiveyellow-400 left-0 fixed w-full bottom-0 h-16">
            <p className="text-center text-[10px] md:text-base">Desenvolvido por <a href="https://wentz.dev.br" target="_blank" rel="noopener noreferrer">Wentz.dev</a>, todos os direitos reservados. &#169;2024</p>
            <a href="https://wentz.dev.br" target="_blank"><img className="size-20 md:size-24" src="/public/logo white.png" alt="logo wentz.dev.br"  /></a>
          </div>
        </footer>
    </main>
  )
}

export default App