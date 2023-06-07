import React from 'react';
import { Helmet } from 'react-helmet-async';

const HeadTag = (props) => {
    const {pageTitle} = props;
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{`Megamoves :: ${pageTitle}`}</title>
        </Helmet>
    )
}

export default HeadTag;



