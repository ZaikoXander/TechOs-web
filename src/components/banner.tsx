import BannerImage from '../assets/banner.png'

export function Banner() {
  return (
    <div className="h-80 bg-cover bg-center flex items-center justify-center "
    style={{ backgroundImage: `url(${BannerImage})` }}>
      <p className=' text-white font-bold text-2xl'>
        BEM VINDO A UMA DAS MELHORES EMPRESAS DE SUPORTE DE TECNOLOGIA DO PAÍS
      </p>
    </div>
  );
}
