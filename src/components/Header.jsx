import { Link } from "react-router-dom";

export default function Header({setStageCategory}) {

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
                <li>
                    <Link to={"stages/Main Stage"} onClick={()=> setStageCategory('Main Stage')}>Main Stage</Link>
                </li>
                <li>
                    <Link to={"stages/Accoustic Stage"} onClick={()=> setStageCategory('Accoustic Stage')}>Accoustic Stage</Link>
                </li>
                <li>
                    <Link to={"stages/EDM Stage"} onClick={()=> setStageCategory('EDM Stage')}>EDM Stage</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}