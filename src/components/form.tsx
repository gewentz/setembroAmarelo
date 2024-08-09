import React, { useState } from 'react';
import axios from 'axios';

const Formulario: React.FC = () => {
  const [respostas, setRespostas] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: '',
    q11: '',
    q12: '',
    q13: '',
    q14: '',
    q15: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRespostas(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://backend-setembro-amarelo.onrender.com/send', respostas);
      console.log('Resposta do servidor:', response.data);
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col pb-10 gap-4 text-selectiveyellow-950">
      <div className='flex flex-col gap-1'>
        <label>1- Você conhece ou já ouviu falar no setembro amarelo?</label>
        <div className='flex gap-3 ml-2'>
          <input type="radio" name="q1" value="Sim" onChange={handleChange} /> Sim
          <input type="radio" name="q1" value="Não" onChange={handleChange} /> Não
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label>2- Você conhecia a história de origem do setembro amarelo?</label>
        <div className='flex gap-3 ml-2'>
          <input type="radio" name="q2" value="Sim" onChange={handleChange} /> Sim
          <input type="radio" name="q2" value="Não" onChange={handleChange} /> Não
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label>3- O termo Suicida Passivo, antes da palestra, era desconhecido por você?</label>
        <div className='flex gap-3 ml-2'>
          <input type="radio" name="q3" value="Sim" onChange={handleChange} /> Sim
          <input type="radio" name="q3" value="Não" onChange={handleChange} /> Não
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label>4- Você já foi/teve contato com alguém que necessitou de ajuda psicológica?</label>
        <div className='flex gap-3 ml-2'>
          <input type="radio" name="q4" value="Sim" onChange={handleChange} /> Sim
          <input type="radio" name="q4" value="Não" onChange={handleChange} /> Não
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label>5- Você gostaria de receber auxílio psicológico?</label>
        <div className='flex gap-3 ml-2'>
          <input type="radio" name="q5" value="Sim" onChange={handleChange} /> Sim
          <input type="radio" name="q5" value="Não" onChange={handleChange} /> Não
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label>6- O que você acha da ajuda psicológica:</label>
        <select name="q6" onChange={handleChange} className='border rounded px-2 py-1 bg-selectiveyellow-400'>
          <option className="hover:bg-selectiveyellow-200" value="Necessária">Necessária</option>
          <option className="hover:bg-selectiveyellow-200" value="Não Necessária">Não Necessária</option>
          <option className="hover:bg-selectiveyellow-200" value="Não tenho uma opinião sobre isso">Não tenho uma opinião sobre isso</option>
        </select>
      </div>

      <div className='flex flex-col gap-1'>
        <label>7- Qual a sua idade?</label>
        <select name="q7" onChange={handleChange} className='border rounded px-2 py-1 bg-selectiveyellow-400'>
          <option className="hover:bg-selectiveyellow-200" value="entre 13 e 17">entre 13 e 17</option>
          <option className="hover:bg-selectiveyellow-200" value="entre 18 e 25">entre 18 e 25</option>
          <option className="hover:bg-selectiveyellow-200" value="entre 26 a 40">entre 26 a 40</option>
        </select>
      </div>

      <div className='flex flex-col gap-1'>
        <label>8- Você já ingeriu bebidas alcoólicas ou cigarros/palheiros/pods antes da maioridade (18 anos)?</label>
        <select name="q8" onChange={handleChange} className='border rounded px-2 py-1 bg-selectiveyellow-400'>
          <option className="hover:bg-selectiveyellow-200" value="Sim">Sim</option>
          <option className="hover:bg-selectiveyellow-200" value="Não">Não</option>
          <option className="hover:bg-selectiveyellow-200" value="Prefiro não comentar">Prefiro não comentar</option>
        </select>
      </div>

      <div className='flex flex-col gap-1'>
        <label>9- Você é a favor do consumo de bebidas alcoólicas, cigarros ou entorpecentes para menores de idade?</label>
        <div className='flex gap-3 ml-2'>
          <input type="radio" name="q9" value="Sim" onChange={handleChange} /> Sim
          <input type="radio" name="q9" value="Não" onChange={handleChange} /> Não
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label>10- O que você acha de menores de 18 anos consumindo tais mercadorias?</label>
        <select name="q10" onChange={handleChange} className='border rounded px-2 py-1 bg-selectiveyellow-400'>
          <option className="hover:bg-selectiveyellow-200" value="Concordo">Concordo</option>
          <option className="hover:bg-selectiveyellow-200" value="Discordo">Discordo</option>
          <option className="hover:bg-selectiveyellow-200" value="Prefiro não comentar">Prefiro não comentar</option>
        </select>
      </div>

      <div className='flex flex-col gap-1'>
        <label>11- Você constantemente sente tédio, cansaço extremo ou apatia com a vida?</label>
        <div className='flex gap-3 ml-2'>
          <input type="radio" name="q11" value="Sim" onChange={handleChange} /> Sim
          <input type="radio" name="q11" value="Não" onChange={handleChange} /> Não
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label>12- Você já considerou buscar ajuda psicológica?</label>
        <div className='flex gap-3 ml-2'>
          <input type="radio" name="q12" value="Sim" onChange={handleChange} /> Sim
          <input type="radio" name="q12" value="Não" onChange={handleChange} /> Não
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label>13- O que te impede de iniciar um acompanhamento?</label>
        <select name="q13" onChange={handleChange} className='border rounded px-2 py-1 bg-selectiveyellow-400'>
          <option className="hover:bg-selectiveyellow-200" value="Financeiro">Financeiro</option>
          <option className="hover:bg-selectiveyellow-200" value="Falta de confiança/medo do profissional">Falta de confiança/medo do profissional</option>
          <option className="hover:bg-selectiveyellow-200" value="Nada me impede">Nada me impede</option>
          <option className="hover:bg-selectiveyellow-200" value="Outro">Outro</option>
        </select>
      </div>

      <div className='flex flex-col gap-1'>
        <label>14- Você considera que a palestra lhe ensinou algo sobre o Setembro Amarelo?</label>
        <div className='flex gap-3 ml-2'>
          <input type="radio" name="q14" value="Sim" onChange={handleChange} /> Sim
          <input type="radio" name="q14" value="Não" onChange={handleChange} /> Não
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label>15- Como você avalia a palestra e o questionário?</label>
        <select name="q15" onChange={handleChange} className='border rounded px-2 py-1 bg-selectiveyellow-400'>
          <option className="hover:bg-selectiveyellow-200" value="Bom">Bom</option>
          <option className="hover:bg-selectiveyellow-200" value="Mediano">Mediano</option>
          <option className="hover:bg-selectiveyellow-200" value="Ruim">Ruim</option>
          <option className="hover:bg-selectiveyellow-200" value="Prefiro não comentar">Prefiro não comentar</option>
        </select>
      </div>

      <button type="submit" className='bg-selectiveyellow-500 text-selectiveyellow-950 font-black uppercase px-4 py-2 rounded hover:bg-selectiveyellow-600'>Enviar</button>
    </form>
  );
};

export default Formulario;
