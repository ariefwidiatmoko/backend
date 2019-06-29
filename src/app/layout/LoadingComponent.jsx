import React from 'react'
import {Loader} from 'semantic-ui-react'

const LoadingComponent = ({inverted = true}) => {
    return (
        <Loader active={true} inline='centered' content='Loading...' />
    )
}

export default LoadingComponent
