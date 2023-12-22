export const DefaultQuestion = (
	obj = { question: '', answers: new Set(), correctAns: '', userAns: '' }
) => {
	const setQuestion = (value) => (obj.question = value);
	const setAnswers = (value) => obj.answers.add(value);
	const setCorrectAns = (value) => (obj.correctAns = value);
	const setUserAns = (value) => (obj.correctAns = value);

	console.log({ ...obj });
	return {
		obj,
		utils: { setQuestion, setAnswers, setCorrectAns, setUserAns }
	};
};
