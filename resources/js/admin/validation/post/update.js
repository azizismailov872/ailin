import * as yup from 'yup';

export const schema = yup.object().shape({
	title: yup.string().required('Заполните заголовок статьи').min(3,'Слишком короткий заголовок'),
	en_title: yup.string().required('Заполните перевод').min(3,'Слишком короткий заголовок'),
	kg_title: yup.string().required('Заполните перевод').min(3,'Слишком короткий заголовок'),
	kz_title: yup.string().required('Заполните перевод').min(3,'Слишком короткий заголовок'),
	uz_title: yup.string().required('Заполните перевод').min(3,'Слишком короткий заголовок'),
	tg_title: yup.string().required('Заполните перевод').min(3,'Слишком короткий заголовок'),
	content: yup.string().required('Заполните содержимое стаьти').min(15,'Слишком короткое содержание'),
	en_content: yup.string().required('Заполните перевод содержимого').min(15,'Слишком короткое содержание'),
	kg_content: yup.string().required('Заполните перевод содержимого').min(15,'Слишком короткое содержание'),
	kz_content: yup.string().required('Заполните перевод содержимого').min(15,'Слишком короткое содержание'),
	uz_content: yup.string().required('Заполните перевод содержимого').min(15,'Слишком короткое содержание'),
	tg_content: yup.string().required('Заполните перевод содержимого').min(15,'Слишком короткое содержание'),
});