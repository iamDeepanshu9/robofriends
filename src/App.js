import React,{ Component } from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots';
import SearchBox from './SearchBox'




class App extends Component{
	constructor(){
	super()
	this.state ={
		robots : robots,
		searchfield :''
				}
	}
	onSearchChange = (event) =>  {
		this.setState({searchfield : event.target.value})
	}	
	render(){
		const { robots, searchfield } = this.state;
	    const filteredRobots = robots.filter(robot =>{
     	 return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    		})
		return(
		<div className = 'tc'>
		<h1>RoboFriends</h1>
		<SearchBox searchChange = {this.onSearchChange}/>
		<Cardlist robots = {filteredRobots}/>
		</div>
		);
	}
}




export default App;