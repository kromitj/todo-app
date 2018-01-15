const assert = require('assert');
const { firstNameValidator } = require('../src/server/models/model_helpers/helper_user_model');

describe('Checking functionality of User model helper functions: ', () => {
	describe('#firstNameValidator: ', () => {
		it('returns false with inputs under 3 chars long', (done) => {		
			const fNameInput = "Al";
			assert(firstNameValidator(fNameInput) === false)
			done()
		})
		it('returns false with inputs over 30 chars long', (done) => {		
			const fNameInput = "BlahsBlahsBlahsBlahsBlahsBlahss";
			assert(firstNameValidator(fNameInput) === false)
			done()
		})	
		it('returns false with inputs containing non alphabetic chars', (done) => {		
			const fNameInput = ["M1itch", "<mitch>", "..Mitch", "Mi.tch"];
			fNameInput.forEach((input) => assert(firstNameValidator(input) === false))
			done()
		})
		it('returns true with inputs containing valid first name', (done) => {		
			const fNameInput = ["mitch", "Alan", "Billy", "Mitch"];
			fNameInput.forEach((input) => assert(firstNameValidator(input) === true))
			done()
		})		
		it('returns true with inputs containing spaces and/or hyphens', (done) => {		
			const fNameInput = ["Mitch James", "Mitch-James"];
			fNameInput.forEach((input) => assert(firstNameValidator(input) === true))
			done()
		})	
	})				
})	

