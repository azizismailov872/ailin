import * as yup from "yup";

export const schema = yup.object().shape({
    phone: yup
        .string()
        .required("Заполните номер телефона")
        .min(6, "омер телефона должнен состоять минимум из 6 символов"),
});
