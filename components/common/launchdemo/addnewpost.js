import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import styles from './addnewpost.module.sass'
import ShapeExample from '@/components/common/forumlogo/userlogo'

function AddNewPost({ showModal, handleCloseModal }) {
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      dialogClassName={`${styles.customdialog}`}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <ShapeExample />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          取消發文
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          發文
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddNewPost
