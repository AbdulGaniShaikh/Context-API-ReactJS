import React from "react";
import { ThemeContext } from "../context/ThemeContext";

class TodoList extends React.Component {

    static contextType = ThemeContext;

    render(){
        const {lightTheme,isDarkTheme,darkTheme, changeTheme} = this.context
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return(
            <div className="ui list" style={{background:theme.background, color:theme.text}}>
                <p className="item">Plan Family trip</p>
                <p className="item">Plan Family trip</p>
                <p className="item">Plan Family trip</p>
                <button className="ui button primary" onClick={changeTheme}>Change Theme</button>
            </div>
        );
    }

}

export default TodoList;