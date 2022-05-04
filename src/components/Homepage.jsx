import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
const { Title } = Typography;

const Homepage = () => {
	const { data, isFetching } = useGetCryptosQuery();
	const globalStats = data?.data?.stats;

	if (isFetching) {
		return 'Loading...';
	}

	return (
		<>
			<Title level={2} className='heading'>
				Global Crypto Stats
			</Title>
			<Row>
				<Col span={12}>
					<Statistic
						title='Total Cryptocurrencies'
						value={globalStats?.total ? millify(globalStats.total) : 0}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Exchanges'
						value={globalStats?.totalExchanges ? millify(globalStats.totalExchanges) : 0}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Market Cap'
						value={globalStats?.totalMarketCap ? millify(globalStats?.totalMarketCap) : 0}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total 24h Volume'
						value={globalStats?.total24hVolume ? millify(globalStats?.total24hVolume) : 0}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Markets'
						value={globalStats?.totalMarkets ? millify(globalStats?.totalMarkets) : 0}
					/>
				</Col>
			</Row>
		</>
	);
};

export default Homepage;
