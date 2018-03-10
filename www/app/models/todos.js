import R from 'ramda';
export default {
	namespace :"todos",
	state : {"todos":[]},
	reducers :{
		init_sync(state,{data}){
			return R.set(R.lensProp("todos"),data,state);
		},
		add_sync(state,{data}){
			console.log(data)
			return R.set(R.lensProp("todos"),R.append(data,state.todos),state);
		},
		del_sync(state,{id}){
			return R.set(R.lensProp("todos"),
				state.todos.filter((item)=>{
					return item.id != id;
				}),state);
		},
		done_sync(state,{id,checked}){
			return R.set(R.lensProp("todos"),
				state.todos.map((item)=>{
					if( item.id == id){
						return R.set(
								R.lensProp("done"),
								checked?"1":"0",
								item
							)
					}
					return item;
				}),state);
		},
		title_sync(state,{id,title}){
			return R.set(R.lensProp("todos"),
				state.todos.map((item)=>{
					if( item.id == id){
						return R.set(
								R.lensProp("title"),
								title,
								item
							)
					}
					return item;
				}),state);
		}
	},
	effects:{
		init : function* (action,{put}){
			const data = yield fetch("/todos").then((data)=>{return data.json()});
			yield put({"type":"init_sync",data});
		},
		add : function* (action,{put}){

			const data = yield fetch("/todos",{
				"method":"POST",
				"headers":{
					"Content-Type":"application/json"
				},
				"body":JSON.stringify({"title":action.title,"done":0})
			}).then((data)=>{return data.json()});
			yield put({"type":"add_sync",data});
		},
		del : function* ({id},{put}){

			yield fetch("/todos/"+id,{
				"method":"DElETE",
				"headers":{
					"Content-Type":"application/json"
				}
			})
			yield put({"type":"del_sync",id});
		},
		done : function* ({id,checked},{put}){

			const data = yield fetch("/todos/"+id,{
				"method":"PATCH",
				"headers":{
					"Content-Type":"application/json"
				},
				"body":JSON.stringify({"done":checked ? 1:0})
			}).then((data)=>{return data.json()});
			yield put({"type":"done_sync",id,checked});
		},
		title : function* ({id,title},{put}){

			const data = yield fetch("/todos/"+id,{
				"method":"PATCH",
				"headers":{
					"Content-Type":"application/json"
				},
				"body":JSON.stringify({"title":title})
			}).then((data)=>{return data.json()});
			yield put({"type":"title_sync",id,title});
		}
	}
}