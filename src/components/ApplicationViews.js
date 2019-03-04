import { Route } from 'react-router-dom'
import React, { Component } from "react"
import EmployeeList from './employees/EmployeeList'
import LocationList from './locations/LocationList'
import CandyList from './candy/CandyList'
import candyManager from '../modules/candyManager'
import locationManager from '../modules/locationManager'
import employeeManager from '../modules/employeeManager'
import typeManager from '../modules/typeManager'

class ApplicationViews extends Component {
  state = {
    types: [],
    locations: [],
    candies: [],
    employees: []
  }


  discontinuedCandy = (id) => {
    fetch(`http://localhost:3002/candies/${id}`, {
      "method": "DELETE"
    })
      .then(() => fetch("http://localhost:3002/candies"))
      .then(r => r.json())
      .then(candies => this.setState({ candies: candies }))
  }

  // fireEmployee = (id) => {
  //   fetch(`http://localhost:3002/employees/${id}`, {
  //     "method": "DELETE"
  //   })
  //     .then(() => fetch("http://localhost:3002/employees"))
  //     .then(r => r.json())
  //     .then(employees => this.setState({ employees: employees }))
  // }

  // getAllAnimalsAgain = () => {
  //   fetch("http://localhost:3002/animals")
  //     .then(r => r.json())
  //     .then(animals => this.setState({ animals: animals }))
  // }

  // cancelService = (id) => {
  //   fetch(`http://localhost:3002/owners/${id}`, {
  //     "method": "DELETE"
  //   })
  //   .then(() => fetch("http://localhost:3002/owners"))
  //   .then(r => r.json())
  //   .then(owners => this.setState({owners: owners}))
  // }

  componentDidUpdate() {
    console.log("componentDidUpdate -- ApplicationViews")
  }

  componentDidMount() {
    const newState = {}

    candyManager.getAll()
      .then(candies => newState.candies = candies)
      .then(() => employeeManager.getAll())
      .then(employees => newState.employees = employees)
      .then(r => typeManager.getAll())
      .then(types => newState.types = types)
      .then(r => locationManager.getAll())
      .then(locations => newState.locations = locations)
      .then(() => this.setState(newState))
  }

  render() {
    return (
      <React.Fragment>
         <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/candies" render={(props) => {
          return <CandyList candies={this.state.candies}
            types={this.state.types}
            discontinuedCandy={this.discontinuedCandy}/>
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews