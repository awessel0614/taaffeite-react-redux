import React from 'react';
import ReactDOM from 'react-dom/client';

// Step 1: import Provider, applyMiddleware, combineReducers, createStore
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
// End Step 1

import App from './components/App/App';
import './index.css';

// Create a reducer to store a counter-- a reducer is a variable that we can share across components,
//a place for information to live :)
// const [count, setCount] = useState(0);  << this is the way we previously used to do things... can still be used sometimes if it makes sense to do so
//    name      value=initial value        action lol
const count = (    state = 0,                 action) => {
  if (action.type === 'INCREASE') {
    return state + 1; // DO NOT PUT state += 1!!!!!!! we want to return a NEW thing, not modify an exisiting thing
    //return state + action.payload;   ..........this is for the increasing it by 5 example
  } else if (action.type === 'DECREASE') {
    return state - 1;
  } else if (action.type === 'RESET') {
    return 0;   //so.... whenever you are returning something, think of it as you're setting the count equal to something... so here,
    //we're setting the count = 0
  }
  //Returning state means the reducer is unchanged.
  return state; 
}


const listName = (state = 'test', action) => {
    if (action.type === 'SET_LIST_NAME') {
      //our new list name will be passed via action.payload
      return action.payload;
    }
    // Reducers must always return state by default!!!!!!!!
    return state;
};



//This is called a reducer-- more on this later!
const bookList = (state = [], action) => {
  // TODO - set book list with data from server

  if(action.type==='ADD_BOOK') {
    //what this line does is combines the existing state
    //aka, the array, with the new book (action.payload)
    return [...state, action.payload] //similar to .push
  } else if (action.type === 'SET_BOOK_LIST') {
    // if receiving a full list, replace the list
    return action.payload;
  }
  // !!! For reducers, you'll generally have an ADD action type *or* a SET action type
  //it's uncommon that you would have an ADD and a SET in the same reducer....
  //so the example above is kind of just that, an example 
  return state;
}

// Step 2: create your store
const reduxStore = createStore(
  combineReducers({
    //This is the only part of this block of code
    //that you will need to change. 
    bookList, 
    count,
    listName
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Step 3: Wrap your App in a Provider */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
