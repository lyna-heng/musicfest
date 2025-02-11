import { Link } from "react-router-dom"

export default function StageList({stages}) {
    return (
        <>
            {stages.map((stage, index) => (
                <li key={index}>
                    <Link to=":stageId"> {stage.name} </Link>
                </li>
            ))}
        </>
    )
}

/* export default function StageList(stages) {
    return (
        <>
            {stages.map((stage) => (
                <li key={stage.id}>
                    <Link to=":stageId"> {stage.name} </Link>
                </li>
            ))}
        </>
    )
} */