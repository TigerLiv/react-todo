import React from 'react';
import { connect } from "dva";
class HD extends React.Component{
	constructor({todos,dispatch}){
		super()
	}
	render(){
		return <div>
			<input type="text" ref="kuang"/>
			{" "}
			<button onClick = {()=>{this.props.dispatch({"type":"todos/add","title":this.refs.kuang.value})}}>增加</button>
		</div>
	}
};
export default connect (
	({todos})=>{
		return {
			todos
		}
	}
)(HD);