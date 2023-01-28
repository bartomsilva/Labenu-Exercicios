import InfoUser from "./InfosUsuario";

export default function Cardvideo(props) {

    const titulo = "Título do vídeo";

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    return (
        <section className="painel-de-videos">
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={props.myVideo[0].image} alt="" />
                <h4>{props.myVideo[0].filmTitle}</h4>
                <InfoUser info={props.myVideo[0]}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.myVideo[1].image} alt="" />
            <h4>{props.myVideo[1].filmTitle}</h4>
            <InfoUser info={props.myVideo[1]}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.myVideo[2].image} alt="" />
            <h4>{props.myVideo[2].filmTitle}</h4>
            <InfoUser info={props.myVideo[2]}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.myVideo[3].image} alt="" />
            <h4>{props.myVideo[3].filmTitle}</h4>
            <InfoUser info={props.myVideo[3]}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.myVideo[4].image} alt="" />
            <h4>{props.myVideo[4].filmTitle}</h4>
            <InfoUser info={props.myVideo[4]}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.myVideo[5].image} alt="" />
            <h4>{props.myVideo[5].filmTitle}</h4>
            <InfoUser info={props.myVideo[5]}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.myVideo[6].image} alt="" />
            <h4>{props.myVideo[6].filmTitle}</h4>
            <InfoUser info={props.myVideo[6]}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.myVideo[7].image} alt="" />
            <h4>{props.myVideo[7].filmTitle}</h4>
            <InfoUser info={props.myVideo[7]}/>
            </div>
        </section>
    )
}