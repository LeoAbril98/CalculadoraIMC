import React, { useState } from 'react';
import './FormularioIMC.css';

const FormularioIMC = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));
    definirClassificacaoIMC(imcCalculado);
  };

  const definirClassificacaoIMC = (imc) => {
    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
      setClassificacao('Peso normal');
    } else if (imc >= 25 && imc < 30) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div className="formulario-imc">
      <h2>Calculadora de IMC</h2>
      <div>
        <label htmlFor="altura">Altura (cm):</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="peso">Peso (kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && classificacao && (
        <div className="resultado">
          <h3>Resultado:</h3>
          <p>IMC: {imc}</p>
          <p>Classificação: {classificacao}</p>
          <p>
            Abaixo de 18.5: Magro demais<br />
            Entre 18.5 e 24.9: Peso Normal<br />
            Entre 25 e 29.9: Sobrepeso<br />
            Acima de 30: Obesidade
          </p>
        </div>
      )}
    </div>
  );
};

export default FormularioIMC;
