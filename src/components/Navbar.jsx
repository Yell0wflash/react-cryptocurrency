import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
	const menuItems = [
		{
			key: 'Home',
			icon: <HomeOutlined />,
			label: <Link to={'/'}>Home</Link>,
		},
		{
			key: 'Cryptocurrencies',
			icon: <FundOutlined />,
			label: <Link to={'/cryptocurrencies'}>Cryptocurrencies</Link>,
		},
		{
			key: 'Exchanges',
			icon: <MoneyCollectOutlined />,
			label: <Link to={'/exchanges'}>Exchanges</Link>,
		},
		{
			key: 'News',
			icon: <MoneyCollectOutlined />,
			label: <Link to={'/news'}>News</Link>,
		},
	];

	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Avatar src={icon} size='large' />
				<Typography.Title level={2} className='logo'>
					<Link to={'/'}>Cryptocurrency</Link>
				</Typography.Title>
				{/* <Button className="menu-control-container"></Button> */}
			</div>
			<Menu theme='dark' items={menuItems}></Menu>
		</div>
	);
};

export default Navbar;
