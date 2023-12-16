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
  {#if question.textHTML}
    {@html question.textHTML}
  {:else}
    <p>{text}</p>
  {/if}

  <div>
    <input type="text" bind:value={text} on:keydown={debounce}>
    <button>Finish</button>
  </div>

</article>