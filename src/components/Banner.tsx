import BannerImage from '../assets/banner.png'
import BannerStripe from './BannerStripe'

function Banner() {
  return (
    <div
      className="h-60 bg-cover bg-center flex items-center justify-center relative mb-12"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <p className='text-white font-bold text-xl tracking-wider uppercase'>
        Bem vindo a uma das melhores empresas de suporte de tecnologia do país
      </p>
      <BannerStripe />
    </div>
  )
}

export default Banner
