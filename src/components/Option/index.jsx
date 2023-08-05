/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
//react
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";


//componentes

//estaticos
import "./style.css";


export default function Option({ option, selectOption, answer, hide }){
    const [quizState, dispatch] = useContext(QuizContext);
    
    return(
        <div
            onClick={() => selectOption()}
            className={`
                option ${quizState.answerSelected && option === answer ? "correct" : ""}
                ${quizState.answerSelected && option !== answer ? "wrong" : ""}
                ${hide ? "hide" : ""}
            `}
        >
            {option}
        </div>
    )
}