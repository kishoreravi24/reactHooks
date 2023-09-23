import React, {useContext} from 'react';
import { ThemeContext } from './App';

function FunctionalContextConsumer(){
    const dark = useContext(ThemeContext)
    const themeStyles = {
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#ccc' : '#333',
            padding: '2rem',
            margin: '2rem'
    }
    return(
        <div style={themeStyles}>Functional Theme</div>
    )
}

export default FunctionalContextConsumer;
