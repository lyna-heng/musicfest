import { Link } from "react-router-dom"
import { stagePropTypes } from "../components/StagePropTypes";
import PropTypes from 'prop-types';

export default function StageList({stages}) {
    return (
        <>
            {stages.map((stage) => (
                <li key={stage.id}>
                    <Link to={`/musicfest/stages/${stage.id}`}> {stage.name} </Link>
                </li>
            ))}
        </>
    )
}

StageList.propTypes = {
    stages: PropTypes.arrayOf(stagePropTypes).isRequired,
};





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