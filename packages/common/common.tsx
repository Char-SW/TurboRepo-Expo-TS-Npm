const common = () => {

	const calculateWords = ( text: string ) => { 
		return text.split(" ").length;
	}
	const calculateLetters = ( text: string ) => { 
		return text.length;
	}

	const apiList = {
		calculateWords,
		calculateLetters
	}

	return apiList;


}

export default common;