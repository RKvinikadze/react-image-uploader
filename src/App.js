import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Uploader from './components/Uploader'
import Notification from './components/Notification'
import Images from './components/Images'

const App = () => {
  const [images, setImages] = useState([])
  const [notification, setNotification] = useState('')

  return (
    <Container fluid>
      {<Notification notification={notification} />}
      <Uploader
        setImages={setImages}
        setNotification={setNotification}
        images={images}
      />
      <Images images={images} setImages={setImages} />
    </Container>
  )
}

export default App
