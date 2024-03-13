import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
	AMOUNT_DETAILS_VALUES,
	BALANCE_DETAILS_VALUES,
	BALANCE_LIST,
	TRANSACTION_DETAILS_VALUES,
	VALUE_DETAILS,
} from '../../constants/yield-farming-constants';
import AmountCard from '../common/AmountCard';
import AppButton from '../common/AppButton';
import AppDropdown from '../common/AppDropdown';
import MenuPanel from '../common/MenuPanel';
import TransactionCard from '../common/TransactionCard';
import ValueCard from '../common/ValueCard';
import Fee from '../icons/Fee';
import Rewards from '../icons/Rewards';
import StackedPercentage from '../icons/StackedPercentage';
import ValueStacked from '../icons/ValueStacked';

export default function YieldFarmingA() {
	const [overViewMenuItems, setOverViewMenuItems] = useState([]);
	const [transactionItems, setTransactionItems] = useState([]);
	const [bundleList, setBundleList] = useState([]);
	const [pairList, setPairList] = useState([]);
	const [recentList, setRecentList] = useState([]);
	const [selectedbundle, setSelectedBundle] = useState('APR 10.2%');
	const [selectedpair, setSelectedPair] = useState('Ethereum-PDX (ETH-PDX)');
	const [selectedRecentItem, setSelectedRecentItem] = useState('Recent');

	const [balancedDetails, setBalancedDetails] = useState(
		BALANCE_DETAILS_VALUES
	);
	const [transactionDetails, setTransactionDetails] = useState(
		TRANSACTION_DETAILS_VALUES
	);
	const [amountDetails, setAmountDetails] = useState(AMOUNT_DETAILS_VALUES);
	const [valueDetails, setValueDetails] = useState(VALUE_DETAILS);

	useEffect(() => {
		// Set everything for initial load
		setOverViewMenuItems(['test']);
		setTransactionItems(['test']);
		setBalancedDetails({
			lpdx: 12,
			apr: 15762,
			stakedSince: 1723,
			pdxRewards: 3213,
			ethRewards: 333,
		});
		setTransactionDetails({
			uptrend: 14,
			downtrend: 12,
			count: 4,
		});
		setAmountDetails({
			pdxAmount: 0.0,
			maxAmount: 0.0,
			pdxBalance: 0,
			maxBalance: 0,
		});
		setBundleList([
			{ label: 'APR 10.2%', value: 'APR 10.2%' },
			{ label: 'APR 10.1%', value: 'APR 10.1%' },
		]);
		setPairList([
			{
				label: 'Ethereum-PDX (ETH-PDX)',
				value: 'Ethereum-PDX (ETH-PDX)',
			},
			{
				label: 'Ethereum-PDA (ETH-PDA)',
				value: 'Ethereum-PDA (ETH-PDA)',
			},
		]);
		setRecentList([
			{
				label: 'Recent',
				value: 'Recent',
			},
			{
				label: 'Last 6 months',
				value: 'Last 6 months',
			},
		]);
		setValueDetails({
			pdxAmount: 124673,
			ethAmount: 2374,
			valueStacked: 1234,
			rewards: 129,
			amount: 2374,
			stackedPercentage: 85,
		});
	}, []);

	const handleOverviewMenuSelection = (option) => {};

	const handleTransactionsItemSelection = (option) => {};

	const handleBundleSelection = (value) => {
		setSelectedBundle(value);
	};

	const handlePairSelection = (value) => {
		setSelectedPair(value);
	};

	const handleRecentItemSelection = (value) => {
		setSelectedRecentItem(value);
	};

	const handleBundleClick = () => {};

	return (
		<Grid container spacing={1} columnGap={3} className='w-auto m-0'>
			<Grid item md={8.5} className='p-0'>
				<div className='container-card mb-2'>
					<div className='app-flex justify-content-space-between'>
						<Typography noWrap variant='h4'>
							Create Bundle
						</Typography>
						<div className='w-20'>
							<AppDropdown
								items={bundleList}
								labelId={'bundle-select-label'}
								id={'bundle-select'}
								value={selectedbundle}
								onChange={handleBundleSelection}
							/>
						</div>
					</div>
					<div className='grey-gradient-card mb-2'>
						<Typography
							noWrap
							variant='subtitle2'
							className='mb-0-5'>
							Select Pair to Bundle with
						</Typography>
						<AppDropdown
							type={'secondary'}
							items={pairList}
							labelId={'pair-select-label'}
							id={'pair-select'}
							value={selectedpair}
							onChange={handlePairSelection}
						/>
					</div>
					<div className='app-flex mb-1'>
						<div className='w-50'>
							<AmountCard
								amount={amountDetails.pdxAmount}
								balance={amountDetails.pdxBalance}
								tagName={'PDX'}
								showChip={false}
								chipLabel={''}
							/>
						</div>
						<div className='w-50'>
							<AmountCard
								amount={amountDetails.maxAmount}
								balance={amountDetails.maxAmount}
								tagName={'ETH'}
								showChip={true}
								chipLabel={'MAX'}
							/>
						</div>
					</div>
					<AppButton
						text={'Bundle'}
						minWidth={'100%'}
						variant={'primary'}
						clickHandler={handleBundleClick}
						borderRadius={'25px'}
					/>
				</div>
				<div className='app-flex justify-content-space-between mb-2'>
					<Typography noWrap variant='h4'>
						Statistics
					</Typography>
					<div className='w-20'>
						<AppDropdown
							items={recentList}
							labelId={'recent-select-label'}
							id={'recent-select'}
							value={selectedRecentItem}
							onChange={handleRecentItemSelection}
						/>
					</div>
				</div>
				<div className='app-flex flex-wrapper gap-2 justify-content-center'>
					<ValueCard
						icon={<ValueStacked />}
						title={'Total Value Stacked'}
						showOnlyAmount={true}
						amount={valueDetails.valueStacked}
						widthClass={'w-half'}
					/>
					<ValueCard
						icon={<Fee />}
						title={`Fee's Collected`}
						showAmountLabels={true}
						pdx={valueDetails.pdxAmount}
						eth={valueDetails.ethAmount}
						widthClass={'w-half'}
					/>
					<ValueCard
						icon={<Rewards />}
						title={'Total Rewards'}
						isTitleHighlighted={true}
						showOnlyAmount={true}
						amount={valueDetails.rewards}
						widthClass={'w-half'}
					/>
					<ValueCard
						icon={<StackedPercentage />}
						title={'Total Percentage Stacked'}
						isTitleHighlighted={true}
						showOnlyProgressBar={true}
						progress={valueDetails.stackedPercentage}
						widthClass={'w-half'}
					/>
				</div>
			</Grid>
			<Grid item md={3.2} className='p-0'>
				<div className='container-card h-100'>
					<div className='grey-card mb-2'>
						<div className='app-flex justify-content-space-between white-bottom-border card-padding'>
							<Typography noWrap variant='h4'>
								Overview
							</Typography>
							<MenuPanel
								menuItems={overViewMenuItems}
								onSelection={
									handleOverviewMenuSelection
								}
							/>
						</div>
						<div className='card-padding'>
							<div className='dark-grey-card'>
								<div className='dark-grey-card-padding white-bottom-border-light'>
									<Typography
										noWrap
										variant='overline'>
										Your Balance
									</Typography>
								</div>
								<div className='card-padding'>
									{BALANCE_LIST.map((item) => (
										<div className='app-flex justify-content-space-between'>
											<Typography
												noWrap
												variant='overline'>
												{item.item}
											</Typography>
											<Typography
												noWrap
												variant='overline'>
												{
													balancedDetails[
														item
															.valueKey
													]
												}
											</Typography>
										</div>
									))}
								</div>
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
