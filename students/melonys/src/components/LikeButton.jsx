import { useState } from 'react'

export default function LikeButton() {
    const [likes, setLikes] = useState(0)

    const handleClick = () => {
        setLikes((previousLikes) => previousLikes + 1)
    }

    return (
        <div>
            <button type="button" onClick={handleClick}>Like</button>
            <p aria-live="polite">Likes: {likes}</p>
        </div>
    )
}