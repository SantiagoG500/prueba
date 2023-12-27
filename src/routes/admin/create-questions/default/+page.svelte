<script>
  import { DefaultQuestion } from '$lib/functions/question-default'
  import { currentCTPQ, arrCTPQ } from "$lib/stores";

  let questionTxt = ''
  let currentAns = ''
  let answers = []

  let timer;
  
  let question = ($currentCTPQ)? $currentCTPQ: DefaultQuestion()
  let questions = ($arrCTPQ)? $arrCTPQ: new Set()

  console.log({question, questions});

  const debounce = ()=>{
    clearTimeout(timer)

    timer = setTimeout(() => {
      clearTimeout(timer)
      question.utils.setQuestion(questionTxt)
      $currentCTPQ = question
    }, 1000);
  }
  const addAns = () => {
    // answers = answers.concat(currentAns)
    const ansField = document.getElementById('answer')
    question.utils.addAnswer(currentAns)
    answers = Array.from(question.obj.answers)

    $currentCTPQ = question

    currentAns = ''
    ansField.value = ''
  }
  const setCorrectAns = e => {
    const target = e.target
    const value = target.value

    try {
      question.utils.setCorrectAns(value)
      console.log(question);
    } catch (error) {
      console.warn(error);
    }

  }


  const addQuestionToSet = () => {
    const questionsArr = Array.from(questions)
    const qAlreadyInList = questionsArr.find(question => question.obj.question === questionTxt)

    if (qAlreadyInList) return

    questions = questions.add(question)
    $arrCTPQ = questions

    resetValues()
    console.log(questions);
  }

  const resetValues = () => {
    question = DefaultQuestion()
    questionTxt = ''
    currentAns = ''
    answers = []
  }

</script>

<article>

  <section clas="quesion-list">
    <h1>questions</h1>
    <div>
      {#each Array.from(questions) as {obj}}
        <h3> {obj.question}</h3>
        <ul>
          {#each Array.from(obj.answers) as answer}
            <li>{answer}</li>
          {/each}
        </ul>
        <p>Correct Answer: <span>{obj.correctAns}</span></p>
      {/each}
    </div>
  </section>

  <section class="create-q" id="create-q">

    <div class="question-preview">
      <h2>Preview</h2>
      <p class="question">{questionTxt}</p>
      <ul class="answers">
        {#each answers as answer }
          <li>
            <label for={answer}>{answer}</label>
            <input type="radio" value={answer} id={answer} name={questionTxt} on:click={setCorrectAns}>
            <!-- <button on:click={editAns}>Edit</button> -->
          </li>
        {/each}
      </ul>
    </div>

    <div class="question-generator">
      <section class="question-field">
        <div class="question">
          <label for="question">Question</label>
          <input id="question" placeholder="quetion n1" type="text" bind:value={questionTxt} on:keydown={debounce}>
        </div>
        <div class="answers">
          <label for="answer">Answer</label>
          <input id="answer" placeholder="here goes your answer" type="text" bind:value={currentAns}>
          <button on:click={addAns}>Add Answer</button>
        </div>
        <button on:click={addQuestionToSet}>Add Question</button>
      </section>
    </div>
  </section>

</article>