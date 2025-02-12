import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div> 404 not found 
            <Link to={"/"}>Home</Link>
        </div>

    )
}