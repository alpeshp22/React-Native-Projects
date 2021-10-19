export const isValidEmail = (email) => {
	const reg = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		if (reg.test(email) === true) {
		return true;
	}
	return false;
};

export const getAge = (birthDate) => {
	return Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
};

export const checkPassword = (password) => {
	let errors = [];
	if (password.length < 8) {
		errors.push('Your password must be at least 8 characters');
		console.log('Your password must be at least 8 characters')
	}
	if (password.search(/[a-z]/) < 0) {
		errors.push('Your password must contain at least one  small letter.');
		console.log('Your password must contain at least one small letter.')

	}
	if (password.search(/[A-Z]/) < 0) {
		errors.push('Your password must contain at least one capital letter.');
		console.log('Your password must contain at least one capital letter.')

	}

	if (password.search(/[0-9]/) < 0  && password.search(/[!@#$%^&*]/) < 0 && password.search(/[!@#$%^&*]/) < 0) {
		errors.push('Your password must contain at least one digit.');
		console.log('Your password must contain at least one digit.')

	}

	if (password.search(/[!@#$%^&*]/) < 0) {
		errors.push('Your password must contain at least one special character.');
		console.log('Your password must contain at least one special character.')

	}

	if (errors.length > 0) {
		errors.join("\n")
		return true;
	}
	return false;
};

export const randomString = (length) => {
	return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1);
};

export const isValidPassword = (password, length) => {
	if (password.length >= length) {
		return true;
	}
	return false;
};

export const isValidComparedPassword = (password, confirmPassword) => {
	if (password == confirmPassword) {
		return true;
	}
	return false;
};

export const isValidPhoneNumber = (phoneNumber) => {
	if (phoneNumber.length >= 10) {
		for (i = 0; i < phoneNumber.length; i++) {
			if (isNaN(phoneNumber[i])) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
};
