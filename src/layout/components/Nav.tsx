import router from '../../router';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

const items = router.map(item => ({
  key: item.path,
  label: item.name
}));

const Nav = () => {
  const navigate = useNavigate();
  const onClickMenuItem = (e: any) => {
    return navigate(e.key);
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[router[0].path]}
      selectedKeys={[useLocation().pathname]}
      items={items}
      onClick={onClickMenuItem}
    />
  );
};

export default Nav;
