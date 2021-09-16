import tuz from './assets/tuz.jpg'
import obl from './assets/obl.jpg'

type FrontCardType = {
    name: string
}



export const FrontCard = (props: FrontCardType) => {

    const {
        name
    } = props
    return (
        <div style={{display:"flex",flexDirection:'column',alignItems:'center'}}>
            <div>{name}</div>
            <img src={obl} alt="" style={{width:'50px'}}/>
        </div>
    )
}