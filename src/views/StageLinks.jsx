export default function StageLinks(stages) {
    return (
        <>
            {stages.map((stage, index) => (
                <li key={index}> {stage} </li>
            ))}
        </>
    )
}