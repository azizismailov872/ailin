//AudioBook
import AudioBookContainer from './views/AudioBook/AudioBookContainer';
import AudioBookGenreContainer from './views/AudioBookGenre/AudioBookGenreContainer';
//Podcast
import PodcastContainer from './views/Podcast/PodcastContainer';
import PodcastGenreContainer from './views/PodcastGenre/PodcastGenreContainer';
//Training
import TrainingContainer from './views/Training/TrainingContainer';
import TrainingGenreContainer from './views/TrainingGenre/TrainingGenreContainer';
//User
import UserContainer from './views/User/UserContainer';
//AdminUser
import AdminUserContainer from './views/AdminUser/AdminUserContainer';
//RegisterApp
import RegisterAppContainer from './views/RegisterApplication/RegisterAppContainer';
//VolunteerApp
import VolunteerAppContainer from './views/VolunteerApplication/VolunteerAppContainer';


const routes = [
    //User
    {
        path: "/users/list",
        name: "Пользователи",
        icon: "ni ni-single-02 text-primary",
        component: UserContainer,
        layout: "/admin",
        visible: true,
    },
    {
        path: "/users/",
        name: "Пользователи",
        icon: "ni ni-single-02 text-primary",
        component: UserContainer,
        layout: "/admin",
        visible: false,
    },
    //RegisterApplications
    {
        path: "/register-applications/list",
        name: "Заявки на регистрацию",
        icon: "ni ni-archive-2 text-primary",
        component: RegisterAppContainer,
        layout: "/admin",
        visible: true,
    },
    {
        path: "/register-applications",
        name: "Заявки на регистрацию",
        icon: "ni ni-archive-2 text-primary",
        component: RegisterAppContainer,
        layout: "/admin",
        visible: false,
    },
    //AdminUser
    {
        path: "/admin-users/list",
        name: "Администраторы",
        icon: "ni ni-single-02 text-primary",
        component: AdminUserContainer,
        layout: "/admin",
        visible: true,
    },
    {
        path: "/admin-users",
        name: "Администраторы",
        icon: "ni ni-single-02 text-primary",
        component: AdminUserContainer,
        layout: "/admin",
        visible: false,
    },
    //VolunteerApp
    {
        path: "/volunteer-applications/list",
        name: "Заявки на волонтерство",
        icon: "ni ni-archive-2 text-primary",
        component: VolunteerAppContainer,
        layout: "/admin",
        visible: true,
    },
    {
        path: "/volunteer-applications",
        name: "Заявки на волонтерство",
        icon: "ni ni-archive-2 text-primary",
        component: VolunteerAppContainer,
        layout: "/admin",
        visible: false,
    },
    //Audiobook
    {
        path: "/audiobooks/list",
        name: "Аудиокниги",
        icon: "ni ni-books text-primary",
        component: AudioBookContainer,
        layout: "/admin",
        visible: true,
    },
    {
        path: "/audiobooks/genres",
        name: "Аудиокниги | Жанры",
        icon: "ni ni-headphones text-primary",
        component: AudioBookGenreContainer,
        layout: "/admin",
        visible: false,
    },
    {
        path: "/audiobooks",
        name: "Аудиокниги",
        icon: "ni ni-books text-primary",
        component: AudioBookContainer,
        layout: "/admin",
        visible: false,
    },
    {
        path: "/audiobooks/genres/list",
        name: "Аудиокниги | Жанры",
        icon: "ni ni-tag text-primary",
        component: AudioBookGenreContainer,
        layout: "/admin",
        visible: true,
    },
    //Podcast
    {
        path: "/podcasts/list",
        name: "Подкасты",
        icon: "ni ni-headphones text-primary",
        component: PodcastContainer,
        layout: "/admin",
        visible: true,
    },
    {
        path: "/podcasts/genres",
        name: "Подкасты | Жанры",
        icon: "ni ni-tag text-primary",
        component: PodcastGenreContainer,
        layout: "/admin",
        visible: false,
    },
    {
        path: "/podcasts",
        name: "Подкасты",
        icon: "ni ni-tag text-primary",
        component: PodcastContainer,
        layout: "/admin",
        visible: false,
    },
    {
        path: "/podcasts/genres/list",
        name: "Подкасты | Жанры",
        icon: "ni ni-tag  text-primary",
        component: PodcastGenreContainer,
        layout: "/admin",
        visible: true,
    },
    //Training
    {
        path: "/trainings/list",
        name: "Тренинги",
        icon: "ni ni-hat-3 text-primary",
        component: TrainingContainer,
        layout: "/admin",
        visible: true,
    },
    {
        path: "/trainings/genres",
        name: "Тренинги | Жанры",
        icon: "ni ni-tag text-primary",
        component: TrainingGenreContainer,
        layout: "/admin",
        visible: false,
    },
    {
        path: "/trainings",
        name: "Тренинги",
        icon: "ni ni-hat-3 text-primary",
        component: TrainingContainer,
        layout: "/admin",
        visible: false,
    },
    {
        path: "/trainings/genres/list",
        name: "Тренинги | Жанры",
        icon: "ni ni-tag text-primary",
        component: TrainingGenreContainer,
        layout: "/admin",
        visible: true,
    },
];
export default routes;