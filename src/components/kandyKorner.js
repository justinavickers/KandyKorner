import React, { Component } from "react"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./navbar/navbar"
import "bootstrap/dist/css/bootstrap.min.css"


class KandyKorner extends Component {
    render() {
        return (
            <React.Fragment>
                <ApplicationViews />
                <NavBar />
            </React.Fragment>
        )
    }
}

export default KandyKorner