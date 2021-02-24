import * as yup from 'yup';

export const schema = yup.object().shape({
	email: yup.string().email('Введите корректный email').required('Введите email'),
	password: yup.string().min(3,'Пароль должен состоять минимум из 3 символов').required('Введите пароль')
});