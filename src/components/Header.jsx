import { Link } from "react-router-dom";

export default function Header() {

    return (
            <header>
        <nav>
            <ul style={{ display: "flex", gap: "40px" }}>
                <li>
                    <Link to={""}>Home</Link>
                </li>
                <li>
                    <Link to={"stages"}>Stages</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}