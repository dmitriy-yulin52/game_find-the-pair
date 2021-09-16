import {v1} from "uuid";

export const fabricCards = (count: number) => {

    let arr = []
    for (let i = 0; i < count; i++) {
        arr.push({
            id: v1(),
            name: `card_${i}`,
            open: false,
            withPair: false
        })
    }
    arr = arr.concat(arr.map((el)=> ({...el,id:v1()})))
    return arr.sort(()=> Math.random() - 0.5)
}