// core
import React from 'react';

// styles
import styles from './Modal.module.scss';

export const Modal = ({modal, setModal}) => {

    const closeModal = () => {
        setModal(!modal);
    };

    return (
        modal && <div className={styles.modalWrapper}>
            <div className={styles.modal}>
                <span className={styles.close} onClick={() => closeModal()}>x</span>
                <h3>Contact Us</h3>
                <div className={styles.modalInner}>
                    <form action="">
                        <div className={styles.modalInput}>
                            <label htmlFor="name">Name</label>
                            <input id='name' type="text" name='Name'/>
                        </div>
                        <div className={styles.modalInput}>
                            <label htmlFor="organization">Organization/Company</label>
                            <input id='organization' type="text" name='Organization' required/>
                        </div>
                        <div className={styles.modalInput}>
                            <label htmlFor="email">Email</label>
                            <input id='email' type="email" name='Email' required/>
                        </div>
                        <div className={styles.modalInput}>
                            <label htmlFor="phone">Phone</label>
                            <input id='phone' type="phone" name='Phone' required/>
                        </div>
                        <div className={styles.modalInput}>
                            <label htmlFor="massage">How can we help you?</label>
                            <textarea name="Massage" id="massage" cols="90" rows="10"/>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
