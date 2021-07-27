import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Tests = () => {
    const [modalShow, setModalShow] = useState(false);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    return (
        <>
            <h1>Tests</h1>
            <h2>
                Modal Bootstrap
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
            </h2>
            <div id="exampleModal" className="modal fade" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
            <h2>
                Modal React-Bootstrap
                <Button variant="primary" onClick={handleModalShow}>
                    Launch demo modal
                </Button>
            </h2>
            <Modal
                onHide={handleModalClose}
                show={modalShow}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal title
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleModalClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Tests;