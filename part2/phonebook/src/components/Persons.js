const Persons=({persons,filterValue})=>{
    return (
        <div>
            {persons.filter(person=>person.name.toLowerCase().includes(filterValue.toLowerCase())).map(person=><p key={person.id}>{person.name} {person.number}</p>)}
        </div>
    )
}
export default Persons