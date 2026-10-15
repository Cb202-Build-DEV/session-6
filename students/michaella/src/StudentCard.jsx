let students ={
    name:'Michaella',
    classyear:'class of 2029'
}
export default function StudentCard({name}){
    return (
        <div>
            <h2>{name}</h2>
            <h2>Class of 2029</h2>
            <h2>Science Leadership Academy</h2>
        </div>
    )
}