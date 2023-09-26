import React from "react";
import cliente1 from "../assets/client1.png";
import cliente2 from "../assets/client2.png";
import matheus from "../assets/integrantes/matheus.jpg";
import aline from "../assets/integrantes/aline.jpg";
import denys from "../assets/integrantes/denys.jpg";
import arthur from "../assets/integrantes/arthur.jpg";
import elciu from "../assets/integrantes/elciu.jpg";
import alex from "../assets/integrantes/alex.jpg";
import mariana from "../assets/integrantes/mariana.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/ClientesPage.css"; // Importe um arquivo CSS para personalizar o estilo do carrossel
import PessoasContainer from "../components/PessoasContainer";
import ProjetoContainer from "./ProjetoContainer";

const clientes = [
  {
    id: 1,
    nome: "Cliente 1",
    imagem: cliente1,
  },
  {
    id: 2,
    nome: "Cliente 2",
    imagem: cliente2,
  },
];

const pessoas = [
  {
    nome: "Matheus Khairallah",
    cargo: "Diretor Executivo",
    imagemUrl: matheus,
  },
  {
    nome: "Aline Oliveira",
    cargo: "Diretora de Recursos Humanos",
    imagemUrl: aline,
  },
  {
    nome: "Denys Natanael",
    cargo: "CTO (Chief Tecnhology Officer)",
    imagemUrl: denys,
  },
  {
    nome: "Alex Daniel",
    cargo: "(Empresário) Especialista em Desenvolvimento de Funcionários",
    imagemUrl: alex,
  },
  {
    nome: "Mariana Braga ",
    cargo: "Gerente de Departamento Pessoal",
    imagemUrl: mariana,
  },
  {
    nome: "Elcio Filho",
    cargo: "Gerente Contábil",
    imagemUrl: elciu,
  },
  {
    nome: "Arthur Barbosa",
    cargo: "Cargo 2",
    imagemUrl: arthur,
  }
  
];

const ClientesPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">
          Nossos principais clientes
        </h1>
        <div className="carousel-container">
          <Carousel className="custom-carousel" showThumbs={false}>
            {clientes.map((cliente) => (
              <div key={cliente.id}>
                <img
                  src={cliente.imagem}
                  alt={cliente.nome}
                  style={{ width: "500px" }}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div>
        <h1 className="text-3xl font-bold text-center mb-4">EQUIPE</h1>
        <PessoasContainer pessoas={pessoas} />
      </div>
      </div>
      <ProjetoContainer 
        imagemUrl={cliente1}
        descricao='descrição'
      />
    </>
  );
};

export default ClientesPage;
