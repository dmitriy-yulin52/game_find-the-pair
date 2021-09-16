import {CardFlip} from "../CardFlip";
import {CardsType, SCREEN_END, SCREEN_START} from "../cards/cardsReducer";
import s from './Header.module.css'

type HeaderType = {
    screen: string,
    time: number,
    totalClicks: number,
    totalPairs: number,
    startGame: () => void,
}
export const Header = (props: HeaderType) => {

    const {
        screen = SCREEN_START,
        time = 0,
        totalClicks = 0,
        totalPairs = 0,
        startGame,
    } = props


    const styleCount = {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '100px',
        marginBottom: '100px',
        color:'white'
    }
    return (
        <div>
            {screen === SCREEN_START ?
                <button
                    className={s.button}
                    onClick={startGame}>Click to start</button>
                : screen === SCREEN_END ?
                    <div>
                        <div>well down</div>
                    </div>
                    :
                    <div style={styleCount }>
                        <div style={{marginRight:'50px'} }>Time</div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                            <div>TOTAL MOVES: <span>{totalClicks}</span></div>
                            <div>FOUND PAIRS: <span>{totalPairs}</span></div>
                        </div>
                    </div>
            }
            <div>

            </div>
        </div>
    )
}