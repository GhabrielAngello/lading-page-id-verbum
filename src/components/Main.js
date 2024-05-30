import React from "react";

function Main(props){
 return(
    <main>
        <aside>
            <h2 className="initial-title-1"><span className="btn-subcribe">Psicanálise Institucional</span></h2>
            <h2 className="initial-title">LIDERANÇA & RELAÇÕES HUMANAS</h2>
            <p className="subtitle">
            O Curso de Psicanálise Institucional: "Liderança & Relações Humanas" tem como objetivo qualificar os alunos para liderar grupos e equipes, promovendo relações humanas saudáveis no ambiente de trabalho. O curso aborda técnicas psicanalíticas, habilidades de liderança e comunicação, além de aspectos relacionados ao trabalho em equipe e distribuição de responsabilidades.
            </p>
            <div className="container-buy">
                <a href="#" id="inscreva-se-btn">Inscreva-se agora</a>
            </div>
        </aside>
        <article>
            <img 
                src={props.mainImg}
                alt={props.alt}
                className="initial-img"
            />
        </article>
    </main>
 )
}

export default Main;