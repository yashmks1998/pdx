import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	COMMON_HEADER_NAV_PATHS,
	DRAWER_WIDTH,
	MENU_ITEMS,
} from '../constants/sideNavConstants';
import Header from './header/Header';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';
import YieldFarmingA from './pages/YieldFarmingA';
import YieldFarmingB from './pages/YieldFarmingB';
import SideNav from './side-navigation/SideNav';

export default function MainComponent() {
	const [showSideNav, setShowSideNav] = useState(false);
	const [totalRevenue, setTotalRevenue] = useState(0);
	const [totalValue, setTotalValue] = useState('$136,841');
	const [isDashboard, setIsDashboard] = useState(false);
	const [title, setTitle] = useState('Dashboard');

	useEffect(() => {
		handleMenuItemChange();
	}, []);

	useEffect(() => {
		// TO DO: Set the total revenue and total value here
		setTotalRevenue(0);
		setTotalValue('$136,841');
	}, []);

	const Main = styled('main', {
		shouldForwardProp: (prop) => prop !== 'open',
	})(({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${DRAWER_WIDTH}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	}));

	const AppBar = styled(MuiAppBar, {
		shouldForwardProp: (prop) => prop !== 'open',
	})(({ theme, open }) => ({
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		...(open && {
			width: `calc(100% - ${DRAWER_WIDTH}px)`,
			marginLeft: `${DRAWER_WIDTH}px`,
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		}),
	}));

	const DrawerHeader = styled('div')(({ theme }) => {
		return {
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(0, 1),
			minHeight: isDashboard ? '40vh' : '10vh',
			justifyContent: 'flex-end',
		};
	});

	const handleSideNavClick = (val) => {
		setShowSideNav(val);
	};

	const handleMenuItemChange = (val) => {
		const pathname = window.location.pathname;
		if (COMMON_HEADER_NAV_PATHS.includes(pathname)) {
			setIsDashboard(false);
		} else {
			setIsDashboard(true);
		}
		const index = MENU_ITEMS.findIndex(
			(item) => item.navPath === pathname
		);
		if (index > -1) {
			setTitle(MENU_ITEMS[index].title);
		}
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				open={showSideNav}
				className='header-height'>
				<Header
					handleSideNavClick={handleSideNavClick}
					open={showSideNav}
					totalRevenue={totalRevenue}
					totalValue={totalValue}
					isDashboard={isDashboard}
					title={title}
				/>
			</AppBar>
			<SideNav
				open={showSideNav}
				handleSideNavClick={handleSideNavClick}
				handleMenuItemChange={handleMenuItemChange}
			/>
			<Main open={showSideNav} className='main-component-height'>
				<DrawerHeader />
				<Routes>
					<Route path='/*' element={<Dashboard />} />
					<Route path='/' element={<Dashboard />} />
					<Route
						path='/yield-farming-a'
						element={<YieldFarmingA />}
					/>
					<Route
						path='/yield-farming-b'
						element={<YieldFarmingB />}
					/>
					<Route path='/onboarding' element={<Onboarding />} />
				</Routes>
			</Main>
		</Box>
	);
}
