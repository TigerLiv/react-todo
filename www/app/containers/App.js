import React from 'react';
import { connect } from "dva";
import HD from "../components/HD.js";
import BD from "../components/BD.js";
class App extends React.Component{
	constructor({todos,dispatch}){
		super()
	}
	componentDidMount(){
		this.props.dispatch({"type":"todos/init"});
	}
	render(){
		return <div>
			<HD></HD>
			<hr/>
			<BD></BD>
		</div>
	}
};
export default connect (
	({todos})=>{
		return {
			todos
		}
	}
)(App);