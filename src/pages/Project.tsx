import cliente from "../assets/client2.png";
import estruturaTI from "../assets/estrutura.jpg";
import problema from "../assets/problema.jpg";
import solucao from "../assets/solucao.png";
import seguranca from "../assets/segurança.jpg";
import contrato from "../assets/contrato.jpg";
import Materials from '../assets/materials.png'

function Project() {
  return (
    <main>
      <div className="container mx-auto mt-8 flex items-center justify-center mb-16">
        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-semibold text-center">
            Projeto PartsCenter
          </h2>
          <img
            src={cliente}
            alt="Projeto PartsCenter"
            className="w-64 h-64 rounded-full"
          />
          <p className="text-center text-xl font-base">
            A empresa cliente chamada, PartsCenter, proporciona serviços
            abrangentes para seus clientes, como venda de peças e componentes
            automotivos para veículos, além de manutenção e reparos.
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-8 flex items-center justify-center mt-20 mb-16">
        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-semibold text-center">
            Tamanho e Estrutura de TI
          </h2>
          <img
            src={estruturaTI}
            alt="Projeto PartsCenter"
            className="w-64 h-64 rounded-full"
          />
          <p className="text-center text-xl font-base">
            A empresa cliente, PartsCenter, é uma organização de médio porte que
            deseja ingressar no mercado de autopeças. Antes do início deste
            projeto, a PartsCenter contava com uma infraestrutura de TI
            limitada, condizente com seu tamanho e escopo de operações. Abaixo,
            apresentamos detalhes sobre o tamanho da empresa e sua
            infraestrutura de TI pré-projeto:
          </p>

          <p></p>
        </div>
      </div>

      <div className="container mx-auto mt-8 flex flex-col md:flex-row md:space-x-8 my-20">
        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-semibold text-center">
            Descrição do Problema
          </h2>
          <img
            src={problema}
            alt="Projeto PartsCenter"
            className="w-64 h-64 rounded-full"
          />
          <p className="text-center text-xl font-semibold">
            A PartsCenter enfrentava desafios significativos em seu sistema
            operacional e infraestrutura de TI, que incluíam:
          </p>
          <div>
            <ol>
              <li className="text-lg" style={{ margin: "15px" }}>
                <b>Desempenho insatisfatório:</b> O sistema operacional
                existente sofria com problemas de desempenho, causando lentidão
                nas operações diárias e prejudicando a eficiência e
                produtividade dos funcionários.
              </li>
              <li className="text-base" style={{ margin: "15px" }}>
                <b>Compatibilidade limitada:</b> A empresa utilizava um sistema
                operacional com pouca compatibilidade com aplicativos e
                softwares essenciais, resultando em incompatibilidades e
                dificuldades de integração.
              </li>
              <li className="text-base" style={{ margin: "15px" }}>
                <b>Vulnerabilidades de segurança:</b> O sistema operacional
                desatualizado deixava a empresa vulnerável a ameaças de
                segurança, representando um risco para a confidencialidade e
                integridade dos dados da empresa e de seus clientes.
              </li>
              <li className="text-base" style={{ margin: "15px" }}>
                <b>Custos elevados de manutenção:</b> Os altos custos de
                manutenção e suporte do sistema operacional existente eram
                devido à necessidade constante de atualizações e correções,
                tornando-se um fardo financeiro para a empresa.
              </li>
            </ol>
          </div>
        </div>

        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-semibold text-center">
            Descrição da Solução
          </h2>
          <img
            src={solucao}
            alt="Projeto PartsCenter"
            className="w-64 h-64 rounded-full"
          />
          <p className="text-center text-xl font-semibold">
            Para abordar esses problemas, propormos a seguinte solução para a
            PartsCenter:
          </p>
          <div>
            <ol>
              <li className="text-lg" style={{ margin: "15px" }}>
                <b>Seleção de Sistema Operacional:</b> Recomendamos a transição da PartsCenter para um sistema operacional baseado em Linux. Essa escolha é baseada em sua estabilidade, segurança e custos mais baixos em comparação com sistemas operacionais proprietários, como o Windows. O Linux oferece uma ampla gama de distribuições que podem ser personalizadas para atender às necessidades específicas da empresa.
              </li>
              <li className="text-base" style={{ margin: "15px" }}>
                <b>Justificativa da Escolha:</b> A seleção do Linux é justificada pela sua natureza de código aberto, o que significa que a PartsCenter terá acesso a atualizações de segurança regulares sem custos adicionais. Além disso, a comunidade de desenvolvedores do Linux oferece suporte robusto e contínuo.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row md:space-x-8 my-20">
        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-semibold text-center">
          Segurança
          </h2>
          <img
            src={seguranca}
            alt="Projeto PartsCenter"
            className="w-64 h-64 rounded-full"
          />
          <p className="text-center text-xl font-base">
          Implementaremos medidas de segurança rigorosas, incluindo firewalls, criptografia de dados, autenticação de dois fatores e monitoramento de ameaças em tempo real. Isso garantirá a integridade e a confidencialidade dos dados da empresa e dos clientes.
          </p>
        </div>

        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-semibold text-center">
          Contrato e Pacotes de Manutenção
          </h2>
          <img
            src={contrato}
            alt="Projeto PartsCenter"
            className="w-64 h-64 rounded-full"
          />
          <p className="text-center text-xl font-base">
          A TechOS ofereceu à PartsCenter um contrato de suporte abrangente que inclui monitoramento 24/7, manutenção proativa e assistência técnica em caso de problemas. Os pacotes de manutenção serão personalizados de acordo com as necessidades da PartsCenter e garantirão a estabilidade contínua do sistema operacional.
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row md:space-x-8 my-20">
        <img
          src={Materials}
          alt="Materials used in the project"
          className="border-b-2 border-gray-800 shadow-lg"
        />
      </div>
    </main>
  );
}

export default Project;
