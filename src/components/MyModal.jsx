import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import React from "react";
import '../App.css'

export default function MyModal(props) {

    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body>
                <div className='btn-wrapper-end'>
                    <CloseButton onClick={props.onHide}/>
                </div>

                <FactCheckOutlinedIcon className={'FactCheckOut'} sx={{fontSize: 80}}/>


                <div className={'TextInfo'}>
                    <h4>{props.name}</h4>
                    <p>
                        {props.info}
                    </p>
                    <p>
                        {props.day} {props.month}, {props.hour}, {props.year}
                    </p>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-dark'}>View details</Button>
                <Button variant={"dark"}>Submit</Button>
            </Modal.Footer>
        </Modal>);
}
