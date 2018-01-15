const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { firstNameValidator } = require('./model_helpers/helper_user_model');

const userSchema = new Schema({
	firstName: {
		type: String,
		validate: {
			validator: (firstName) => firstNameValidator(firstName),
			message: 'blah is not a valid first name, needs to consist of only alphabetic characters and spacez, and be between 3-30 characters long'
		},
		required: [true, "FirstName is required"]
	},
	lastName: {
		type: String,
		validate: {
			validator: (firstName) => firstNameValidator(firstName),
			message: 'blah is not a valid first name, needs to consist of only alphabetic characters and spacez, and be between 3-30 characters long'
		},
		required: [true, "LastName is required"]
	}
})

const User = mongoose.model('user', userSchema);
module.exports = User;