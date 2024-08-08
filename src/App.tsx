import Formulario from "./components/form"

function App() {

  return (
    <main className="flex flex-col w-full h-svh items-center bg-gradient-to-t from-selectiveyellow-50 to-selectiveyellow-200">
        <div id="Hero" className="flex w-full h-svh items-center justify-center p-10">
          <div className="w-full h-96 fixed top-0 left-0 bg-laco bg-no-repeat bg-right py-10">
            <h1 className="text-9xl font-black absolute top-4 left-10 uppercase text-selectiveyellow-950">Setembro</h1>
            <h1 className="text-9xl font-black absolute top-32 left-32 uppercase text-selectiveyellow-950">Amarelo</h1>
            <h2 className="bg-selectiveyellow-700 rounded-lg text-selectiveyellow-400 z-10 absolute top-60 uppercase font-bold py-2 px-10 left-80">Preservar a vida não é só se manter vivo</h2>
          </div>
        </div>

        <div id="content" className="w-full p-10 flex flex-col gap-4 absolute top-2/4"> 
          <div className="p-2 shadow-shape bg-gradient-to-t from-selectiveyellow-50 to-selectiveyellow-200">
            <h2 className="text-center uppercase font-bold text-selectiveyellow-950">Responda de forma sincera a todas as perguntas!</h2>
            <Formulario />
          </div>
        </div>
    </main>
  )
}

export default App