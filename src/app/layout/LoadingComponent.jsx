import React from 'react'
import {Loader} from 'semantic-ui-react'

const LoadingComponent = ({inverted = true, inline}) => {
    return (
        <Loader active={true} inline={inline} content='Loading...' style={{marginTop: 58}}/>
    )
}

export default LoadingComponent
