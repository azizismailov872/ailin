import * as yup from "yup";

export const schema = yup.object().shape({
    name: yup
        .string()
        .required("Введите имя пользователя")
        .min(3, "Имя пользователя должно состоять минимум из 3 символов"),
    phone: yup
        .string()
        .required("Заполните номер телефона")
        .min(6, "омер телефона должнен состоять минимум из 6 символов"),
});
