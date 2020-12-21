import React from 'react'
import { Alert } from 'react-bootstrap'

const Notification = ({notification}) => {
    return (
      notification?<Alert variant="danger" >
        <h4 style={{textAlign: 'center'}}>{notification}</h4>
      </Alert>:null
    )
}

export default Notification