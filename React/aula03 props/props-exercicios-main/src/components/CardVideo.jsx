import InfoUser from "./InfosUsuario";
import { useId } from 'react';

export default function Cardvideo(props) {

    const titulo = "Título do vídeo";

    const reproduzVideo = (e) => {
        let nVideo = +e.target.parentNode.id[1];
        if (nVideo >= 0) {
            document.getElementById('container-trailer').classList.toggle('hide')
            document.querySelector('.video').classList.toggle('hide')
            document.querySelector('body').classList.toggle('fix')
            document.querySelector(".video").innerHTML = props.myVideo[nVideo].link
            window.location.href = '#foo';
        }
    }

    function closeFilme() {
        document.querySelector(".video").innerHTML = ''
        document.querySelector('#container-trailer').classList.toggle('hide')
    }

    return (
        <section className="painel-de-videos">
            {props.myVideo.map((video, index) => (
                <div id={"i" + index} className="box-pagina-principal" key={useId()}>
                    <img className='cover' src={video.image} alt="" onClick={(event) => reproduzVideo(event)}/>
                    <h4>{video.filmTitle}</h4>
                    <InfoUser info={video} />
                </div>
            ))}

        </section>
    )
}