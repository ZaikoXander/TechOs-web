import LinuxLogo from '../assets/linux-logo.png'
import cliente from '../assets/client2.png'
import UbuntuLogo from '../assets/ubuntu-logo.png'

function Linux() {
  return (
    <main className="w-2/3 mt-8 mb-16 mx-auto flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <h1 className="font-bold text-4xl">Linux</h1>
        <img
          src={LinuxLogo}
          alt="Linux logo"
          className='w-32'
        />
        <p className="text-center text-xl">
          O Linux é um sistema operacional de código aberto baseado no kernel Linux. Ele é conhecido por sua estabilidade, segurança e flexibilidade. O Linux oferece uma ampla variedade de distribuições (como Ubuntu, CentOS e Debian) que podem ser personalizadas para atender a diferentes necessidades.
        </p>
      </div>
      <div className="max-w-4xl w-full mt-8 bg-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <p className='text-center text-xl'>
          Foi criado por Linux Torvalds em 1991, e é um dos sistemas operacionais mais populares do mundo utilizado em uma grande variedade de dispositivos, como servidores, computadores pessoais, smartphones e sistemas embarcados.
        </p>
        <p className='text-center text-xl'>
          Nas empresas o Linux se destaca pela sua estabilidade, segurança e flexibilidade. Grande empresas como IBM, Red Hat e Novell começaram a investir no desenvolvimento e suporte ao Linux para necessidades empresariais.
        </p>
        <h2 className='text-3xl font-bold'>Empresas que utilizam</h2>
        <ul className='list-disc'>
          <li className='text-xl'>
            <span className='font-semibold'>Google</span>: Usa uma versão personalizada do Linux para alimentar seus servidores e o sistema operacional Android.
          </li>
          <li className='text-xl'>
            <span className='font-semibold'>Amazon Web Services</span>: Oferece serviços de nuvem baseados em Linux para empresas em todo o mundo.
          </li>
          <li className='text-xl'>
            <span className='font-semibold'>Red Hat</span>: Uma das principais empresas de software de código aberto, especializada em soluções Linux.
          </li>
        </ul>
      </div>
      <div className='flex gap-14 mt-8'>
        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4">
          <h2 className="font-bold text-3xl">Projeto PartsCenter</h2>
          <img
            src={cliente}
            alt="Projeto PartsCenter"
            className="w-64 h-64 rounded-full"
          />
          <p className="text-center text-xl">
            Em um dos vários casos de sucesso da TechOS está o projeto PartsCenter, que consiste em uma empresa de autopeças que enfrentava os seguintes problemas:
          </p>
          <ul className='list-disc'>
            <li className='font-semibold text-xl'>Desempenho insatisfatório</li>
            <li className='font-semibold text-xl'>Compatibilidade limitada</li>
            <li className='font-semibold text-xl'>Vulnerabilidades de segurança</li>
            <li className='font-semibold text-xl'>Custos elevados de manutenção</li>
          </ul>
          <p className='text-center text-xl'>
            Parte da solução foi a escolha do sistema operacional, o Ubuntu.
            Atingindo diretamente os problemas de desempenho, compatibilidade e segurança. E sendo gratuito, também o de custos e além disso possui uma grande comunidade.
          </p>
        </div>
        <div className="max-w-4xl w-full mt-8 bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4">
          <img
            src={UbuntuLogo}
            alt="Ubuntu logo"
            className='w-60'
          />
          <p className='text-center text-xl'>
            Uma das distribuições linux mais conhecidas e usadas, com grande documentação e comunidade. Um bom sistema operacional e intuitivo além de ter uma boa compatibilidade com softwares e aplicativos e uma interface bonita.
          </p>
          <h3 className='text-2xl font-bold'>Empresas que utilizam</h3>
          <ul className='list-disc'>
            <li className='text-xl font-semibold'>
              Netflix
            </li>
            <li className='text-xl font-semibold'>
              PayPal
            </li>
            <li className='text-xl font-semibold'>
              eBay
            </li>
            <li className='text-xl font-semibold'>
              Spotify
            </li>
          </ul>
          <p className='text-center text-xl'>
            Por ser gratuito, o Ubuntu é uma ótima opção para empresas que buscam reduzir custos com licenças de software.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Linux
