const assert = require('assert');
const User = require('../src/server/models/user');
const userSeed = {firstName: "Mitch", lastName: "Kroska"}
describe("User model tests....", () => {
	it('is an instance of a mongoose class', (done) => {
		assert(User.modelName === 'user')
		done()
	})
	it('is able to create a user', (done) => {
		const user = new User(userSeed)
		user.save()
		.then((user) => {
			User.findOne(userSeed)
			.then((user) => {
				assert(user.firstName === "Mitch")
				done()
			})
		})
	})
	it('checks for names under 3 characters', (done) => {
		const user = new User({firstName: "Al", lastName: "Grseen"})
		user.save()
			.catch((validationResult) => {
				const message = validationResult.errors.firstName.message;
				assert(message === 'blah is not a valid first name, needs to consist of only alphabetic characters and spacez, and be between 3-30 characters long');
				done()
		})
	})
	it('checks for names over 30 characters', (done) => {
		const user = new User({firstName: "blahsblahsblahsblahsblahsblahss"})
		user.save()
			.catch((validationResult) => {
				const message = validationResult.errors.firstName.message;
				assert(message === 'blah is not a valid first name, needs to consist of only alphabetic characters and spacez, and be between 3-30 characters long');
				done()
		})
	})


})