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

    //identifies individual performance
    const { stageId } = useParams();
    const stage = stages.find(s => s.id === stageId);

    //Dynamic linking for stage categories
    const { stageCategory } = useParams();
    const  stagecategory = stages.find(s => s.stage === stageCategory);

    if (!stage) {
        return (
            <div>
                <h3>All Perfomances</h3>
                <ul>
                    <StageList stages={stages} />
                </ul>
                </div>
        )
    };

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


/* export default function StagePage() {

    const { stageId } = useParams();

    const stages = [
        { id: '1', name:'Beabadoobee', description: 'Its Beabadoobee', price: '$100' },
        { id: '2', name:'Bertha', description: 'Its not Beabadoobee', price: '$50' },
        { id: '3', name:'Selma', description: 'Its a dog', price: '$10000' },
        { id: '4', name:'Bølle', description: 'Its a cat', price: '$400' },
    ];


    const stage = stages.find(s => String(s.id) === stageId);

    if (!stage) {
        return (
            <>
                <h2>Stage not found</h2>
                <h3>Other performances</h3>
                <ul>
                    <StageList stages={stages} />
                </ul>                
            </>
            
        )
    }

    return (
        <div>
            <h2> Stages </h2>
            <h3>{stage.name} {stageId}</h3>
            <p>{stage.description} </p>
            <p>{stage.price} </p>

            <h3>Other performances</h3>
            <ul>
                <StageList stages={stages}/>
            </ul>
        </div>
    )
} */
