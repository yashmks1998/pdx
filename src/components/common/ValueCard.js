import { Typography } from '@mui/material';
import React from 'react';
import ProgressBar from './ProgressBar';

export default function ValueCard(props) {
	const {
		icon,
		title,
		isTitleHighlighted,
		showAmountLabels,
		showOnlyAmount,
		showOnlyProgressBar,
		showAmountAndProgressBar,
		amount,
		progress,
		pdx,
		eth,
		widthClass,
	} = props;

	return (
		<div
			className={`container-card ${widthClass} p-2 value-card-height app-flex-col`}>
			<div className='app-flex gap-2'>
				<div className='white-bg-circle'>{icon}</div>
				<Typography
					noWrap
					variant={isTitleHighlighted ? 'h4' : 'h4Grey'}>
					{title}
				</Typography>
			</div>
			<div>
				{showOnlyAmount && (
					<Typography noWrap variant='h4Light'>
						{'$'}
						{amount}
					</Typography>
				)}
				{showOnlyProgressBar && <ProgressBar progress={progress} />}
				{showAmountAndProgressBar && (
					<div className='app-flex justify-content-space-between gap-2'>
						<Typography
							noWrap
							variant='h4Light'
							className='w-40'>
							{'$'}
							{amount}
						</Typography>
						<div className='w-60'>
							<ProgressBar progress={progress} />
						</div>
					</div>
				)}
				{showAmountLabels && (
					<div>
						<div className='app-flex justify-content-space-between'>
							<Typography noWrap variant='subtitle2'>
								PDX
							</Typography>
							<Typography noWrap variant='subtitle2'>
								ETH
							</Typography>
						</div>
						<div className='app-flex justify-content-space-between'>
							<Typography noWrap variant='h4Light'>
								{'$'}
								{pdx}
							</Typography>
							<Typography noWrap variant='h4Light'>
								{'$'}
								{eth}
							</Typography>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
