import {v1} from "uuid";

export enum ACTION_TYPE {
    SET_CARDS = 'cardsReducer/SET_CARDS',
    START_GAME = 'cardsReducer/START_GAME',
    OPEN_CARDS = 'cardsReducer/OPEN_CARDS',
    SET_WITH_PAIR = 'cardsReducer/SET_WITH_PAIR',
    RESET_OPEN_CARDS = 'cardsReducer/RESET_OPEN_CARDS',
}

// export const PAIRS_COUNT = 18;
export const PAIRS_COUNT = 9;
export const TIME_TO_CHOICE = 5000;
export const SCREEN_START = 'SCREEN_START';
export const SCREEN_END = 'SCREEN_END';
export const SCREEN_GAME = 'SCREEN_GAME';

export type CardsType = {
    id: string,
    name: string,
    open: boolean,
    withPair: boolean
}


type InitialStateType = {
    cards: Array<CardsType>,
    delay: number,
    isRunning: boolean,
    openCards: Array<CardsType>,
    screen: string,
    time: number,
    totalClicks: number,
    totalPairs: number,
}
const initialState: InitialStateType = {
    cards: [],
    delay: 1000,
    isRunning: false,
    openCards: [],
    screen: SCREEN_START,
    time: TIME_TO_CHOICE,
    totalClicks: 0,
    totalPairs: 0,
};


type ActionTypes =
    ReturnType<typeof setCards>
    | ReturnType<typeof setStartGame>
    | ReturnType<typeof openCard>
    | ReturnType<typeof setWithPair>
    | ReturnType<typeof resetOpenCards>


export const cardsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPE.SET_CARDS:
            return {
                ...state,
                totalClicks: 0,
                totalPairs: 0,
                cards: action.cards
            };
        case ACTION_TYPE.START_GAME:
            return {...state, screen: action.screen};
        case ACTION_TYPE.OPEN_CARDS:
            return {
                ...state,
                openCards: (() => {
                    if(action.open){
                        if(state.openCards[0] && state.openCards[0].id === action.card.id){
                            return state.openCards;
                        }
                        return [... state.openCards, action.card]
                    }
                    if(!action.open){
                        if(state.openCards[0]?.id === action.card.id){
                            return [];
                        }
                    }
                    return  state.openCards
                })(),
                cards: state.cards.map((el) => {
                    if (el.id === action.card.id) {
                        return {...el, open: action.open}
                    }
                    return el
                }),
                totalClicks: state.totalClicks + 1
            }
        case ACTION_TYPE.SET_WITH_PAIR:
            return {
                ...state,
                openCards: [],
                cards: state.cards.map((el) => {
                    if (el.name === action.name) {
                        return {...el, withPair: true}
                    }
                    return el
                }),
                totalPairs: state.totalPairs + 1,

            }
        case ACTION_TYPE.RESET_OPEN_CARDS:
            return {
                ...state,
                openCards: [],
                cards: state.cards.map((el) => {
                    if (el.withPair) {
                        return el
                    }
                    if (el.open) {
                        return {...el, open: false}
                    }
                    return el
                })
            }
        default:
            return state
    }
}


export const setCards = (cards: Array<CardsType>) => {
    return {
        type: ACTION_TYPE.SET_CARDS,
        cards
    } as const
}

export const setStartGame = (screen: string) => {
    return {
        type: ACTION_TYPE.START_GAME,
        screen
    } as const
}
export const openCard = (card: CardsType, open: boolean) => {
    return {
        type: ACTION_TYPE.OPEN_CARDS,
        card,
        open
    } as const
}
export const setWithPair = (name: string) => {
    return {
        type: ACTION_TYPE.SET_WITH_PAIR,
        name
    } as const
}
export const resetOpenCards = () => {
    return {
        type: ACTION_TYPE.RESET_OPEN_CARDS,
    } as const
}
