import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import styles from './addnewpost.module.sass'

function AddNewPost({ showModal, handleCloseModal }) {
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      dialogClassName={`${styles.customdialog}`}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddNewPost
