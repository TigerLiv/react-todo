/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 308);
/******/ })
/************************************************************************/
/******/ ({

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _dva = __webpack_require__(78);

var _dva2 = _interopRequireDefault(_dva);

var _todos = __webpack_require__(513);

var _todos2 = _interopRequireDefault(_todos);

var _route = __webpack_require__(713);

var _route2 = _interopRequireDefault(_route);

var _reduxLogger = __webpack_require__(741);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//创建app
var app = (0, _dva2.default)({
  onAction: (0, _reduxLogger.createLogger)()
});

//使用model
app.model(_todos2.default);

//使用路由
app.router(_route2.default);

//上树
app.start('#root');

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\DVATodoList\\node_modules\\_babel-runtime@6.26.0@babel-runtime\\regenerator\\index.js'");

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(334);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _ramda = __webpack_require__(514);

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	namespace: "todos",
	state: { "todos": [] },
	reducers: {
		init_sync: function init_sync(state, _ref) {
			var data = _ref.data;

			return _ramda2.default.set(_ramda2.default.lensProp("todos"), data, state);
		},
		add_sync: function add_sync(state, _ref2) {
			var data = _ref2.data;

			console.log(data);
			return _ramda2.default.set(_ramda2.default.lensProp("todos"), _ramda2.default.append(data, state.todos), state);
		},
		del_sync: function del_sync(state, _ref3) {
			var id = _ref3.id;

			return _ramda2.default.set(_ramda2.default.lensProp("todos"), state.todos.filter(function (item) {
				return item.id != id;
			}), state);
		},
		done_sync: function done_sync(state, _ref4) {
			var id = _ref4.id,
			    checked = _ref4.checked;

			return _ramda2.default.set(_ramda2.default.lensProp("todos"), state.todos.map(function (item) {
				if (item.id == id) {
					return _ramda2.default.set(_ramda2.default.lensProp("done"), checked ? "1" : "0", item);
				}
				return item;
			}), state);
		},
		title_sync: function title_sync(state, _ref5) {
			var id = _ref5.id,
			    title = _ref5.title;

			return _ramda2.default.set(_ramda2.default.lensProp("todos"), state.todos.map(function (item) {
				if (item.id == id) {
					return _ramda2.default.set(_ramda2.default.lensProp("title"), title, item);
				}
				return item;
			}), state);
		}
	},
	effects: {
		init: /*#__PURE__*/_regenerator2.default.mark(function init(action, _ref6) {
			var put = _ref6.put;
			var data;
			return _regenerator2.default.wrap(function init$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return fetch("/todos").then(function (data) {
								return data.json();
							});

						case 2:
							data = _context.sent;
							_context.next = 5;
							return put({ "type": "init_sync", data: data });

						case 5:
						case "end":
							return _context.stop();
					}
				}
			}, init, this);
		}),
		add: /*#__PURE__*/_regenerator2.default.mark(function add(action, _ref7) {
			var put = _ref7.put;
			var data;
			return _regenerator2.default.wrap(function add$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return fetch("/todos", {
								"method": "POST",
								"headers": {
									"Content-Type": "application/json"
								},
								"body": JSON.stringify({ "title": action.title, "done": 0 })
							}).then(function (data) {
								return data.json();
							});

						case 2:
							data = _context2.sent;
							_context2.next = 5;
							return put({ "type": "add_sync", data: data });

						case 5:
						case "end":
							return _context2.stop();
					}
				}
			}, add, this);
		}),
		del: /*#__PURE__*/_regenerator2.default.mark(function del(_ref8, _ref9) {
			var id = _ref8.id;
			var put = _ref9.put;
			return _regenerator2.default.wrap(function del$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return fetch("/todos/" + id, {
								"method": "DElETE",
								"headers": {
									"Content-Type": "application/json"
								}
							});

						case 2:
							_context3.next = 4;
							return put({ "type": "del_sync", id: id });

						case 4:
						case "end":
							return _context3.stop();
					}
				}
			}, del, this);
		}),
		done: /*#__PURE__*/_regenerator2.default.mark(function done(_ref10, _ref11) {
			var id = _ref10.id,
			    checked = _ref10.checked;
			var put = _ref11.put;
			var data;
			return _regenerator2.default.wrap(function done$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.next = 2;
							return fetch("/todos/" + id, {
								"method": "PATCH",
								"headers": {
									"Content-Type": "application/json"
								},
								"body": JSON.stringify({ "done": checked ? 1 : 0 })
							}).then(function (data) {
								return data.json();
							});

						case 2:
							data = _context4.sent;
							_context4.next = 5;
							return put({ "type": "done_sync", id: id, checked: checked });

						case 5:
						case "end":
							return _context4.stop();
					}
				}
			}, done, this);
		}),
		title: /*#__PURE__*/_regenerator2.default.mark(function title(_ref12, _ref13) {
			var id = _ref12.id,
			    _title = _ref12.title;
			var put = _ref13.put;
			var data;
			return _regenerator2.default.wrap(function title$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.next = 2;
							return fetch("/todos/" + id, {
								"method": "PATCH",
								"headers": {
									"Content-Type": "application/json"
								},
								"body": JSON.stringify({ "title": _title })
							}).then(function (data) {
								return data.json();
							});

						case 2:
							data = _context5.sent;
							_context5.next = 5;
							return put({ "type": "title_sync", id: id, title: _title });

						case 5:
						case "end":
							return _context5.stop();
					}
				}
			}, title, this);
		})
	}
};

/***/ }),

/***/ 514:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\DVATodoList\\node_modules\\_ramda@0.24.1@ramda\\index.js'");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\DVATodoList\\node_modules\\_react@15.6.2@react\\react.js'");

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _router = __webpack_require__(714);

