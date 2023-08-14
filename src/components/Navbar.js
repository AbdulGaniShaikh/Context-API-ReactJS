import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

class Navbar extends React.Component {



    render() {
        return (
            <AuthContext.Consumer>{(authContextData)=>{
                <ThemeContext.Consumer>{(themeContextData) => {
                    const { lightTheme, isDarkTheme, darkTheme } = themeContextData
                    const theme = isDarkTheme ? darkTheme : lightTheme;
                    const {isLoggedIn} = authContextData;
                    return (
                        <nav style={{ background: theme.background, color: theme.text }}>
                            <h2 className="ui centered header">Abdul Gani</h2>
                            <p>{isLoggedIn? "User is Logged In!" : "User is Logged Out!" }</p>
                            <div className="ui three buttons">
                                <button className="ui button">Overview</button>
                                <button className="ui button">Contact</button>
                                <button className="ui button">Support</button>
                            </div>
                        </nav>
                    )
                }}
                </ThemeContext.Consumer>
            }}</AuthContext.Consumer>
        )
    }
}

export default Navbar;