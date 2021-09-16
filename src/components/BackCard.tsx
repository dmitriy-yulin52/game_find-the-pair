import tuz from './assets/tuz.jpg'

type BackCardType = {
    name:string
}


export const BackCard = (props:BackCardType)=> {
    const {
        name
    }= props

    return (
        <div style={{display:"flex",flexDirection:'column',alignItems:'center'}}>
            <div>{name}</div>
            <img src={tuz} alt="" style={{width:'50px'}}/>
        </div>
    )
}