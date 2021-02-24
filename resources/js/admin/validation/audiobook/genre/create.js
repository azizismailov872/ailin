import * as yup from 'yup';

export const schema = yup.object().shape({
	title: yup.string().required('Заполните название жанра').min(3,'Название жанра должно состоять минимум из 3 символов'),
	slug: yup.string().required('Заполните ссылку').min(3,'Ссылка жанра должна состоять минимум из 3 символов'),
	en_title: yup.string().required('Заполните перевод названия').min(3,'Слишком короткий заголовок'),
	kg_title: yup.string().required('Заполните перевод названия').min(3,'Слишком короткий заголовок'),
	kz_title: yup.string().required('Заполните перевод названия').min(3,'Слишком короткий заголовок'),
	uz_title: yup.string().required('Заполните перевод названия').min(3,'Слишком короткий заголовок'),
	tg_title: yup.string().required('Заполните перевод названия').min(3,'Слишком короткий заголовок'),
});