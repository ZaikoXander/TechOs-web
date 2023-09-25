import Banner from '../components/Banner'

import whoWeAre from '../assets/who-we-are.png'
import whyChooseOurService from '../assets/why-choose-our-service.png'

function Home() {
  return (
    <>
      <Banner />
      <main className='flex flex-col w-2/3 mx-auto gap-32 mb-8'>
        <section className="flex flex-col items-center gap-10">
          <h1 className='text-3xl font-bold'>Quem somos nós?</h1>
          <div className='flex items-center gap-6'>
            <img
              src={whoWeAre}
              alt="a shield with a padlock symbolizing security in IT"
              width={320}
              className="filter drop-shadow"
            />
            <div className='w-full bg-gray-300 rounded-lg shadow'>
              <p className='text-xl p-4 text-gray-800'>
              A TechOS é uma empresa de tecnologia fundada por empreendedores apaixonados, focada em resolver desafios complexos em todo o Brasil. Com base em Praia Grande, São Paulo, expandimos nossos serviços para várias regiões do país, incluindo Minas Gerais, Goiás, Santa Catarina e Bahia. Nossa principal área de atuação envolve instalação de sistemas operacionais, hardware, manutenção e segurança. Além disso, oferecemos serviços de consultoria estratégica e treinamento para facilitar a transição para soluções inovadoras. Trabalhamos em parceria com empresas líderes, como Dell Technologies, Oracle, Microsoft e Cisco Systems, para expandir nossas capacidades e fornecer soluções avançadas aos nossos clientes.
              </p>
            </div>
          </div>
        </section>
        <section className='flex flex-col items-center gap-10'>
          <img
            src={whyChooseOurService}
            alt="Tech OS logo surrounded by operational systems logos, a desktop computer image, a image of a screwdriver with a fixed key, a image of dices with a padlock"
            width={500}
            className="filter drop-shadow"
          />
          <div className='flex flex-col items-center gap-6'>
            <h1 className='text-3xl font-bold'>Por que escolher a TechOS?</h1>
            <div className='w-full bg-gray-300 rounded-lg shadow'>
              <p className='text-xl p-4 text-gray-800'>
              A TechOS é a escolha ideal devido à nossa expertise em tecnologia e compromisso com resultados excepcionais. Nossos serviços abrangem desde instalação de sistemas operacionais até consultoria estratégica, proporcionando soluções completas e inovadoras. Além disso, nossa parceria com empresas líderes nos permite oferecer tecnologia de ponta. Optar pela TechOS significa confiar em uma equipe apaixonada e altamente qualificada que está focada em atender às suas necessidades e impulsionar o seu sucesso.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
