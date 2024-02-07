import {createStore} from 'redux'
import  { Calculation } from './Reducers/Reducer';


const  store = createStore(Calculation)

export default store;