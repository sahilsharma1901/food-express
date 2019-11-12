import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';


const Modal= (props) => (
    <React.Fragment>
        <Backdrop show={props.show} backdropClicked={props.modalClosed}/>
    <div className={styles.Modal} style={{
        transform:props.show ? 'translateX(0)' : 'translateX(-100vw)',
        opacity:props.show ? '1' : '0'
    }}>
        {props.children}
    </div>  
    </React.Fragment>
    
);

export default Modal;