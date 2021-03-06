import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop-selector';


import CollectionPreview from '../../components/preview-collection/preview-collection.component';

import './collection-overview.styles.scss';

const CollectionOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map( ({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
}); 

export default connect(mapStateToProps)(CollectionOverview);