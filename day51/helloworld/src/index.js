import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import ShoppingList from './ShoppingList'

import CommentCard from './CommentCard'
import * as serviceWorker from './serviceWorker';

const element = (
	<CommentCard author={'Jyoti'} date={new Date().toLocaleTimeString()} comment={'This is awesome'}/>
)

ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
