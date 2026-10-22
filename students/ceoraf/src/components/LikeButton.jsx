import { useState } from "react";

export default function LikeButton() {
    const [likes, setLike] = useState(0);

    const handleClick = () => setLike(likes + 1);

    return (
        <>
            <p>Click the hear to like this card</p>
            <button onClick={handleClick}>
                💗
            </button>
            <p>Likes: {likes} </p>
        </>
    )
}