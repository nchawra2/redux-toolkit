import counterReducer from './features/Counter';
import inputReducer from './features/Input'

const rootReducer = {
    counter : counterReducer,
    input : inputReducer 
}

export default rootReducer;