import Card from "./StudentCard";

function Directory() {
    const students = [
    {id: 1, grade: 78},
    {id: 2, grade: 99},
    {id: 3}
];


  return (
    <>
    <Card />
    {students.map(student => 
        <Card id = {student.id} grade = {student.grade} />
    )}
    </>
  )
}

export default Directory