import { useState } from "react";

function StudentCard ({name, grade}) {

    const [likes, setLike] = useState(0);

    const handleClick = () => setLike(prevLike => prevLike + 1);

    return (
        <div className="student-card">
            <h2>Student Name: {name} </h2>
            <p>Student Grade: {grade} </p>
            <div>
                <button onClick={handleClick}>
                    Like
                </button>
                <p>❤️ Likes: {likes}</p>
            </div>

        </div>
    )
}

export default StudentCard;