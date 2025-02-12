export default function StageCategory({stages}) {

    const filteredStage = stages.filter(stage => stage.stage === "fruit");

    
    {stages.forEach(stage => {
        return (
            <div>
                <h2>{stage.stage} </h2>
                <h3>{stage.name}</h3>
                <p>{stage.description} </p>
                <p>{stage.price} </p>
            </div>
        )
    })
    };
            
}