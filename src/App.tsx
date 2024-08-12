import { useEffect, useState } from "react";
import Formulario from "./components/form"

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import Counter from "./components/counter";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function App() {

  interface Questionario {
    q1: string;
    q2: string;
    q3: string;
    q4: string;
    q5: string;
    q6: string;
    q7: string;
    q8: string;
    q9: string;
    q10: string;
    q11: string;
    q12: string;
    q13: string;
    q14: string;
    q15: string;
  }

  const [questionarios, setQuestionarios] = useState<Questionario[]>([]);
  const addQuestionario = (novoQuestionario: Questionario) => {
  setQuestionarios([...questionarios, novoQuestionario]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://backend-setembro-amarelo.onrender.com/questionario'); // Replace with your actual API endpoint
        const data = await response.json();
        setQuestionarios(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  function getFrequencyCount(questionKey: keyof Questionario): { [response: string]: number } {
    const freq: { [response: string]: number } = {};
    questionarios.forEach(q => {
      const response = q[questionKey];
      if (response in freq) {
        freq[response]++;
      } else {
        freq[response] = 1;
      }
    });
    return freq;
  }

  const questions = [
    { key: 'q1', label: 'Pergunta 1: [Texto da Pergunta 1]' },
    { key: 'q2', label: 'Pergunta 2: [Texto da Pergunta 2]' },
    { key: 'q3', label: 'Pergunta 3: [Texto da Pergunta 3]' },
    { key: 'q4', label: 'Pergunta 4: [Texto da Pergunta 4]' },
    { key: 'q5', label: 'Pergunta 5: [Texto da Pergunta 5]' },
    { key: 'q6', label: 'Pergunta 6: [Texto da Pergunta 6]' },
    { key: 'q7', label: 'Pergunta 7: [Texto da Pergunta 7]' },
    { key: 'q8', label: 'Pergunta 8: [Texto da Pergunta 8]' },
    { key: 'q9', label: 'Pergunta 9: [Texto da Pergunta 9]' },
    { key: 'q10', label: 'Pergunta 10: [Texto da Pergunta 10]' },
    { key: 'q11', label: 'Pergunta 11: [Texto da Pergunta 11]' },
    { key: 'q12', label: 'Pergunta 12: [Texto da Pergunta 12]' },
    { key: 'q13', label: 'Pergunta 13: [Texto da Pergunta 13]' },
    { key: 'q14', label: 'Pergunta 14: [Texto da Pergunta 14]' },
    { key: 'q15', label: 'Pergunta 15: [Texto da Pergunta 15]' },
  ];

  return (
    <main className="flex flex-col w-full h-full items-center bg-gradient-to-t from-selectiveyellow-50 to-selectiveyellow-200">

        <div id="Hero" className="flex w-4/5 h-full">
          <div className="w-full h-64 md:h-96 relative top-0 bg-laco bg-no-repeat bg-[length:200px_200px] md:bg-[length:auto] bg-right py-5 md:py-2 ">
            <h1 className="text-6xl md:text-9xl font-black relative top-4 uppercase text-selectiveyellow-950">Setembro</h1>
            <h1 className="text-6xl md:text-9xl font-black relative left-8 uppercase text-selectiveyellow-950">Amarelo</h1>
            <h2 className="bg-selectiveyellow-700 rounded-lg text-selectiveyellow-400 z-10 relative  uppercase font-bold py-2 md:px-8 px-2 text-center left-20 md:left-80 -translate-y-5 md:-translate-y-8 text-[10px] md:text-base w-fit">Preservar a vida não é só se manter vivo</h2>
          </div>
        </div>

          <div className="relative shadow-shape bg-selectiveyellow-200 p-4 md:p-10 flex flex-col md:gap-1 pb-10 mx-2">
            <h2 className="text-center uppercase font-bold text-selectiveyellow-950">Responda de forma sincera a todas as perguntas!</h2>
            <Formulario addQuestionario={addQuestionario}/>
          </div>

          <div className="relative p-4 md:p-10 flex flex-wrap md:gap-4 pb-10 justify-between">
            <h2 className="text-center uppercase font-bold text-selectiveyellow-950 w-full">
              Gráficos
            </h2>
            <Counter />

          {/* Display a loading message if data is not yet fetched */}
        {questionarios.length === 0 ? (
          <p>Carregando dados...</p>
        ) : (
          // Map through each question and create a bar chart
          questions.map((question) => {
            const freqCount = getFrequencyCount(question.key as keyof Questionario);
            const labels = Object.keys(freqCount);
            const data = {
              labels: labels,
              datasets: [
                {
                  label: 'Número de Respostas',
                  data: labels.map(label => freqCount[label]),
                  backgroundColor: '#b1500c', // Customize the color as needed
                },
              ],
            };

            return (
              <div key={question.key} className="mb-8">
                <h3 className="text-lg font-semibold mb-2">{question.label}</h3>
                <Bar
                  data={data}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      title: {
                        display: true,
                        text: question.label,
                      },
                    },
                  }}
                />
              </div>
            );
          })
        )}

          </div>


        <footer className="w-full">
          <div className="flex justify-center items-center bg-selectiveyellow-700 text-selectiveyellow-400 w-full h-16">
            <p className="text-center text-[10px] md:text-base">Desenvolvido por <a href="https://wentz.dev.br" target="_blank" rel="noopener noreferrer">Wentz.dev</a>, todos os direitos reservados. &#169;2024</p>

            <a href="https://wentz.dev.br" target="_blank" className="size-20 md:size-24"><img src="/logo white.svg" alt="Logo Wentz.dev.br" /></a>
          </div>
        </footer>
    </main>
  )
}

export default App