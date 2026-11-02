import './App.css'
import { useState } from 'react'
import StudentIDCard from './components/StudentIDCard.jsx'

const students = [
  { name: 'Avery', grade: 'A+' },
  { name: 'Charlie', grade: 'B' },
  { name: 'Taylor' },
]

function App() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <main className="student-directory">
      <h1>Student ID Cards</h1>
      <section aria-label="Student ID cards" className="student-card-list">
        {students.map((student) => (
          <StudentIDCard key={student.name} {...student} />
        ))}
      </section>
      <section className="course-form-section" aria-labelledby="course-form-heading">
        <h2 id="course-form-heading">Student Information</h2>
        <form className="course-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Course
            <select name="course" defaultValue="" required>
              <option value="" disabled>Select a course</option>
              <option value="computer-science">Computer Science</option>
              <option value="design">Design</option>
              <option value="mathematics">Mathematics</option>
            </select>
          </label>
          <button type="submit">Submit</button>
          {submitted && (
            <p className="course-form__message" role="status">
              Form submitted for this demo only; your information was not saved or sent.
            </p>
          )}
        </form>
      </section>
    </main>
  )
}

export default App
