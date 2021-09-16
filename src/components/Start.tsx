import {useState} from "react";
import ReactCardFlip from "react-card-flip";
import {FrontCard} from "./FrontCard";
import {BackCard} from "./BackCard";

export const Start = () => {

    const[isFlipped,setIsFlipped] = useState(false)


    const onCLickHandler = ()=> {
        setIsFlipped(!isFlipped)
    }

    const styles = {
        display:'flex',
        justifyContent:'spaceBetween'
    }



    return (
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                {/*<FrontCard>*/}
                {/*    This is the front of the card.*/}
                {/*    <button onClick={onCLickHandler}>Click to flip</button>*/}
                {/*</FrontCard>*/}
                <div>
                    <FrontCard/>
                    <button onClick={onCLickHandler}>Click to flip</button>
                </div>
                <div>
                    <BackCard/>
                    <button onClick={onCLickHandler}>Click to flip</button>
                </div>
                {/*<BackCard>*/}
                {/*    This is the back of the card.*/}
                {/*    <button onClick={onCLickHandler}>Click to flip</button>*/}
                {/*</BackCard>*/}
            </ReactCardFlip>
        </div>
    )
}