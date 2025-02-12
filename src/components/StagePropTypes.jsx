import PropTypes from 'prop-types';

export const stagePropTypes = PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        stage: PropTypes.string.isRequired,
})
    
