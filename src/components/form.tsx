import { useState } from "react";
import axios from "axios";

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

type Props = {
  addQuestionario: (data: Questionario) => void;
};

const Formulario = ({ addQuestionario }: Props) => {
  const [formData, setFormData] = useState<Questionario>({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    q11: "",
    q12: "",
    q13: "",
    q14: "",
    q15: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function exibirAlerta() {
    alert("Obrigado(a) por participar, todas as respostas são enviadas de forma anônima, nenhum dado de usuário é coletado para esta pesquisa!");
}

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://backend-setembro-amarelo.onrender.com/questionario",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const novoQuestionario: Questionario = response.data;

      if (typeof addQuestionario === "function") {
        addQuestionario(novoQuestionario);
      } else {
        console.error("addQuestionario não é uma função");
      }

      setFormData({
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
        q8: "",
        q9: "",
        q10: "",
        q11: "",
        q12: "",
        q13: "",
        q14: "",
        q15: "",
      });
      exibirAlerta();
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.message) {
          console.log("Erro da API:", err.message);
        } else {
          console.log("Erro:", err.message);
        }
      } else {
        console.log("Erro desconhecido:", err);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 text-selectiveyellow-950"
    >
      <div className="flex flex-col gap-1">
        <label>1- Você conhece ou já ouviu falar no setembro amarelo?</label>
        <div className="flex gap-3 ml-2">
          <select
            required
            name="q1"
            onChange={handleChange}
            value={formData.q1}
            className="border rounded px-2 py-1 bg-selectiveyellow-400 w-full"
          >
            <option className="hover:bg-selectiveyellow-200" value="">
              Selecione
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Sim">
              Sim
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Não">
              Não
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label>
          2- Você conhecia a história de origem do setembro amarelo?
        </label>
        <div className="flex gap-3 ml-2">
          <select
            required
            name="q2"
            onChange={handleChange}
            value={formData.q2}
            className="border rounded px-2 py-1 bg-selectiveyellow-400 w-full"
          >
            <option className="hover:bg-selectiveyellow-200" value="">
              Selecione
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Sim">
              Sim
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Não">
              Não
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label>
          3- O termo Suicida Passivo, antes da palestra, era desconhecido por
          você?
        </label>
        <div className="flex gap-3 ml-2">
          <select
            required
            name="q3"
            onChange={handleChange}
            value={formData.q3}
            className="border rounded px-2 py-1 bg-selectiveyellow-400 w-full"
          >
            <option className="hover:bg-selectiveyellow-200" value="">
              Selecione
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Sim">
              Sim
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Não">
              Não
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label>
          4- Você já foi/teve contato com alguém que necessitou de ajuda psicológica?
        </label>
        <div className="flex gap-3 ml-2">
          <select
            required
            name="q4"
            onChange={handleChange}
            value={formData.q4}
            className="border rounded px-2 py-1 bg-selectiveyellow-400 w-full"
          >
            <option className="hover:bg-selectiveyellow-200" value="">
              Selecione
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Sim">
              Sim
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Não">
              Não
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label>5- Você gostaria de receber auxílio psicológico?</label>
        <div className="flex gap-3 ml-2">
          <select
            required
            name="q5"
            onChange={handleChange}
            value={formData.q5}
            className="border rounded px-2 py-1 bg-selectiveyellow-400 w-full"
          >
            <option className="hover:bg-selectiveyellow-200" value="">
              Selecione
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Sim">
              Sim
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Não">
              Não
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label>6- O que você acha da ajuda psicológica?</label>
        <div className="flex gap-3 ml-2">
          <select
            required
            name="q6"
            onChange={handleChange}
            value={formData.q6}
            className="border rounded px-2 py-1 bg-selectiveyellow-400 w-full"
          >
            <option className="hover:bg-selectiveyellow-200" value="">
              Selecione
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Necessária">
              Necessária
            </option>
            <option
              className="hover:bg-selectiveyellow-200"
              value="Não Necessária"
            >
              Não Necessária
            </option>
            <option
              className="hover:bg-selectiveyellow-200"
              value="Não tenho uma opinião sobre isso"
            >
              Não tenho uma opinião sobre isso
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label>7- Qual a sua idade?</label>
        <div className="flex gap-3 ml-2">
          <select
            required
            name="q7"
            onChange={handleChange}
            value={formData.q7}
            className="border rounded px-2 py-1 bg-selectiveyellow-400 w-full"
          >
            <option className="hover:bg-selectiveyellow-200" value="">
              Selecione
            </option>
            <option
              className="hover:bg-selectiveyellow-200"
              value="entre 13 e 17"
            >
              entre 13 e 17
            </option>
            <option
              className="hover:bg-selectiveyellow-200"
              value="entre 18 e 25"
            >
              entre 18 e 25
            </option>
            <option
              className="hover:bg-selectiveyellow-200"
              value="entre 26 a 40"
            >
              entre 26 a 40
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label>
          8- Você já ingeriu bebidas alcoólicas ou cigarros/palheiros/pods antes da maioridade (18 anos)?
        </label>
        <div className="flex gap-3 ml-2">
          <select
            required
            name="q8"
            onChange={handleChange}
            value={formData.q8}
            className="border rounded px-2 py-1 bg-selectiveyellow-400 w-full"
          >
            <option className="hover:bg-selectiveyellow-200" value="">
              Selecione
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Sim">
              Sim
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Não">
              Não
            </option>
            <option
              className="hover:bg-selectiveyellow-200"
              value="Prefiro não comentar"
            >
              Prefiro não comentar
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label>
          9- Como você avalia a assistência psicológica disponível na sua cidade?
        </label>
        <div className="flex gap-3 ml-2">
          <select
            required
            name="q9"
            onChange={handleChange}
            value={formData.q9}
            className="border rounded px-2 py-1 bg-selectiveyellow-400 w-full"
          >
            <option className="hover:bg-selectiveyellow-200" value="">
              Selecione
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Bom">
              Bom
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Mediano">
              Mediano
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Ruim">
              Ruim
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label>10- A relação com seus pais é boa?</label>
        <div className="flex gap-3 ml-2">
          <select
            required
            name="q10"
            onChange={handleChange}
            value={formData.q10}
            className="border rounded px-2 py-1 bg-selectiveyellow-400 w-full"
          >
            <option className="hover:bg-selectiveyellow-200" value="">
              Selecione
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Sim">
              Sim
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Não">
              Não
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label>11- A relação com seus amigos é boa?</label>
        <div className="flex gap-3 ml-2">
          <select
            required
            name="q11"
            onChange={handleChange}
            value={formData.q11}
            className="border rounded px-2 py-1 bg-selectiveyellow-400 w-full"
          >
            <option className="hover:bg-selectiveyellow-200" value="">
              Selecione
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Sim">
              Sim
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Não">
              Não
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label>12- Você já teve pensamentos suicidas?</label>
        <div className="flex gap-3 ml-2">
          <select
            required
            name="q12"
            onChange={handleChange}
            value={formData.q12}
            className="border rounded px-2 py-1 bg-selectiveyellow-400 w-full"
          >
            <option className="hover:bg-selectiveyellow-200" value="">
              Selecione
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Sim">
              Sim
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Não">
              Não
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label>
          13- Você conhece algum centro de apoio psicológico em sua cidade?
        </label>
        <div className="flex gap-3 ml-2">
          <select
            required
            name="q13"
            onChange={handleChange}
            value={formData.q13}
            className="border rounded px-2 py-1 bg-selectiveyellow-400 w-full"
          >
            <option className="hover:bg-selectiveyellow-200" value="">
              Selecione
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Sim">
              Sim
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Não">
              Não
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label>
          14- Você considera importante o trabalho dos psicólogos e psiquiatras?
        </label>
        <div className="flex gap-3 ml-2">
          <select
            required
            name="q14"
            onChange={handleChange}
            value={formData.q14}
            className="border rounded px-2 py-1 bg-selectiveyellow-400 w-full"
          >
            <option className="hover:bg-selectiveyellow-200" value="">
              Selecione
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Sim">
              Sim
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Não">
              Não
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label>
          15- Quais fatores você acredita serem os principais obstáculos para o acesso à saúde mental?
        </label>
        <div className="flex gap-3 ml-2">
          <select
            required
            name="q15"
            onChange={handleChange}
            value={formData.q15}
            className="border rounded px-2 py-1 bg-selectiveyellow-400 w-full"
          >
            <option className="hover:bg-selectiveyellow-200" value="">
              Selecione
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Financeiro">
              Financeiro
            </option>
            <option
              className="hover:bg-selectiveyellow-200"
              value="Falta de confiança/medo do profissional"
            >
              Falta de confiança/medo do profissional
            </option>
            <option
              className="hover:bg-selectiveyellow-200"
              value="Nada me impede"
            >
              Nada me impede
            </option>
            <option className="hover:bg-selectiveyellow-200" value="Outro">
              Outro
            </option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="bg-selectiveyellow-500 text-selectiveyellow-950 font-black uppercase px-4 py-2 rounded hover:bg-selectiveyellow-600"
      >
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
