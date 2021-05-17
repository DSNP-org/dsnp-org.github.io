import React from 'react'
import PropTypes from 'prop-types'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Main index page (home page)
*
* Shows intro information.
*
*/
const Index = ({ location }) => (
    <>
        <MetaData location={location} />
        <Layout isHome={true}>
            <div className="container">
                    This is the index!
            </div>
        </Layout>
    </>
)

Index.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default Index
