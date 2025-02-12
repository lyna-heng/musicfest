import { useParams } from "react-router-dom";
import StageList from "./StageList";
import PerformanceDetails from "../components/PerformanceDetails";

export default function StagePage() {

    const stages = [
        { id: '1', name: 'Beabadoobee', stage: "Accoustic Stage", description: 'Its Beabadoobee', price: '$100' },
        { id: '2', name: 'Bertha', stage: "Main Stage", description: 'Its not Beabadoobee', price: '$50' },
        { id: '3', name: 'Selma', stage: "Accoustic Stage", description: 'Its a dog', price: '$10000' },
        { id: '4', name: 'Bølle', stage: "EDM Stage", description: 'Its a cat', price: '$400' },
    ];


    //dynamic links
    const { stageId, stageCategory } = useParams();

    if (stageId) {
        const stage = stages.find(s => s.id === stageId);

        if (!stage) {
            return (
                <div>
                    <h3>Stage Not Found</h3>
                    <ul>
                        <StageList stages={stages} />
                    </ul>
                </div>
            )
        }
    

        return (
            <div>
                <h3>Peformance Details</h3>
                <PerformanceDetails stage={stage} />

                <h3>Other performances</h3>
                <ul>
                    <StageList stages={stages} />
                </ul>
            </div>
        );
    }

    if (stageCategory) {
        const filteredStages = stages.filter(s => s.stage === stageCategory);

        if (filteredStages.length === 0) {
            return (
                <div>
                    <h2>No performances found for {stageCategory}</h2>
                    <ul>
                        <StageList stages={stages} />
                    </ul>
                </div>
            );
        }

        return (
            <div>
                <h2>Performances on {stageCategory}</h2>
                <ul>
                    {filteredStages.map(stage => (
                        <li key={stage.id}>
                            <h3>{stage.name}</h3>
                            <p>{stage.description}</p>
                            <p>{stage.price}</p>
                            <a href={`/musicfest/stages/performance/${stage.id}`}>View Performance</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    
    //Default: Show all performances
    return (
        <div>
            <h2>All Performances</h2>
            <ul>
                <StageList stages={stages} />
            </ul>
        </div>
    );
}

