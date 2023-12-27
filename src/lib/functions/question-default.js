export const DefaultQuestion = (
	obj = { question: '', answers: new Set(), correctAns: '', userAns: '' }
) => {
	const setQuestion = (value) => (obj.question = value);
	const setAnswers = (value) => obj.answers.add(value);
	const setCorrectAns = (value) => {
		const valueInAnswers = obj.answers.has(value);
		if (valueInAnswers) obj.correctAns = value;
		else throw new Error('The answer is not in the list');
	};
	const setUserAns = (value) => (obj.correctAns = value);

	const addAnswer = (answer) => obj.answers.add(answer);

	return {
		obj,
		utils: {
			setQuestion,
			setAnswers,
			setCorrectAns,
			setUserAns,
			addAnswer
		}
	};
};
