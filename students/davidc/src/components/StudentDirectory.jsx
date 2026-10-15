import StudentCard from "./StudentCard"

const StudentDirectory = () => {
    const students = [
        {name: "Jessica", grade: "A"},
        {name: "Olive", grade: "B"},
        {name: "Michelle", grade: "A+"}
    ]
    return (
        <section>
            {students.map(student => 
                    <StudentCard name={student.name} grade={student.grade} />
            )}
        </section>
    )
}

export default StudentDirectory;