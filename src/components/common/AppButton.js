import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import * as React from 'react';

export default function AppButton(props) {
	const { text, variant, endIcon, clickHandler, borderRadius, minWidth } =
		props;
        let bgColor,color,hoverBGColor,activeBGColor;
        switch(variant){
            case 'outlined':
                bgColor='#161717';
                color='#ffffff';
                hoverBGColor='rgb(146, 146, 146, 0.3)';
                activeBGColor='rgb(146, 146, 146, 0.3)';
				break;

            case 'primary':
                bgColor='#ffffff';
                color='#000000';
                hoverBGColor='rgb(220 213 213)';
                activeBGColor='rgb(220 213 213)';
				break;

            default:
                bgColor='#161717';
                color='#ffffff';
                hoverBGColor='rgb(217, 217, 217,0.3)'
                activeBGColor='rgb(217, 217, 217,0.3)'
				break;

        }


	const BootstrapButton = styled(Button)({
		boxShadow: 'none',
		textTransform: 'none',
		fontSize: 16,
		padding: '6px 12px',
		border: '1px solid',
		lineHeight: 1.5,
		backgroundColor: bgColor,
		borderColor: variant === 'outlined' ? '#ffffff' : '',
		borderRadius: borderRadius || 4,
		minWidth: minWidth || '25.75rem',
		minHeight: '2.75rem',
		color:color,
		fontFamily: ['Courier Prime'].join(','),
		'&:hover': {
			backgroundColor: hoverBGColor,
			borderColor: variant === 'outlined' ? '#ffffff' : '#161717',
			boxShadow: 'none',
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: activeBGColor,
			borderColor: variant === 'outlined' ? '#ffffff' : '#161717',
		},
		'&:focus': {
			boxShadow: '0 0 0 0.2rem rgba(146, 146, 146, .5)',
		},
	});

	return (
		<BootstrapButton
			variant={variant || 'contained'}
			disableRipple
			endIcon={endIcon}
			onClick={clickHandler}>
			{text}
		</BootstrapButton>
	);
}
