import * as yup from "yup";

export const schema = yup.object().shape({
	email: yup
        .string()
        .email('Введите корректный email')
        .required("Введите имя пользователя")
        .min(6, "Email должен состоять минимум из 6 символов"),
    name: yup
        .string()
        .required("Введите имя пользователя")
        .min(3, "Имя пользователя должно состоять минимум из 3 символов"),
    phone: yup
        .string()
        .required("Заполните номер телефона")
        .min(6, "омер телефона должнен состоять минимум из 6 символов"),
    password: yup
        .string()
        .required("Создайте пароль")
        .min(6, "Пароль должен состоять минимум из 6 символов"),
    passwordRepeat: yup.string()
     .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
});
