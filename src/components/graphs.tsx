import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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

interface GraficoProps {
  questionarios: Questionario[];
}

const Grafico = ({ questionarios }: GraficoProps) => {
  const contarRespostas = (chave: keyof Questionario) => {
    const contagem: Record<string, number> = {};

    questionarios.forEach((questionario) => {
      const resposta = questionario[chave];
      if (contagem[resposta]) {
        contagem[resposta] += 1;
      } else {
        contagem[resposta] = 1;
      }
    });

    return contagem;
  };

  const gerarData = (chave: keyof Questionario) => {
    const contagem = contarRespostas(chave);

    return {
      labels: Object.keys(contagem),
      datasets: [
        {
          label: 'Respostas',
          data: Object.values(contagem),
          backgroundColor: '#903e10',
          borderColor: '#f7b928',
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div>
      {Array.from({ length: 15 }, (_, index) => {
        const pergunta = `q${index + 1}` as keyof Questionario;
        return (
          <div key={pergunta} className="mb-6">
            <h3 className="text-center font-bold text-selectiveyellow-950">Pergunta {index + 1}</h3>
            <Bar data={gerarData(pergunta)} />
          </div>
        );
      })}
    </div>
  );
};

export default Grafico;
