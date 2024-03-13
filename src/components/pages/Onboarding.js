import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import React, { useEffect, useRef, useState } from 'react';
import {
	FORM_LIST,
	FORM_VALUES,
	PROJECTS_LIST,
} from '../../constants/onboarding-constants';
import ProjectIcon from '../../images/ProjectIcon.png';
import AppButton from '../common/AppButton';
import AppCheckbox from '../common/AppCheckbox';
import AppInput from '../common/AppInput';

export default function Onboarding() {
	const hiddenFileInput = useRef(null);

	const [projectsList, setProjectsList] = useState([]);
	const [feeGenerated, setFeeGenerated] = useState(0);
	const [projectCount, setProjectCount] = useState(0);
	const [showError, setShowError] = useState(false);
	const [formValues, setFormValues] = useState(FORM_VALUES);

	useEffect(() => {
		// Set the data on the initial load
		setProjectsList(PROJECTS_LIST);
		setFeeGenerated(136);
		setProjectCount(32);
	}, []);

	const handleFormSubmit = () => {
		if (
			!formValues.name ||
			!formValues.symbol ||
			!formValues.supply ||
			!formValues.baseUrl ||
			!formValues.logoFile
		) {
			setShowError(true);
			return;
		}
		setShowError(false);
		setFormValues(FORM_VALUES);
		// Add the submit action
	};

	const handleFormChange = (id, value) => {
		let values = { ...formValues };
		values[id] = value;
		setFormValues(values);
	};

	const handleLogoButtonClick = () => {
		hiddenFileInput.current.click();
	};

	const handleFileChange = (event) => {
		setFormValues({
			...formValues,
			logoFile: event.target.files[0],
			fileName: event.target.files[0].name,
		});
	};

	return (
		<div className='h-82vh border-radius-25 black-bg app-flex w-90 m-auto overflow-auto'>
			<div className='w-70 h-82vh p-4'>
				<Typography noWrap variant='h3' className='m-0 mb-2'>
					Create ERC-425 Token
				</Typography>
				{showError && (
					<Typography
						noWrap
						variant='body2'
						className='m-0 mb-2 red-font'>
						Please add all the mandatory fields.
					</Typography>
				)}
				<form onSubmit={handleFormSubmit} className='app-flex-col'>
					{FORM_LIST.map((formItem) => {
						return (
							<AppInput
								key={formItem.id}
								id={formItem.id}
								name={formItem.id}
								type={formItem.type}
								placeholder={formItem.placeholder}
								label={formItem.label}
								value={formValues[formItem.id]}
								onChange={(e) =>
									handleFormChange(
										formItem.id,
										e.target.value
									)
								}
								required={formValues.required}
							/>
						);
					})}
					<div className='app-flex'>
						<Typography
							noWrap
							variant='label'
							className='w-30'>
							Other
						</Typography>
						<div className='w-70 app-flex gap-2'>
							<AppCheckbox
								label='Anti Sniper'
								checked={formValues.antiSniper}
								onChange={(e) =>
									handleFormChange(
										'antiSniper',
										e.target.checked
									)
								}
							/>
							<AppCheckbox
								label='Blacklist'
								checked={formValues.blackList}
								onChange={(e) =>
									handleFormChange(
										'blackList',
										e.target.checked
									)
								}
							/>
						</div>
					</div>
					<div className='app-flex mb-2'>
						<Typography
							noWrap
							variant='label'
							className='w-30'>
							Config
						</Typography>
						<div className='w-70 app-flex'>
							<Chip
								label={'e.g.2%'}
								sx={{
									height: 'auto',
									backgroundColor: '#ffffff',
									'& .MuiChip-label': {
										fontSize: '0.875rem',
										color: '#9D9D9D',
									},
								}}
							/>
							<Typography noWrap variant='h5'>
								Max-Wallet
							</Typography>
							<input
								ref={hiddenFileInput}
								style={{ display: 'none' }}
								type='file'
								onChange={handleFileChange}
							/>
							{formValues?.fileName && (
								<Typography noWrap variant='h5'>
									{formValues.fileName}
								</Typography>
							)}
							<AppButton
								text={'Upload Logo'}
								minWidth={'20%'}
								variant={'outlined'}
								clickHandler={handleLogoButtonClick}
								borderRadius={'10px'}
							/>
						</div>
					</div>
					<AppButton
						text={'Deploy Token'}
						minWidth={'100%'}
						variant={'primary'}
						clickHandler={handleFormSubmit}
						borderRadius={'25px'}
					/>
				</form>
			</div>
			<div className='w-30 h-82vh grey-bg app-flex-col'>
				<Typography noWrap variant='h4' className='m-0'>
					Projects On-boarded
				</Typography>
				<div className='dark-grey-card project-list-card h-60'>
					<div className='app-flex light-grey-bottom-border p-1'>
						<Typography
							noWrap
							variant='overline'
							className='w-60'>
							Projects
						</Typography>
						<Typography
							noWrap
							variant='overline'
							className='w-40'>
							Category
						</Typography>
					</div>
					<div className='project-list-wrapper h-80'>
						{projectsList.map((project) => {
							return (
								<div
									key={project.project}
									className='app-flex light-grey-bottom-border'>
									<div className='app-flex w-60 light-grey-right-border p-1'>
										{/* Image src can be changed as per the item url */}
										<img
											src={ProjectIcon}
											alt='Project Image'></img>
										<Typography
											noWrap
											variant='body2'>
											{project.project}
										</Typography>
									</div>
									<div className='w-40 p-1'>
										<Typography
											noWrap
											variant='overline'>
											{project.category}
										</Typography>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className='h-30 dark-black-gradient-card w-100'>
					<Typography
						noWrap
						variant='h4Grey'
						className='m-0 font-weight-light'>
						Total Fee's Generated
					</Typography>
					<Typography noWrap variant='h3' className='mb-1'>
						{feeGenerated}
						{' ETH'}
					</Typography>
					<Typography
						noWrap
						variant='h4Grey'
						className='m-0 font-weight-light'>
						Total Projects On-boarded
					</Typography>
					<Typography noWrap variant='h3'>
						{projectCount}
					</Typography>
				</div>
			</div>
		</div>
	);
}
