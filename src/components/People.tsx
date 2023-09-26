interface Person {
  nome: string;
  cargo: string;
  imagemUrl: string;
}

interface PeopleProps {
  people: Person[];
}

function People({ people }: PeopleProps) {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-2 gap-4">
        {people.map((person, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={person.imagemUrl} alt={person.nome} className="w-52 h-52 rounded-full" />
            <p className="mt-2 text-2xl font-semibold">{person.nome}</p>
            <p className="text-gray-600 text-xl font-semibold">{person.cargo}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default People
