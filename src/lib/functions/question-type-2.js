export const CompleteTp = (text = '') => {
	let textHTML = '';
	let textWithFormat = '';
	let correctText = '';
	const options = {};

	const setSelectHTML = (value = '') => {
		const cuttedString = value.substring(1, value.length - 1);
		const splittedString = cuttedString.split('||').map((string) => string.trim());

		let optionsHTML = '';

		for (const string of splittedString)
			optionsHTML += `<option value=${string}>${string}</option>`;

		let selectHTML = `<select>${optionsHTML}</select>`;
		return selectHTML;
	};

	const formatHTML = () => {
		textHTML = textWithFormat;

		for (const option in options) {
			const value = options[option];
			// console.log(option, value);
			if (!textWithFormat.includes(option)) return;

			const optionsHTML = setSelectHTML(value);
			textHTML = textHTML.replace(`${option}`, optionsHTML);
		}
	};

	const formatText = () => {
		const regEx = /\[(.*?)\]/g;
		const matches = text.match(regEx);

		if (!matches) return;

		textWithFormat = text;
		// modify options field to save array values instead of strings
		for (const match of matches) {
			const id = returnRandN();

			options[id] = match;
			textWithFormat = textWithFormat.replace(match, id);
		}

		formatHTML();
	};

	const returnRandN = () => Math.round(Math.random() * 1000);

	formatText();
	console.log({ text, textWithFormat, correctText, textHTML, options });
	return { text, textWithFormat, correctText, textHTML, options };
};
