import RsvpList from '../views/RsvpList.vue';
import router from './router/index';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/rsvps',
    name: 'RsvpList',
    component: RsvpList
  }
];
export default router; // ✅ THIS IS IMPORTANT
