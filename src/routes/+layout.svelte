<script>
  import Header from '$lib/components/main-elements/header.svelte';
</script>

<!-- <Header /> -->
<header>
	<nav>
		<ul>
			<a href="/blog/">Blog</a>
		</ul>
		<ul>
			<a href="/">Home</a>
		</ul>
		<ul>
			<a href="/admin/">admin dashboard</a>
		</ul>
		<ul>
			<a href="#">Acerca de</a>
		</ul>
	</nav>
</header>


<slot />