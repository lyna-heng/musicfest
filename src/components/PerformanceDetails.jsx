import PropTypes from 'prop-types';

export default function PerformanceDetails({stage}) {
    return (
        <div>
            <h2> Performance {stage.id} </h2>
            <h3>{stage.name}</h3>
            <p>{stage.description}. Performing at the {stage.stage} </p>
            <p>{stage.price} </p>
        </div>
    )
}

// Add PropTypes validation
PerformanceDetails.propTypes = {
    stage: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        stage: PropTypes.string.isRequired,
    }).isRequired,
};