<!-- Refactor answers to be a set (to avoid repeated values) -->
<!-- do a function to generate the question once you have it done -->

<script>
  import { DefaultQuestion } from '$lib/functions/question-default'
  let questionTxt = ''
  let currentAns = ''
  let answers = new Set()
  let correctAns = ''

  let timer;
  let question = DefaultQuestion()

  const debounce = ()=>{
    clearTimeout(timer)

    timer = setTimeout(() => {
      clearTimeout(timer)
      question.utils.setQuestion(questionTxt)
      // question  = CompleteTp(text)
    }, 1000);
  }
  const addAns = () => {
    // answers = answers.concat(currentAns)
    answers = answers.add(currentAns)
    question.utils.setAnswers(currentAns)
    console.log(question);
    currentAns = ''
  }

</script>

<article>
  <h1>Complete the Phrase (CTP)</h1>
  <div>
    <p>{questionTxt}</p>
    <ul>
      {#each Array.from(answers) as answer}
        <li>
         {answer}
        </li>
      {/each}
    </ul>
  </div>
  <div>
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
    </section>
  </div>

</article>