
import { useParams } from "react-router-dom";

export default function StageCategory({ stages }) {

    const { stageCategory } = useParams()
    const filteredStage = stageCategory
        ? stages.filter(s => s.stage === stageCategory) : [];
    /*         filters stages into categories if stage value === StageCategory */
    
    
        return (
            <div>
                {stageCategory && (
                    filteredStage.forEach(stage => {
                        return (
                            <div>
                                <h2>{stage.stage} </h2>
                                <h3>{stage.name}</h3>
                                <p>{stage.description} </p>
                                <p>{stage.price} </p>
                            </div>
                        )
                    })
                )}
            </div>

    );
            
}