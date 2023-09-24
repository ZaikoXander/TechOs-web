import BannerStripeImage from '../assets/banner-stripe.png'

function BannerStripe() {
  return (
    <div className='absolute bottom-0 bg-[#A9B3F8] w-full h-4 flex justify-center items-center filter drop-shadow'>
      <img
        src={BannerStripeImage}
        alt="banner stripe diamond"
        className='absolute h-16'
      />
    </div>
  )
}

export default BannerStripe
