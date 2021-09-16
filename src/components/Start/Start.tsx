import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    openCard,
    PAIRS_COUNT,
    resetOpenCards,
    SCREEN_GAME,
    setCards,
    setStartGame,
    setWithPair
} from "../cards/cardsReducer";
import {Header} from "../Header/Header";
import {useEffect} from "react";
import s from './Start.module.css'
import ReactCardFlip from "react-card-flip";
import {FrontCard} from "../FrontCard";
import {BackCard} from "../BackCard";

import {fabricCards} from "../cards/fabricCards";

export const Start = () => {


    const cardsPage = useSelector((state: AppStateType) => state.cardsPage)
    const {
        cards,
        delay,
        isRunning,
        openCards,
        screen,
        time,
        totalClicks,
        totalPairs
    } = cardsPage
    const dispatch = useDispatch()

    useEffect(()=> {
        if(openCards.length > 2){
            dispatch(resetOpenCards())
            dispatch(openCard(openCards[2], true))
        }
        if(openCards[0]?.name === openCards[1]?.name){
            dispatch(setWithPair(openCards[0]?.name))
        }
        console.log(openCards)
    },[openCards.length])

    useEffect(() => {
        if (screen === SCREEN_GAME) {
            initGame()
        }
    }, [screen])

    const initGame = () => {
        const action = setCards(fabricCards(PAIRS_COUNT))
        dispatch(action)
    }

    const startGame = () => {
        const action = setStartGame(SCREEN_GAME)
        dispatch(action);
    };

    const styleButton = {

    }

    return (
        <div className={s.container}>
            <div>
                <Header
                    startGame={startGame}
                    screen={screen}
                    time={time}
                    totalClicks={totalClicks}
                    totalPairs={totalPairs}
                />
                <div className={s.wrapperCards}>
                    {cards.map((el, index) => {

                        const handleOpenClick = () => {
                            dispatch(openCard(el, true))
                        }
                        const handleCloseClick = () => {
                            dispatch(openCard(el, false))
                        }

                        return (
                            <div className={s.container}>
                                <ReactCardFlip key={el.id} isFlipped={el.open} flipDirection="vertical">
                                    <div>
                                        <BackCard
                                            name={el.name}
                                        />
                                        <button onClick={handleOpenClick}>Back to flip</button>
                                    </div>
                                    <div>
                                        <FrontCard
                                            name={el.name}
                                        />
                                        <button
                                            disabled={el.withPair} onClick={handleCloseClick}
                                        >Front to flip</button>
                                    </div>
                                </ReactCardFlip>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}