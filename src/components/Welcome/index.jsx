/* eslint-disable no-unused-vars */
//react
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

//components

//estaticos
import "./style.css"


export default function Welcome(){
    const [quizState, dispatch] = useContext(QuizContext);


    return(
        <div id="welcome">

            <h2>Seja Bem vindo</h2>

            <p>Clique para começar:</p>

            <button onClick={() => dispatch({ type: "CHANGE_STAGE"})}>
                Iniciar
            </button>

            <img src="" alt="IMG DE INICIO" />

        </div>
    )
}