import React, { useState, useEffect } from 'react';

import reserveLogo from '../../images/reserve.svg';

import AppButton from '../../components/common/AppButton';

import Collections from '../ui-card-components/Collections';

import '../../styles/dashboard-style.scss';

export default function Dashboard() {
	const [liquidityBridgeData, setLiquidityBridgeData] = useState([]);

	const [riskFactorData, setRiskFactorData] = useState([]);

	const [supportedCollections,setSupportedCollections] =useState([]);

	const [creatorsCollections, setCreatorsCollections] =useState([]);


		//function to set supported collections
	const updateSupportedCollections =() =>{
		setSupportedCollections([{
			collectionUrl:'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=robohash&r=x',
			collectionName:'BoredApeYachtClub',
			items:'3123',
			activeCollaterals:'3232',
		},
		{
			collectionUrl:'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=monsterid&r=x',
			collectionName:'Test 1',
			items:'21221',
			activeCollaterals:'2133',
		},
		{
			collectionUrl:'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=monsterid&r=x',
			collectionName:'Test 2',
			items:'21221',
			activeCollaterals:'213',
		},
		{
			collectionUrl:'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=monsterid&r=x',
			collectionName:'Test 3',
			items:'2132',
			activeCollaterals:'23',
		}
		])
	}

	//function to set creators collections
	const updateCreatorsCollections =() =>{
		setCreatorsCollections([{
			collectionUrl:'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=monsterid&r=x',
			collectionName:'Test You Elippsis out',
			items:'2122',
			activeCollaterals:'21',
		},
		{
			collectionUrl:'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=monsterid&r=x',
			collectionName:'Test 1',
			items:'21221',
			activeCollaterals:'2133',
		},
		{
			collectionUrl:'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=monsterid&r=x',
			collectionName:'Test 2',
			items:'21221',
			activeCollaterals:'213',
		},
		{
			collectionUrl:'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=monsterid&r=x',
			collectionName:'Test 3',
			items:'2132',
			activeCollaterals:'23',
		},
		
		])
	}

	useEffect(() => {
		// write logic to set liuidity bridgeData
		setLiquidityBridgeData([
			{
				depositAPR: 'Transforming illiquid NFTs into liquid ERC-20 assets',
				borrowAPR: 'Interest to be prided',
				percentValue: '11.82%',
			},
			{
				depositAPR: 'Transforming illiquid NFTs into liquid ERC-20 assets',
				borrowAPR: 'Interest to be prided',
				percentValue: '11.82%',
			},
			{
				depositAPR: 'Transforming illiquid NFTs into liquid ERC-20 assets',
				borrowAPR: 'Interest to be prided',
				percentValue: '11.82%',
			},
			{
				depositAPR: 'Transforming illiquid NFTs into liquid ERC-20 assets',
				borrowAPR: 'Interest to be prided',
				percentValue: '11.82%',
			}
		]);

		//write logic to set riskFactorData

		setRiskFactorData([{
			nftIconUrl: 'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=monsterid&r=x',
			nftId: '24677',
			nftRiskFactor: '1.03',
			nftName: 'MAYC'
		},
		{
			nftIconUrl: 'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=robohash&r=x',
			nftId: '24677',
			nftRiskFactor: '1.03',
			nftName: 'KODA'
		},
		{
			nftIconUrl: 'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=identicon&r=x',
			nftId: '24677',
			nftRiskFactor: '1.04',
			nftName: 'MAYC'
		},
		{
			nftIconUrl: 'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=identicon&r=x',
			nftId: '24677',
			nftRiskFactor: '1.04',
			nftName: 'MAYC'
		},
		{
			nftIconUrl: 'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=identicon&r=x',
			nftId: '24677',
			nftRiskFactor: '1.04',
			nftName: 'MAYC'
		}]);
		updateCreatorsCollections();
		updateSupportedCollections();
	}, [])

	const depositNFTHandler = () => {
		console.log("deposit NFT Handler called");
	}

	const riskFactorButtonClickHandler = () => {
		console.log("Risk Factor Handler Called");
	}
	return <main>
		<div className='second-section'>
			<div className='nft-bridge-card container-card w-60'>
				<div className='data-card-heading'>NFT liquidity bridge</div>
				<div className='bridge-content'>
					<div className='left-panel'>
						<img src={reserveLogo}></img>
						<div className='reserve-text'>Reserve</div>
					</div>
					<div className='right-panel'>
						<div className='right-panel-header'>
							<div className='w-50'>Deposit APR</div>
							<div className='w-50'>Borrow APR</div>
							<div className='w-10'></div>
						</div>

						{liquidityBridgeData.length > 0 ? <div className='data-container'>
							{
								liquidityBridgeData.map((data) => {
									return <div className='data'>
										<div className='w-50'>{data.depositAPR}</div>
										<div className='w-50 borrow-apr'>{data.borrowAPR}</div>
										<div className='w-10 percent-text'>{data.percentValue}</div>
									</div>
								})
							}
						</div> : null
						}
						<div className='app-flex justify-content-center'>
							<AppButton text={'Deposit NFTs'} minWidth={'45%'} variant={'primary'} clickHandler={depositNFTHandler}></AppButton>
						</div>
					</div>
				</div>
			</div>
			<div className='risk-factor container-card w-40'>
				<div className='data-card-heading'>Risk factor</div>
				{
					riskFactorData.length > 0 ? <div className='risk-factor-content'>
						{riskFactorData.map((data) => {
							return <div className='row-data'>
								<div className='nft-details'>
									<img src={data.nftIconUrl}></img>
									<div className='info'>
										<div className='name'>{data.nftName}</div>
										<div className='risk-factor-id'>#{data.nftId}</div>
									</div>
								</div>
								<div className='risk-factor-data'>
									<div className='risk-factor-heading'> Risk factor</div>
									<div className='risk-factor-value'><div class="black-dot"></div>{data.nftRiskFactor}</div>
								</div>
							</div>
						})}
					</div> : null
				}
				<div className='app-flex justify-content-center'>
					<AppButton text={'Risk factor'} minWidth={'70%'} variant={'primary'} clickHandler={riskFactorButtonClickHandler}></AppButton></div>
			</div>
		</div>
		<div className='collection-sections'>
		<Collections title={'Supported Collections'} data={supportedCollections}></Collections>
		<Collections title={'Creators Collections'} data={creatorsCollections}></Collections>
		</div>
	</main>
}
