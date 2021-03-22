import RegisterComponent from '../app/pages/Register';
import LoginComponent from '../app/pages/Login';
import ListIdea from '../app/pages/ListIdea';
import MailConfirm from '../app/components/mail-confirm';
import EditIdea from '../app/pages/EditIdeas';

const routes = [
    { path:'/auth/register', component: RegisterComponent, title: 'Register', needsAuth: false},
    { path:'/auth/login', component: LoginComponent, title: 'Login', needsAuth: false},
    { path:'/auth/email-confirm', component: MailConfirm, title: 'Mail Confirm', needsAuth: false},
    { path:'/api/ideas', component: ListIdea, title: 'ListIdea', needsAuth: false},
];

export default routes;