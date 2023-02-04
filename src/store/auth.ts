import {defineStore} from 'pinia';
import axios from 'axios';
import {RegisterForm} from 'interfaces/RegisterForm';

const url = 'http://nomakler.uicgroup.tech/api'
const account = '/account'
export const auth = defineStore('counter', {
	state: () => ({ phone: '', otp: '' }),
	getters: {
		doubleCount: (state) => state.phone,
	},
	actions: {
		async getOtp(phone: string) {
			try {
				const data = await axios.post(`${url}${account}/otp`, {
					phone: phone.replace(/\D+/g, '')
				})
				console.log(data)
			} catch (e) {
				console.log(e)
			}
		},
		async register({phone, ...form}: RegisterForm) {
			try {
				const data = await axios.post(`${url}${account}/register`, {
					otp: this.otp,
					phone: phone.replace(/\D+/g, ''),
					...form,
				})
				console.log(data)
			} catch (e) {
				console.log(e)
			}
		}
	},
})