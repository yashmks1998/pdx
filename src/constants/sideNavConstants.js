import Activity from '../components/icons/Activity';
import Charts from '../components/icons/Charts';
import Folder from '../components/icons/Folder';
import Home from '../components/icons/Home';
import User from '../components/icons/User';
import YieldFarming from '../components/icons/YieldFarming';

export const DRAWER_WIDTH = 100;

export const COMMON_HEADER_NAV_PATHS = [
	'/yield-farming-a',
	'/yield-farming-b',
	'/onboarding',
];

export const SHOW_ICONS_NAV_PATHS = ['/yield-farming-b'];

export const MENU_ITEMS = [
	{
		item: 'a',
		title: 'Dashboard',
		icon: <Home />,
		activeIcon: <Home color={'active'} />,
		navPath: '/',
	},
	{
		item: 'b',
		title: 'Yield Farming',
		icon: <YieldFarming />,
		activeIcon: <YieldFarming color={'active'} />,
		navPath: '/yield-farming-a',
	},
	{
		item: 'c',
		title: 'Yield Farming',
		icon: <Charts />,
		activeIcon: <Charts color={'active'} />,
		navPath: '/yield-farming-b',
	},
	{
		item: 'd',
		title: 'On-boarding',
		icon: <User />,
		activeIcon: <User color={'active'} />,
		navPath: '/onboarding',
	},
	{
		item: 'e',
		title: 'Dashboard',
		icon: <Activity />,
		activeIcon: <Activity color={'active'} />,
		navPath: '/',
	},
	{
		item: 'f',
		title: 'Dashboard',
		icon: <Folder />,
		activeIcon: <Folder color={'active'} />,
		navPath: '/',
	},
];
