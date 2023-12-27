import { writable } from 'svelte/store';

export const arrDefQ = writable(undefined);
export const arrCTPQ = writable(undefined);

export const currentDefQ = writable(undefined);
export const currentCTPQ = writable(undefined);

export const LocalStorage = (() => {
	const removeArrDefQ = () => localStorage.removeItem('DefaultQ Arr');
	const removeArrCTPQ = () => localStorage.removeItem('CTPQ Arr');

	const removeCurrenDefQ = () => localStorage.removeItem('DefaultQ');
	const removeCurrentCTPQ = () => localStorage.removeItem('CTPQ');

	return {
		removeArrCTPQ,
		removeArrDefQ,
		removeCurrenDefQ,
		removeCurrentCTPQ
	};
})();
