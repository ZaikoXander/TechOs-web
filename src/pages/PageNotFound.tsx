import { SmileySad } from '@phosphor-icons/react'

function PageNotFound() {
  return (
    <main className="flex flex-col justify-center items-center w-2/3 mx-auto gap-24 h-[36rem] mb-56">
      <h1 className="text-7xl font-bold text-blue-700 relative">
        <SmileySad
          weight="fill"
          className='-rotate-[30deg] -z-10 absolute -top-12 -left-12 text-blue-700 w-32 h-32'
        />
        <span className="text-9xl mr-8">
          <span className="text-gray-900">4</span>
          0
          <span className="text-gray-900">4</span>
        </span>
        Page not found...
      </h1>
      <a
        href="/"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Voltar para página inicial
      </a>
    </main>
  )
}

export default PageNotFound