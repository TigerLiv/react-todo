import React from 'react';
import { connect } from "dva";

export default  class Item extends React.Component{
	constructor({item}){
		super();
		this.state = {
			onEdit : false,
			txt:item.title
		}
	}
	render(){
		return <div>
			<input 
				type="checkbox" 
				checked = {this.props.item.done == "1"}
				onChange = {(e)=>{this.props.done(this.props.item.id,e.target.checked)}}
			/>
			{
				!this.state.onEdit 
				?
				<span onDoubleClick={()=>{this.setState({...this.state,"onEdit":true})}}>{this.props.item.title}</span>
				:
				<input 
				type="text" 
				value={this.state.txt}
				onChange = {(e)=>{this.setState({...this.state,"txt":e.target.value})}}
				onBlur = {(e)=>{
							this.props.title(this.props.item.id,e.target.value);
							this.setState({
								...this.state,
								"onEdit":false
							})
						}
					}
				/>
			}
			{" "}
			<button
				onClick = {()=>{this.props.del(this.props.item.id)}}
			>
			删除
			</button>
		</div>
	}
};
