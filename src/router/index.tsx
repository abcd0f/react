import Home from '../view/Home';
import About from '../view/About';

interface IRouter {
  path: string;
  name: string;
  component: any;
}

const router: IRouter[] = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/about',
    name: '关于',
    component: About
  }
];

export default router;
