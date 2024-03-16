import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
  // Optionally provide middleware, enhancers, etc.
});

export default store;
