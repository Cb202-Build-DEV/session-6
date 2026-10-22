import ClickCounter from './Clicker'


export default function Card({id, grade = "0"}) {

  return (
    <>
    <div className="student-card">
        <h2>ID #: {id} </h2>
        <p>Grade: {grade} </p>
        <ClickCounter/>
    </div>
    </>
  )
}

// export default Card