import whoWeAre from '../assets/who-we-are.png'
import whyChooseOurService from '../assets/why-choose-our-service.png'

function Home() {
  return (
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ullam incidunt molestias nihil vero distinctio earum! Tenetur enim odio molestias, nemo ut amet minus illo eveniet perferendis totam, iusto earum.
              Quaerat excepturi eaque delectus corrupti nulla soluta sunt, sequi velit porro. Accusantium consequuntur magni culpa architecto officia voluptatem eaque id doloribus numquam! Modi, at? Iste perferendis ipsum animi rerum vitae!
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic alias, excepturi qui vitae ad temporibus sit ducimus autem quae neque voluptates rem saepe perspiciatis quibusdam suscipit ratione? Fugiat, impedit expedita!
              Quis accusamus obcaecati explicabo? Vel repudiandae excepturi dolore fuga, laboriosam, ut molestiae nostrum dignissimos doloribus ipsum veritatis ex voluptas et expedita inventore laborum. Ex, placeat saepe accusamus expedita magnam quis.
              Cupiditate, doloremque nobis placeat, voluptatibus quisquam modi aliquid neque perspiciatis nisi laudantium ipsa nam sint error deleniti debitis reprehenderit incidunt dolor? Dolore neque esse quas inventore labore, facere quasi porro?
              Corrupti neque quis dolore officia alias voluptate nesciunt modi, voluptatibus animi consectetur iusto nulla adipisci magni, qui quam debitis a obcaecati id aspernatur minus accusantium fugit cum accusamus. Sit, nobis?
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
