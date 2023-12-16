<script>
  export let data;
</script>

<svelte:head>
	<title>posts</title>
</svelte:head>

<article>
  <h1>Posts</h1>

  {#each data.posts as post }
    <section class="post">
      <header>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <p>{post.date}</p>
      </header>

      <footer>
        <p>
          {post.categories}
        </p>

        <a href={`/blog/${post.slug}`}>Leer</a>
        
      </footer>

    </section>  
  {/each}

</article>

<style>
  .post {
    background-color: aqua;
  }
</style>