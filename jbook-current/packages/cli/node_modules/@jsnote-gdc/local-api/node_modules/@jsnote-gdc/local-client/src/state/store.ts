import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
// import { ActionType } from './action-types';
import { persistMiddlware } from './middlewares/persist-middlware';

export const store = createStore(reducers, {}, applyMiddleware(persistMiddlware, thunk));



// // testing
// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'code'
//   },
// });
// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'text'
//   },
// });
// console.log(store.getState());