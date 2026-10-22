import StudentIDCard from "./StudentIDCard";

let students = [
    {
        id:1,
        name: 'Ceora',
        gradYear: 'Class of 2018'
    },
    {
        id:2,
        name: 'Steph',
        gradYear: 'Class of 2015'
    },
    {
        id:3,
        name: 'India',
        grade: 'Class of 2023'
    }
]
export default function StudentCards() {
   return (
    <div>
        {students.map((student) => (
            <StudentIDCard
                key={student.id}
                name={student.name}
                gradYear={student.gradYear}
            />
        ))}
    </div>
   )
}