import { configureStore } from '@reduxjs/toolkit';
import IncDecReducer from './reducers/index';

export default configureStore({
    reducer:{
        number: IncDecReducer,
    }
})