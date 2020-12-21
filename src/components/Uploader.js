/* eslint-disable array-callback-return */
import React, { useRef } from 'react'

const Uploader = ({ setImages, setNotification, images }) => {
  const inputRef = useRef()

  const isInArray = Obj => {
    return images.find(img => img.name === Obj.name) ? true : false
  }

  const onChange = () => {
    if (inputRef.current.files) {
      const files = inputRef.current.files
      Object.values(files).map(img => {
        const newImg = {
          name: img.name,
          url: URL.createObjectURL(img),
        }
        if (!isInArray(newImg)) {
          setImages(currentState => [...currentState, newImg])
        } else {
          setNotification(
            'validation error... image with this name arleady exists'
          )
          setTimeout(() => {
            setNotification('')
          }, 3000)
        }
      })
    }
  }

  return (
    <input
      ref={inputRef}
      type="file"
      onChange={onChange}
      onClick={() => {
        inputRef.current.value = ''
      }}
      multiple
    />
  )
}

export default Uploader