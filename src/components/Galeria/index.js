import Video from '../Video';
import './style.css';

const Galeria = () => {
    return (

        <section id="galeria">
            <div className="grid">
                <Video url="https://www.youtube.com/embed/AcwHCjVy9E8" title="4 dicas cicloturismo"/>

                <Video url="https://www.youtube.com/embed/K0NzpFkYyUM" title="3 circuitos"/>

                <Video url="https://www.youtube.com/embed/Z54AlgLEjVU" title="viagem de bike"/>
            </div>
        </section>




    )
}

export default Galeria;