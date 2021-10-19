export const getTranslatedValue = (lan, allTransData, screenname, placeholder) => {
	let value = '';
	let currentTransData = allTransData[lan];
	if (currentTransData) {
		let screenData = currentTransData[screenname];
		value = screenData[placeholder] ? screenData[placeholder] : '';
	}
	return value;
};
