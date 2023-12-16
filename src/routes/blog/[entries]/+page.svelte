<script>
  export let data;
  const {meta, content} = data 
  const {categories, title, description, date} = meta

  console.log(data);
  // console.log(categories);
</script>

<!-- {dataToJSON} -->
<svelte:head>
  <title>{title}</title>
  <meta property="og:type" content="article"/>
  <meta property="og:title" content={title}/>
</svelte:head>

<article>
  <hgroup>
    <h1>{title}</h1>
    <p>Published at {date}</p>
  </hgroup>
  <div>
    {#each categories as category}
      <span> &num;{category}</span>
    {/each} 
  </div>

  <section>
    <svelte:component this={content}/>
  </section>
</article>