<script>
  import { CompleteTp } from '$lib/functions/question-type-2.js'
  let text = ''

  let timer;
  let question = {}

  const debounce = ()=>{
    clearTimeout(timer)

    timer = setTimeout(() => {
      clearTimeout(timer)
      
      question  = CompleteTp(text)
    }, 1000);
  }

</script>

<article>
  <h1>Complete the Phrase (CTP)</h1>
  <p>{text}</p>

  <div>
    <input type="text" bind:value={text} on:keydown={debounce}>
    <button>Finish</button>
  </div>

</article>