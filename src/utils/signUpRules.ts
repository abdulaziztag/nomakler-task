import {helpers, minLength, required} from '@vuelidate/validators';

const requiredMsg = helpers.withMessage('Это обязательное поле', required)
export const valRules = {
	firstName: {required: requiredMsg},
	lastName: {required: requiredMsg},
	phone: {
		required: requiredMsg,
		minLength: helpers.withMessage('Неправильный формат номера', minLength(19))
	}
}