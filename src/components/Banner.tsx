import BannerImage from '../assets/banner.png'
import BannerStripeImage from '../assets/banner-stripe.png'

function BannerStripe() {
  return (
    <div className='absolute bottom-0 bg-[#A9B3F8] w-full h-4 flex justify-center items-center'>
      <img
        src={BannerStripeImage}
        alt="banner stripe diamond"
        className='absolute h-16'
      />
    </div>
  )
}

function Banner() {
  return (
    <div
      className="h-60 bg-cover bg-center flex items-center justify-center relative mb-12 filter drop-shadow"
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
