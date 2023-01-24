import img1 from "https://picsum.photos/400/400?a=1 "
import img2 from "https://picsum.photos/400/400?a=2 "
import img3 from "https://picsum.photos/400/400?a=3 "
import img4 from "https://picsum.photos/400/400?a=4 "
import img5 from "https://picsum.photos/400/400?a=5 "
import img6 from "https://picsum.photos/400/400?a=6 "
import img7 from "https://picsum.photos/400/400?a=7 "
import img8 from "https://picsum.photos/400/400?a=8 "



export default function Cardvideo() {

    const titulo = "Título do vídeo";
    
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }

    return (
        <section className="painel-de-videos">
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={img1} alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={img2} alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={img3} alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={img4} alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={img5} alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={img6} alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={img7} alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={img8} alt="" />
                <h4>{titulo}</h4>
            </div>
        </section>
    )
}