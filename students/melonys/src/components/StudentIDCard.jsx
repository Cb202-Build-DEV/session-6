import './StudentIDCard.css'
import LikeButton from './LikeButton.jsx'

function StudentIDCard({ name, grade }) {
  return (
    <article className="student-id-card">
      <p className="student-id-card__label">Student ID</p>
      <h2>{name}</h2>
      {grade && <p className="student-id-card__grade">Grade: {grade}</p>}
      <LikeButton />
    </article>
  )
}

export default StudentIDCard
