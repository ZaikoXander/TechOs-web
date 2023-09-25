import SadFace from '../assets/sad-face.svg'

function PageNotFound() {
  return (
    <main className="flex justify-center items-center w-2/3 mx-auto gap-24 h-96 mb-32">
      <h1 className="text-7xl font-bold text-blue-700 relative">
        <img
          src={SadFace}
          alt="A sad face emoji"
          className='-rotate-[30deg] -z-50 absolute -top-12 -left-12 w-32 h-32'
        />
        <span className="text-9xl mr-8">
          <span className="text-gray-900">4</span>0<span className="text-gray-900">4</span>
        </span>
        Page not found
      </h1>
    </main>
  )
}

export default PageNotFound