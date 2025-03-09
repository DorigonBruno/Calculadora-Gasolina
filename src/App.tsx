import { useState, FormEvent } from "react";
import logoImg from "./assets/logo.png";

type InfoProps = {
  title: string;
  gasolina: string | number;
  alcool: string | number;
};

const App = () => {
  const [gasolina, setGasolina] = useState(0);
  const [alcool, setAlcool] = useState(0);

  const [info, setInfo] = useState<InfoProps>();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const calculo = alcool / gasolina;

    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar Álcool",
        gasolina: formataMoeda(gasolina),
        alcool: formataMoeda(alcool),
      });
      setAlcool(0);
      setGasolina(0);
    } else {
      setInfo({
        title: "Compensa usar Gasolina",
        gasolina: formataMoeda(gasolina),
        alcool: formataMoeda(alcool),
      });

      setAlcool(0);
      setGasolina(0);
    }
  }

  function formataMoeda(valor: number) {
    const valorFormatado = valor.toLocaleString("PT-BR", {
      style: "currency",
      currency: "BRL",
    });

    return valorFormatado;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-600 p-2">
      <main className="flex flex-col items-center text-white w-full max-w-xl md:max-w-2xl gap-3">
        <img src={logoImg} alt="logo da bomba de gasolina" />
        <h1 className="font-bold text-2xl md:text-3xl my-2">
          Qual a melhor opção ?
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-xl md:max-w-2xl gap-2"
        >
          <div>
            <label htmlFor="alcool">Álcool (Preço por litro)</label>
            <input
              type="number"
              name="alcool"
              min="1"
              step="0.01"
              placeholder="4,99"
              required
              value={alcool}
              onChange={(e) => setAlcool(+e.target.value)}
              className="bg-white w-full h-8 md:h-10 border-2 border-gray-800 focus:outline-2 text-black p-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="gasolina">Gasolina (Preço por litro)</label>
            <input
              type="number"
              name="gasolina"
              min="1"
              step="0.01"
              placeholder="5,78"
              required
              value={gasolina}
              onChange={(e) => setGasolina(+e.target.value)}
              className="w-full bg-white h-8 md:h-10 shadow-md border-2 border-gray-800 text-black p-2 focus:outline-2 rounded-md"
            />
          </div>
          <button className="bg-blue-500 p-1 md:p-2 font-bold rounded-md border-none cursor-pointer shadow-md ">
            Calcular
          </button>
        </form>

        {info && (
          <div className="bg-green-500 w-full max-w-sm md:max-w-md text-center p-2 mt-4">
            <h2 className="text-xl md:text-2xl mt-1 mb-4 font-bold">
              {info.title}
            </h2>

            <span className="block  hover:scale-110 transition duration-200 ease-in-out">
              Gasolina {info.gasolina}
            </span>
            <span className="block mb-2  hover:scale-110 transition duration-200 ease-in-out">
              Álcool {info.alcool}
            </span>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
