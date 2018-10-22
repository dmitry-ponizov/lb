import React, { Component } from 'react'
import NavigationItem from '../../components/UI/NavigationItem/NavigationItem'

class Dashboard extends Component {


    render() {
        return (
            <div>
                <h1>Dashboard component</h1>
                <NavigationItem link="/logout" >Logout</NavigationItem>
            </div>
        
        )
    }
}


export default Dashboard;