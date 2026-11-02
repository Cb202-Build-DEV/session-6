import { useState } from 'react'

function StudentCard({name, grade}) {


function LikeCounter() {
    const [likes, setLikes] = useState(0);

    const handleIncrement = () => setLikes(prevLikes => prevLikes + 1);
    return (
        <div className="student-card">
            <h2>{name}</h2>
            <p>{grade}</p>
            <button onClick={handleIncrement}>Like</button>
            <p>Likes: {likes}</p>
        </div>
        )
    }
}
export default StudentCard //export StudentCard so it can be used in other places. default means
