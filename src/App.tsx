import { useState } from "react";
import logoImg from "./assets/logo.png";

const App = () => {
  const [gasolina, setGasolina] = useState("");
  const [alcool, setAlcool] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-600 p-2">
      <main className="flex flex-col items-center text-white w-full max-w-xl md:max-w-2xl gap-3">
        <img src={logoImg} alt="logo da bomba de gasolina" />
        <h1 className="font-bold text-2xl my-2">Qual a melhor opção ?</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-xl md:max-w-2xl gap-2"
        >
          <div>
            <label htmlFor="alcool">Álcool (Preço por litro)</label>
            <input
              type="text"
              name="alcool"
              min="1"
              step="0.01"
              placeholder="4,99"
              required
              value={alcool}
              onChange={(e) => setAlcool(e.target.value)}
              className="bg-white w-full h-8 md:h-10 border-2 border-gray-800 focus:outline-2 text-black p-2"
            />
          </div>
          <div>
            <label htmlFor="gasolina">Gasolina (Preço por litro)</label>
            <input
              type="text"
              name="gasolina"
              min="1"
              step="0.01"
              placeholder="5,78"
              required
              value={gasolina}
              onChange={(e) => setGasolina(e.target.value)}
              className="w-full bg-white h-8 md:h-10 shadow-md border-2 border-gray-800 text-black p-2 focus:outline-2"
            />
          </div>
          <button className="bg-blue-500 p-2 font-bold rounded-md border-none cursor-pointer shadow-md ">
            Calcular
          </button>
        </form>
      </main>
    </div>
  );
};

export default App;
