import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import MainComponent from './components/MainComponent';
import './styles/styles.scss';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
	typography: {
		fontSize: 12,
		fontFamily: 'Courier Prime',
		width: 'inherit',
		h1: {
			fontSize: '4.125rem',
			letterSpacing: '0.375rem',
			margin: 0,
			'@media (min-width:600px)': {
				fontSize: '3.5rem',
			},
		},
		h2: {
			fontSize: '3.675rem',
			letterSpacing: '0.275rem',
			fontWeight: 600,
			color: '#ffffff',
			margin: 0,
			'@media (min-width:600px)': {
				fontSize: '2.75rem',
			},
		},
		h3: {
			fontSize: '2.675rem',
			color: '#ffffff',
			margin: 0,
			'@media (min-width:600px)': {
				fontSize: '2rem',
			},
		},
		h4: {
			fontSize: '1.875rem',
			fontWeight: 600,
			color: '#ffffff',
			margin: 0,
			'@media (min-width:600px)': {
				fontSize: '1.2rem',
			},
		},
		h4Grey: {
			fontSize: '1.875rem',
			fontWeight: 600,
			color: '#d2d2d2',
			margin: 0,
			'@media (min-width:600px)': {
				fontSize: '1.2rem',
			},
		},
		h4Light: {
			fontSize: '1.875rem',
			color: '#d2d2d2',
			margin: 0,
			'@media (min-width:600px)': {
				fontSize: '1.2rem',
			},
		},
		h5: {
			fontSize: '1.25rem',
			color: '#ffffff',
			margin: 0,
			'@media (min-width:600px)': {
				fontSize: '0.875rem',
			},
		},
		h5Grey: {
			fontSize: '1.25rem',
			color: '#d2d2d2',
			margin: 0,
			'@media (min-width:600px)': {
				fontSize: '0.875rem',
			},
		},
		label: {
			fontSize: '1.875rem',
			fontWeight: 600,
			color: '#ffffff',
			margin: 0,
			'&::after': {
				content: '"*"',
				display: 'inline-block',
				color: '#f62525',
				fontSize: '12px',
				marginTop: '-8px',
				marginLeft: '8px',
			},
			'@media (min-width:600px)': {
				fontSize: '1.2rem',
			},
		},
		body2: {
			fontSize: '1.5rem',
			margin: 0,
			'@media (min-width:600px)': {
				fontSize: '1rem',
			},
		},
		body1: {
			fontSize: '1rem',
			color: '#a5a5a5',
			margin: 0,
			'@media (min-width:600px)': {
				fontSize: '0.75rem',
			},
		},
		subtitle1: {
			fontSize: '1.375rem',
			color: '#a5a5a5',
			margin: 0,
			'@media (min-width:600px)': {
				fontSize: '1rem',
			},
		},
		subtitle2: {
			fontSize: '1.375rem',
			color: '#ffffff',
			margin: 0,
			'@media (min-width:600px)': {
				fontSize: '1rem',
			},
		},
		overline: {
			fontSize: '1.375rem',
			color: '#ffffff',
			textTransform: 'capitalize',
			fontWeight: 600,
			lineHeight: 1.66,
			margin: 0,
			'@media (min-width:600px)': {
				fontSize: '1rem',
			},
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			{/* <main>This app is using the dark mode</main> */}
			<BrowserRouter>
				<MainComponent />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
