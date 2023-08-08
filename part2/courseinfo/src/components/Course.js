const Header=({name})=>{
    console.log(name)
    return <h2>{name}</h2>
}
const Content=({parts})=>{
    console.log(parts)
    const total = parts.reduce((sum, part) => sum+part.exercises, 0)
    return (
        <>
            <div>{parts.map(part=><Part key={part.id} part={part}></Part>)}</div>
            <b>total of {total} exercises</b>
        </>
        
    )
}
const Part=({part})=>{
    return (
        <p>{part.name} {part.exercises}</p>
    )
}
const Course=({course})=>{
    console.log(course);
    return (
    <>
        <Header name={course.name}></Header>
        <Content parts={course.parts}></Content>
    </>
    
    )
}
export default Course