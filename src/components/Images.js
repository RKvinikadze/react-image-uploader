/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

const Images = ({ images, setImages }) => {
  const removeImage = image => {
    setImages(images.filter(img => img.name !== image.name))
  }

  return (
    <Row
      lg={5}
      md={4}
      sm={3}
      xs={2}
      style={{ marginTop: '20px' }}
    >
      {images.map(img => {
        return (
          <Col key={img.name}>
            <Card>
              <Card.Img variant="top" src={img.url} />
              <Card.Footer>
                <Button variant="danger" onClick={() => removeImage(img)}>
                  Remove
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default Images
