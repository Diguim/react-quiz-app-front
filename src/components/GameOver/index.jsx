//react
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

//components

//estaticos
import "./style.css"


export default function GameOver(){
    const [quizState, dispatch] = useContext(QuizContext);

    return(

        <div id="gameover">
            <h2>FIM DE JOGO</h2>
            <p>PONTUAÇÃO: {quizState.score}</p>
            <p>Voce acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
            <img src="" alt="FIM DO QUIZ" />
            <button onClick={() => dispatch({ type: "NEW_GAME" })}>
                Reiniciar
            </button>
        </div>
    )
}