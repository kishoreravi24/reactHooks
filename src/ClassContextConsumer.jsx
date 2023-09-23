import React from "react";
import { ThemeContext } from "./App";

class ClassContextConsumer extends React.Component {
    themeStyle(dark){
        return{
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#ccc' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }
    render(){
        return(
            <div>
                <ThemeContext.Consumer>
                    {darkTheme => {
                        return <div style={this.themeStyle(darkTheme)}>class Theme</div>
                    }}
                </ThemeContext.Consumer>
            </div>
        )
    }
}

export default ClassContextConsumer;
