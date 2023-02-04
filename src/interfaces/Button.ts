export type ButtonVariant = 'disabled' | 'active' | 'light'

export const ButtonVariants: Record<ButtonVariant, string> = {
	disabled: 'text-white bg-gray-500 ',
	active: 'text-white bg-blue-500 focus:border-blue-300',
	light: 'text-blue-700 bg-blue-100 focus:border-blue-500',
}