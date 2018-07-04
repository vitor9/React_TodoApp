import React from 'react'


export default props => {
    if (props.test) {
        // Retorna o objeto que esta dentro da tag if
        return props.children;
    } else {
        return false;
    }
}