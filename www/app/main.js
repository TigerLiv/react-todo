import React from 'react';
import dva from 'dva';
import todos from "./models/todos.js";
import route from "./route.js";
import { createLogger } from "redux-logger";

//创建app
const app = dva({
  onAction: createLogger()
});

//使用model
app.model(todos);

//使用路由
app.router(route);

//上树
app.start('#root');