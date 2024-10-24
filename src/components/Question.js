import Option from './Option';

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        <Option question={question} dispatch={dispatch} answer={answer} />
      </div>
    </div>
  );
}

export default Question;
