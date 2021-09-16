
type ButtonType = {
    onClickHandler:(id:string)=> void
    idCard:string
}

export const Button = (props:ButtonType)=> {
    return (
        <>
            <button onClick={()=>props.onClickHandler(props.idCard)}>Click</button>
        </>
    )
}