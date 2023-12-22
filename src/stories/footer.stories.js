import Footer from '../components/main-elements/footer.svelte';

export default {
	title: 'Footer',
	excludeStories: /.*Data$/
};

export const Default = () => ({
	Component: Footer,
	props: {
		text: 'poco texto'
	}
});
