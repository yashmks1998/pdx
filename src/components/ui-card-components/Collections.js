import '../../styles/collections-styles.scss';


export default function Collections(props){
    const {title,data}=props;
    

    return <div className='collections-wrapper'>
				<div className='collections-heading'>
					<div className='collections-title'>
                        {title}
					</div>
					<div className='elippsis'>...</div>
				</div>
                <div className="collections-table mid-grey-card card-padding">
                    <div className="table-header app-flex">
                    <div className='w-40'>Collection</div>
                    <div  className='w-20'>Items</div>
                    <div  className='w-40'>Active collaterals</div>
                    </div>
                    <div className="table-data">
                        {data.length>0 &&
                        data.map((collection)=>{
                            return  <div className="table-row app-flex grey-bottom-border">
                            <div className="collection-details app-flex w-40 grey-right-border"><div className="icon">
                                 <img src={collection.collectionUrl}></img>
                                 </div>
                                 <div className="name">{collection.collectionName}</div>
                                 </div>
                            <div className="items w-20 grey-right-border" >{collection.items}</div>
                            <div className="active-collaterals w-40 grey-right-border">{collection.activeCollaterals}</div>
                        </div>
                        })
                   
}
                    </div>
                </div>
			</div>
}