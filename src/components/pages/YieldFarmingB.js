import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { TRANSACTION_DETAILS_VALUES } from '../../constants/yield-farming-constants';
import '../../styles/yieldFarmingB.scss';
import AmountCard from '../common/AmountCard';
import AppButton from '../common/AppButton';
import AppDropdown from '../common/AppDropdown';
import MenuPanel from '../common/MenuPanel';
import TransactionCard from '../common/TransactionCard';
import ValueCard from '../common/ValueCard';
import ValueStacked from '../icons/ValueStacked';
import StackedChartMUI from '../ui-card-components/muiChartComponent';

export default function YieldFarmingB() {
	const [liquidMiningData, setLiquidMiningData] = useState();
	const [overViewMenuItems, setOverViewMenuItems] = useState([]);
	const [bundleList, setBundleList] = useState([]);
	const [selectedbundle, setSelectedBundle] = useState('APR 10.2%');
	const [transactionItems, setTransactionItems] = useState([]);

	const [currentStake, setCurrentStake] = useState('');
	const [totalLiquidity, setTotalLiquidity] = useState('');
	const [stakingApr, setStakingApr] = useState();
	const [transactionDetails, setTransactionDetails] = useState(
		TRANSACTION_DETAILS_VALUES
	);

	const handleBundleSelection = (value) => {
		setSelectedBundle(value);
	};

	const handleTransactionsItemSelection = (option) => {};
	const handleOverviewMenuSelection = (option) => {};

	useEffect(() => {
		setLiquidMiningData({
			amount: 123.0,
			balance: 4500.0,
		});
		setBundleList([
			{ label: 'APR 10.2%', value: 'APR 10.2%' },
			{ label: 'APR 10.1%', value: 'APR 10.1%' },
		]);
		setTransactionDetails({
			uptrend: 14,
			downtrend: 12,
			count: 4,
		});
		setTransactionItems(['test']);
		setCurrentStake('LPDX');
		setTotalLiquidity('124,165.17 lps');
		setStakingApr('32.98%');
	}, []);
	return (
		<Grid container spacing={1} columnGap={3} className='w-auto m-0'>
			<Grid item md={8.5} className='p-0'>
				<div className='liquidity-mining-card container-card'>
					<div className='app-flex justify-content-space-between'>
						<Typography noWrap variant='h4'>
							Liquidty Mining
						</Typography>
						<div className='w-30'>
							<AppDropdown
								items={bundleList}
								labelId={'liuidity-select-label'}
								id={'liuidity-select'}
								value={selectedbundle}
								onChange={handleBundleSelection}
							/>
						</div>
					</div>
					<AmountCard
						amount={liquidMiningData?.amount}
						balance={liquidMiningData?.balance}
						tagName={'LPDX'}
						showChip={true}
						chipLabel={'MAX'}
					/>
				</div>
				<div className='stake-btn mb-2'>
					<AppButton
						text={'Stake'}
						variant={'primary'}
						minWidth={'90%'}
						borderRadius={'2.5rem'}></AppButton>
				</div>
				<div className='stats-section gap-2 app-flex justify-content-space-between'>
					<div className='chart-section w-60'>
						<div className='app-flex justify-content-space-between mb-2'>
							<Typography noWrap variant='h4'>
								Total value Staked
							</Typography>
							<div className='w-30'>
								<AppDropdown
									items={bundleList}
									labelId={'recent-select-label'}
									id={'recent-select'}
									value={selectedbundle}
									onChange={handleBundleSelection}
								/>
							</div>
						</div>
						<div className='chart container-card'>
							<StackedChartMUI></StackedChartMUI>
						</div>
					</div>
					<div className='statistics-section w-40'>
						<div className='app-flex justify-content-space-between mb-2'>
							<Typography noWrap variant='h4'>
								Statistics
							</Typography>
							<div className='w-30'>
								<AppDropdown
									items={bundleList}
									labelId={'stats-select-label'}
									id={'stats-select'}
									value={selectedbundle}
									onChange={handleBundleSelection}
								/>
							</div>
						</div>
						<div className='stats app-flex-col'>
							<ValueCard
								icon={<ValueStacked />}
								title={'Total Staked'}
								amount={1234}
								showAmountAndProgressBar={true}
								progress={40}
							/>
							<ValueCard
								icon={<ValueStacked />}
								title={'Total Rewards'}
								amount={12345}
								showAmountAndProgressBar={true}
								progress={45}
							/>
						</div>
					</div>
				</div>
			</Grid>
			<Grid item md={3.2} className='p-0'>
				<div className='container-card h-100 '>
					<div className='grey-card mb-6 mt-3'>
						<div className='app-flex justify-content-space-between white-bottom-border card-padding'>
							<Typography noWrap variant='h4'>
								My Staking Details
							</Typography>
							<MenuPanel
								menuItems={overViewMenuItems}
								onSelection={
									handleOverviewMenuSelection
								}
							/>
						</div>
						<div className='app-flex flex-wrapper gap-2 card-padding justify-content-around  p-2'>
							<div>
								{' '}
								<Typography noWrap variant='h5Grey'>
									Current Stake
								</Typography>
								<Typography noWrap variant='h5'>
									{currentStake}
								</Typography>{' '}
							</div>
							<div>
								{' '}
								<Typography noWrap variant='h5Grey'>
									Total Liquidity
								</Typography>
								<Typography noWrap variant='h5'>
									{totalLiquidity}
								</Typography>
							</div>
							<div>
								{' '}
								<Typography noWrap variant='h5Grey'>
									Staking APR
								</Typography>
								<Typography noWrap variant='h5'>
									{stakingApr}
								</Typography>
							</div>
							<div>
								<AppButton
									text={'Claim Rewards'}
									minWidth={'100%'}></AppButton>
							</div>
						</div>
					</div>
					<div className='app-flex justify-content-space-between'>
						<Typography noWrap variant='h4'>
							Transactions
						</Typography>
						<MenuPanel
							menuItems={transactionItems}
							onSelection={handleTransactionsItemSelection}
						/>
					</div>
					<TransactionCard
						title={'Bundle Created'}
						count={4}
						growth={`+${transactionDetails.uptrend}%`}
						isPositive={true}
						icon={'stacked'}
					/>
					<TransactionCard
						title={'Dispersed'}
						count={transactionDetails.count}
						growth={`-${transactionDetails.downtrend}%`}
						isPositive={false}
						icon={'trend'}
					/>
				</div>
			</Grid>
		</Grid>
	);
}
