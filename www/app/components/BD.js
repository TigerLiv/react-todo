import React from 'react';
import { connect } from "dva";
import Item from './Item.js';
class BD extends React.Component{
	constructor({todos,dispatch}){
		super()
	}
	render(){
		return <div>
			<h3>未做</h3>
			<div>
				{
					this.props.todos.todos.map((item,index)=>{
						if(item.done == 0)
						return <Item 
								key={item.id}
								item = {item}
								del = {(id)=>{this.props.dispatch({"type":"todos/del",id})}}
								done = {(id,checked)=>{this.props.dispatch({"type":"todos/done",id,checked})}}
								title = {(id,title)=>{this.props.dispatch({"type":"todos/title",id,title})}}
								>
							{item.title}
						</Item>
					})	
				}
			</div>
			<h3>已做</h3>
			<div>
				{
					this.props.todos.todos.map((item,index)=>{
						if(item.done == 1)
						return <Item 
								key={item.id}
								item = {item}
								del = {(id)=>{this.props.dispatch({"type":"todos/del",id})}}
								done = {(id,checked)=>{this.props.dispatch({"type":"todos/done",id,checked})}}
								title = {(id,title)=>{this.props.dispatch({"type":"todos/title",id,title})}}
								>
							{item.title}
						</Item>
					})	
				}
			</div>
		</div>
	}
};
export default connect (
	({todos})=>{
		return {
			todos
		}
	}
)(BD);