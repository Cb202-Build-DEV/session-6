import LikeButton from "./LikeButton"

export default function StudentIDCard({name, gradYear}) {
    return (
        <div className="student-card">
            <h2>{name}</h2>
            <p>{gradYear}</p>
            <LikeButton />
        </div>
    )
}