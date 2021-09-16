import {combineReducers, createStore} from "redux";
import {cardsReducer} from "../components/cards/cardsReducer";


const rootReducer = combineReducers({
    cardsPage: cardsReducer
})

export const store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>
