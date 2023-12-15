export async function load({ params }) {
	const post = await import(`../../../posts/${params.entries}.md`);
	return post;
}
