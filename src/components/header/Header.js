import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { SHOW_ICONS_NAV_PATHS } from '../../constants/sideNavConstants';
import AppButton from '../common/AppButton';
import ProfileIcon from '../images/profileIcon.png';
import AppLogo from './AppLogo';

function HamburgerIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='36px'
			viewBox='0 0 24 24'
			width='36px'
			fill='#ffffff'>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
		</svg>
	);
}

function SearchIcon() {
	return (
		<svg
			width='48'
			height='48'
			viewBox='0 0 48 48'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<circle cx='24' cy='24' r='24' fill='#292A33' />
			<path
				d='M22.5906 29.8711C26.6116 29.8711 29.8712 26.6115 29.8712 22.5905C29.8712 18.5696 26.6116 15.3099 22.5906 15.3099C18.5697 15.3099 15.31 18.5696 15.31 22.5905C15.31 26.6115 18.5697 29.8711 22.5906 29.8711Z'
				stroke='white'
				stroke-width='1.3'
				stroke-miterlimit='10'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M27.7427 27.7423L32.0005 32.0001'
				stroke='white'
				stroke-width='1.3'
				stroke-miterlimit='10'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
}

function NotificationIcon() {
	return (
		<svg
			width='48'
			height='48'
			viewBox='0 0 48 48'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<circle cx='24' cy='24' r='24' fill='#292A33' />
			<path
				d='M30.53 29.38H16.8V21.47C16.8 17.68 19.87 14.6 23.67 14.6C27.46 14.6 30.54 17.67 30.54 21.47V29.38H30.53Z'
				stroke='white'
				stroke-width='1.2'
				stroke-miterlimit='10'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M14.6 29.38H32.73'
				stroke='white'
				stroke-width='1.2'
				stroke-miterlimit='10'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M25.68 31.37C25.68 32.48 24.78 33.39 23.66 33.39C22.54 33.39 21.64 32.49 21.64 31.37'
				stroke='white'
				stroke-width='1.2'
				stroke-miterlimit='10'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
}

function DashboardHeader(props) {
	const { totalRevenue, totalValue } = props;
	return (
		<Grid
			container
			spacing={1}
			justifyContent='space-around'
			className='mt-1 pl-2 pb-1'>
			<Grid item md={8.8} className='p-0'>
				<Typography noWrap variant='h1'>
					Liquidity for NFTs
				</Typography>
				<Typography noWrap variant='body2'>
					Transferring illiquid <strong>NFTs</strong> into liquid{' '}
					<strong>ERC-20 assets</strong>
				</Typography>
				<div className='mt-5 grouped-button'>
					<AppButton text={'Get Started'} variant={'outlined'} />
					<AppButton text={'On-boarding'} variant={'outlined'} />
				</div>
			</Grid>
			<Grid item md={3.2}>
				<div className='gradient-card value-staked-card'>
					<Typography noWrap variant='subtitle1'>
						Total Value Staked
					</Typography>
					<Typography noWrap className='mb-1' variant='h2'>
						{totalValue}
					</Typography>
					<Typography noWrap variant='subtitle1'>
						Total Value Staked
					</Typography>
					<div className='app-flex align-items-baseline'>
						<Typography noWrap variant='h2'>
							{totalRevenue}
						</Typography>
						<Typography noWrap variant='h4'>
							{' ETH'}
						</Typography>
					</div>
				</div>
			</Grid>
		</Grid>
	);
}

export default function Header(props) {
	const {
		handleSideNavClick,
		open,
		totalRevenue,
		totalValue,
		isDashboard,
		title,
	} = props;

	const [showIcons, setShowIcons] = useState(false);

	useEffect(() => {
		const pathname = window.location.pathname;
		if (SHOW_ICONS_NAV_PATHS.includes(pathname)) {
			setShowIcons(true);
		} else {
			setShowIcons(false);
		}
	}, []);

	const handleNotificationClick = () => {};

	const handleSearchClick = () => {};

	return (
		<div
			className={`header-container ${
				isDashboard ? 'dashboard-header' : ''
			}`}>
			<Grid
				container
				spacing={1}
				alignItems='center'
				justifyContent='space-between'>
				<Grid container spacing={1} alignItems='center' md={10}>
					<Grid
						item
						className='cursor-pointer'
						onClick={() => handleSideNavClick(!open)}>
						<HamburgerIcon />
					</Grid>
					<Grid item>
						{isDashboard ? (
							<AppLogo />
						) : (
							<Typography noWrap variant='h3'>
								{title}
							</Typography>
						)}
					</Grid>
				</Grid>
				<Grid container spacing={1} alignItems='center' md={2}>
					<Grid item>
						{showIcons ? (
							<div className='app-flex'>
								<div
									className='app-flex cursor-pointer'
									onClick={handleSearchClick}>
									<SearchIcon />
								</div>
								<div
									className='app-flex cursor-pointer'
									onClick={handleNotificationClick}>
									<NotificationIcon />
								</div>
							</div>
						) : (
							<AppButton
								text={'Connect'}
								borderRadius={25}
								minWidth={'8.75rem'}
							/>
						)}
					</Grid>
					<Grid item>
						<div className='profile-wrapper cursor-pointer'>
							<img src={ProfileIcon} alt='profile icon' />
						</div>
					</Grid>
				</Grid>
			</Grid>
			{isDashboard && (
				<DashboardHeader
					totalRevenue={totalRevenue}
					totalValue={totalValue}
				/>
			)}
		</div>
	);
}
