import counterReducer from './features/Counter';
import inputReducer from './features/Input'
import listReducer from './features/UserLists'

const rootReducer = {
    counter : counterReducer,
    input : inputReducer ,
    users : listReducer
}

export default rootReducer;