import router from '../../router';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const items = router.map((item, index) => ({
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
      items={items}
      onClick={onClickMenuItem}
    />
  );
};

export default Nav;