var _App = __webpack_require__(738);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var history = _ref.history;

  return _react2.default.createElement(
    _router.Router,
    { history: history },
    _react2.default.createElement(_router.Route, { path: '/', component: _App2.default })
  );
};

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\DVATodoList\\node_modules\\_dva@1.2.1@dva\\router.js'");

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _dva = __webpack_require__(78);

var _HD = __webpack_require__(739);

var _HD2 = _interopRequireDefault(_HD);

var _BD = __webpack_require__(740);

var _BD2 = _interopRequireDefault(_BD);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(_ref) {
		var todos = _ref.todos,
		    dispatch = _ref.dispatch;

		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
	}

	_createClass(App, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.props.dispatch({ "type": "todos/init" });
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(_HD2.default, null),
				_react2.default.createElement("hr", null),
				_react2.default.createElement(_BD2.default, null)
			);
		}
	}]);

	return App;
}(_react2.default.Component);

;
exports.default = (0, _dva.connect)(function (_ref2) {
	var todos = _ref2.todos;

	return {
		todos: todos
	};
})(App);

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _dva = __webpack_require__(78);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HD = function (_React$Component) {
	_inherits(HD, _React$Component);

	function HD(_ref) {
		var todos = _ref.todos,
		    dispatch = _ref.dispatch;

		_classCallCheck(this, HD);

		return _possibleConstructorReturn(this, (HD.__proto__ || Object.getPrototypeOf(HD)).call(this));
	}

	_createClass(HD, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement("input", { type: "text", ref: "kuang" }),
				" ",
				_react2.default.createElement(
					"button",
					{ onClick: function onClick() {
							_this2.props.dispatch({ "type": "todos/add", "title": _this2.refs.kuang.value });
						} },
					"\u589E\u52A0"
				)
			);
		}
	}]);

	return HD;
}(_react2.default.Component);

;
exports.default = (0, _dva.connect)(function (_ref2) {
	var todos = _ref2.todos;

	return {
		todos: todos
	};
})(HD);

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _dva = __webpack_require__(78);

var _Item = __webpack_require__(742);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BD = function (_React$Component) {
	_inherits(BD, _React$Component);

	function BD(_ref) {
		var todos = _ref.todos,
		    dispatch = _ref.dispatch;

		_classCallCheck(this, BD);

		return _possibleConstructorReturn(this, (BD.__proto__ || Object.getPrototypeOf(BD)).call(this));
	}

	_createClass(BD, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h3',
					null,
					'\u672A\u505A'
				),
				_react2.default.createElement(
					'div',
					null,
					this.props.todos.todos.map(function (item, index) {
						if (item.done == 0) return _react2.default.createElement(
							_Item2.default,
							{
								key: item.id,
								item: item,
								del: function del(id) {
									_this2.props.dispatch({ "type": "todos/del", id: id });
								},
								done: function done(id, checked) {
									_this2.props.dispatch({ "type": "todos/done", id: id, checked: checked });
								},
								title: function title(id, _title) {
									_this2.props.dispatch({ "type": "todos/title", id: id, title: _title });
								}
							},
							item.title
						);
					})
				),
				_react2.default.createElement(
					'h3',
					null,
					'\u5DF2\u505A'
				),
				_react2.default.createElement(
					'div',
					null,
					this.props.todos.todos.map(function (item, index) {
						if (item.done == 1) return _react2.default.createElement(
							_Item2.default,
							{
								key: item.id,
								item: item,
								del: function del(id) {
									_this2.props.dispatch({ "type": "todos/del", id: id });
								},
								done: function done(id, checked) {
									_this2.props.dispatch({ "type": "todos/done", id: id, checked: checked });
								},
								title: function title(id, _title2) {
									_this2.props.dispatch({ "type": "todos/title", id: id, title: _title2 });
								}
							},
							item.title
						);
					})
				)
			);
		}
	}]);

	return BD;
}(_react2.default.Component);

;
exports.default = (0, _dva.connect)(function (_ref2) {
	var todos = _ref2.todos;

	return {
		todos: todos
	};
})(BD);

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\DVATodoList\\node_modules\\_redux-logger@3.0.6@redux-logger\\dist\\redux-logger.js'");

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _dva = __webpack_require__(78);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
	_inherits(Item, _React$Component);

	function Item(_ref) {
		var item = _ref.item;

		_classCallCheck(this, Item);

		var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

		_this.state = {
			onEdit: false,
			txt: item.title
		};
		return _this;
	}

	_createClass(Item, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement("input", {
					type: "checkbox",
					checked: this.props.item.done == "1",
					onChange: function onChange(e) {
						_this2.props.done(_this2.props.item.id, e.target.checked);
					}
				}),
				!this.state.onEdit ? _react2.default.createElement(
					"span",
					{ onDoubleClick: function onDoubleClick() {
							_this2.setState(_extends({}, _this2.state, { "onEdit": true }));
						} },
					this.props.item.title
				) : _react2.default.createElement("input", {
					type: "text",
					value: this.state.txt,
					onChange: function onChange(e) {
						_this2.setState(_extends({}, _this2.state, { "txt": e.target.value }));
					},
					onBlur: function onBlur(e) {
						_this2.props.title(_this2.props.item.id, e.target.value);
						_this2.setState(_extends({}, _this2.state, {
							"onEdit": false
						}));
					}
				}),
				" ",
				_react2.default.createElement(
					"button",
					{
						onClick: function onClick() {
							_this2.props.del(_this2.props.item.id);
						}
					},
					"\u5220\u9664"
				)
			);
		}
	}]);

	return Item;
}(_react2.default.Component);

exports.default = Item;
;

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\DVATodoList\\node_modules\\_dva@1.2.1@dva\\index.js'");

/***/ })

/******/ });