import React, { Component } from 'react'
import './home.scss'
import SearchBox from '@/components/searchbox/SearchBox'
import Scroll from '@/components/scroll/Scroll'
import CardList from '@/components/cardlist/CardList'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()).then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return !this.state.robots.length ? (
            <h1>Loading...</h1>
        ) : (
            <div id='home'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
}

export default Home
