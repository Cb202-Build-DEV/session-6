

function Card({id, grade = "0"}) {

  return (
    <>
    <div className="student-card">
        <h2>ID #: {id} </h2>
        <p>Grade: {grade} </p>
    </div>
    </>
  )
}

export default Card