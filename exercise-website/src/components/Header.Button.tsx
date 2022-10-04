import React from 'react'
import { Button } from 'semantic-ui-react'

const HeaderButton = (props) => {
    return (       
        <Button className="button">
            <span className="your-card">{props.title}</span>
        </Button>
    )
}
export default HeaderButton