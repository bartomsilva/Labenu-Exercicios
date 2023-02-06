import { useId } from "react"
import { CardPro } from "./cardsStyled"


export function Cards(props){
    const {name,val,img,cod,pro}=props.prod
  
    return (
        <CardPro pro={pro}>
            <div>
               <h1>{cod}-{name}</h1>
               <p>Valor: R$ {val}</p>
            </div>
            <div className='figure'>
           </div>
        </CardPro>
    )
}