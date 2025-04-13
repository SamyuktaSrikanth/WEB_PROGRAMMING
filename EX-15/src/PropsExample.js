import React from 'react';
import PropTypes from "prop-types";
function PropComponent({message,name})
{
    return <h1>{message}</h1>;
}

PropComponent.propTypes={
    message:PropTypes.func.isRequired,
    name:PropTypes.string.isRequired,
};
export default PropComponent;