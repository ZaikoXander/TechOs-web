import { FormEvent, useState } from 'react'

import { Envelope, TelegramLogo, WhatsappLogo } from '@phosphor-icons/react'
import FuturistBackground from '../assets/futurist-background.png'

interface IMessageData {
  name: string
  email: string
  message: string
}

function ContactUs() {
  const [messageData, setMessageData] = useState<IMessageData>({
    name: '',
    email: '',
    message: '',
  })

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(messageData)
  }

  return (
    <main className='flex flex-col items-center gap-16 mb-8'>
      <section
        className="min-h-[40rem] w-full flex justify-center items-center bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, transparent, rgba(255, 255, 255, 1)), url('${FuturistBackground}')`
        }}
      >
        <form
          className='bg-gray-500 w-1/3 py-12 rounded-xl mb-20 shadow-lg flex flex-col items-center justify-center gap-8'
          onSubmit={handleSubmitForm}
        >
          <h1 className="text-4xl font-bold text-center text-white">
            Envie uma mensagem
          </h1>
          <div className="flex flex-col items-center justify-center w-4/5">
            <label className='w-96'>
              <span className='font-bold'>Nome</span>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Daniel Santos da Silva"
                className="w-full placeholder:font-bold placeholder:opacity-60 bg-[#E7E7F1] outline-none focus:ring-gray-800 focus:ring-2 rounded-lg px-4 py-3 mb-4 transition-all"
                onChange={
                  (e) => setMessageData({ ...messageData, name: e.target.value })
                }
              />
            </label>
            <label className='w-96'>
              <span className='font-bold'>Email</span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@exemplo.com"
                className="w-full placeholder:font-bold placeholder:opacity-60 bg-[#E7E7F1] outline-none focus:ring-gray-800 focus:ring-2 rounded-lg px-4 py-3 mb-4 transition-all"
                onChange={
                  (e) => setMessageData({ ...messageData, email: e.target.value })
                }
              />
            </label>
            <label className='w-96'>
              <span className='font-bold'>Mensagem</span>
              <textarea
                name="message"
                id="message"
                placeholder="Olá uma boa tard..."
                className="w-full placeholder:font-bold placeholder:opacity-60 bg-[#E7E7F1] outline-none focus:ring-gray-800 focus:ring-2 rounded-lg px-4 py-3 mb-4 transition-all"
                onChange={
                  (e) => setMessageData({ ...messageData, message: e.target.value })
                }
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-white text-black font-bold uppercase rounded-lg text-lg px-8 py-4"
            >
              Enviar
            </button>
          </div>
        </form>
      </section>
      <section className='flex flex-col items-center w-1/2 gap-12'>
        <h1 className='text-4xl font-bold uppercase'>Fale conosco:</h1>
        <div className='grid grid-cols-3 grid-rows-1 gap-x-20'>
          <a href="tel:+5511999999999">
            <WhatsappLogo
              color="#25d366"
              weight="fill"
              className='w-40 h-40'
            />
          </a>
          <a href="tel:+5511999999999">
            <TelegramLogo
              color="#0088cc"
              weight="fill"
              className='w-40 h-40'
            />
          </a>
          <a href="mailto:techos@gmail.com">
            <Envelope
              color="#c71610"
              weight="fill"
              className='w-40 h-40'
            />
          </a>
        </div>
      </section>
    </main>
  )
}

export default ContactUs
