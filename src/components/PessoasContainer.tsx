import React from 'react';

interface Pessoa {
  nome: string;
  cargo: string;
  imagemUrl: string;
}

interface PessoasContainerProps {
  pessoas: Pessoa[];
}

const PessoasContainer: React.FC<PessoasContainerProps> = ({ pessoas }) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-2 gap-4">
        {pessoas.map((pessoa, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={pessoa.imagemUrl} alt={pessoa.nome} className="w-52 h-52 rounded-full" />
            <p className="mt-2 text-2xl font-semibold">{pessoa.nome}</p>
            <p className="text-gray-600 text-xl font-semibold">{pessoa.cargo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PessoasContainer;
