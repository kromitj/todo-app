const firstNameValidator = (input) => {
	const validator = /^[a-zA-Z '-]{3,30}$/
	return validator.test(input)
}

module.exports = {
	firstNameValidator
}