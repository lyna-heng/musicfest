import { useParams } from "react-router-dom";
import StageLinks from "./StageLinks";

export default function StagePage() {

    const stages = [
        { id: '1', name: 'Beabadoobee', description: 'Its Beabadoobee', price: '$100' },
        { id: '2', name: 'Bertha', description: 'Its not Beabadoobee', price: '$50' },
        { id: '3', name: 'Selma', description: 'Its a dog', price: '$10000' },
        { id: '4', name: 'Bølle', description: 'Its a cat', price: '$400' },
    ];

    const { stageId } = useParams();
    const stage = stages.find(s => s.id === stageId);

    if (!stage) {
        return <h2>Stage not found</h2>
    };

    return (
        <div>
            <h2> Stages </h2>
            <h3>{stage.name}</h3>
            <p>{stage.description} </p>
            <p>{stage.price} </p>

            <h3>Other performances</h3>
            <ul>
                <StageLinks stages={stages} />
                {StageLinks}
            </ul>
        </div>
    )
}