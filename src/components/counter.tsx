import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Counter() {

  const [totalRespostas, setTotalRespostas] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://backend-setembro-amarelo.onrender.com/questionario');
        setTotalRespostas(response.data.questionarios.length);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='w-full flex justify-center'>
      <h1 className='bg-selectiveyellow-400 text-selectiveyellow-950 rounded-md py-1 px-2 shadow-shape'>Total de Respostas: {totalRespostas}</h1>
    </div>
  );
}

export default Counter;
