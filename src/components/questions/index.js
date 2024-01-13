import MultiAnswerComponent from './multiAnswers';
import SingleAnswerComponent from './singleAnswer';
import './style.css';

const questions = [
 {
  question: 'ещькере?',
  answers: [
   'Lorem pariatur excepteur commodo voluptate deserunt duis eiusmod pariatur culpa fugiat.',
   'Amet magna proident labore laboris est commodo culpa ea.',
   'Irure laboris tempor ut in in.'
  ],
  correctAnswer: 0
 },
 {
  question: 'поставте трійкуза екзамен будь ласка',
  answers: [
   'так',
   'ні',
   'подумаю'
  ],
  correctAnswer: 0
 },
 {
  question: 'поставте трійкуза екзамен будь ласка',
  answers: [
   'так',
   'ні',
   'подумаю'
  ],
  correctAnswer: 0
 }
 ,
 {
  question: 'поставте трійку за екзамен будь ласка',
  answers: [
   'так',
   'ні',
   'так'
  ],
  correctAnswer: [0, 2]
 }
];


const QuestionsComponent = () => {

 return (
  <div className='questions'>
   <h1>Questions</h1>
   <div className='container'>

    {
     questions.map(el => (
      Array.isArray(el.correctAnswer)
       ? <MultiAnswerComponent
        answers={el.answers}
        question={el.question}
        correctAnswer={el.correctAnswer}
       />
       : <SingleAnswerComponent
        answers={el.answers}
        question={el.question}
        correctAnswer={el.correctAnswer}
       />
     ))
    }

   </div>
  </div>
 );
};

export default QuestionsComponent;