import Modal from 'react-modal';
import './modal.css'
import React from 'react';

const customStyles = {
    overlay: {
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
};

Modal.setAppElement('#root');

interface CustomModalProps {
    contentRef?: React.RefCallback<HTMLElement>;
    isOpen: boolean;
    onOpen?: () => void;
    onHidden?: () => void;
    onClose: () => void;
    contentLabel: string;
    children: React.ReactNode;
}


const CustomModal: React.FC<CustomModalProps> = ({ contentRef, isOpen, onOpen, onHidden, onClose, contentLabel, children }) => {
    return (
        <Modal
            contentRef={contentRef}
            isOpen={isOpen}
            onAfterOpen={onOpen}
            onRequestClose={onClose}
            onAfterClose={onHidden}
            style={customStyles}
            className="modal-custom"
            shouldCloseOnOverlayClick={false}
            shouldReturnFocusAfterClose={true}
            contentLabel={contentLabel}
        >
            {children}
        </Modal>
    );
};

interface CustomModalContentProps {
    contentRef: () => void;
    isOpen: boolean;
    onOpen?: () => void;
    onHidden?: () => void;
    onClose: () => void;
    contentLabel: string;
    titleHeader: string;
    body: React.ReactNode;
    footer: React.ReactNode;
}

export const CustomModalContent: React.FC<CustomModalContentProps> = ({ contentRef, isOpen, onOpen, onHidden, onClose, contentLabel, titleHeader, body, footer }) => {
    return (
        <CustomModal
            contentRef={contentRef}
            isOpen={isOpen}
            onOpen={onOpen}
            onHidden={onHidden}
            onClose={onClose}
            contentLabel={contentLabel}
        >
            <div className="header-cm">
                <p className='m-0 h6'>{titleHeader}</p>
                <button type="button"
                    className='close'
                    onClick={onClose}>
                    <span><i className="bi bi-x-circle-fill"></i></span>
                </button>
            </div>
            <div className="body-cm">
                {body}
            </div>
            <div className="footer-cm">
                {footer}
            </div>
        </CustomModal>
    );
}

interface CustomModalFormProps {
    contentRef?: (ref: any) => void;
    isOpen: boolean;
    onOpen?: () => void;
    onHidden?: () => void;
    onClose: () => void;
    contentLabel: string;
    titleHeader: string;
    onSubmit: () => void;
    body: React.ReactNode;
    footer: React.ReactNode;
}

export const CustomModalForm: React.FC<CustomModalFormProps> = ({ contentRef, isOpen, onOpen, onHidden, onClose, contentLabel, onSubmit, titleHeader, body, footer }) => {
    return (
        <CustomModal
            contentRef={contentRef}
            isOpen={isOpen}
            onOpen={onOpen}
            onHidden={onHidden}
            onClose={onClose}
            contentLabel={contentLabel}
        >
            <form
                className='flex flex-col h-full'
                onSubmit={(event) => {
                    event.preventDefault();
                    onSubmit();
                }}
            // onKeyDown={(event) => {
            //     if (event.target.role === 'float') {
            //         keyNumberFloat(event, () => {
            //             onSubmit();
            //         });
            //     }

            //     if (event.target.role === 'integer') {
            //         keyNumberInteger(event, () => {
            //             onSubmit();
            //         });
            //     }

            //     if (event.target.role === 'phone') {
            //         keyNumberPhone(event, () => {
            //             onSubmit();
            //         });
            //     }
            // }}
            >
                <div className="header-cm">
                    <p className='m-0 h6'>{titleHeader}</p>
                    <button type="button"
                        onClick={onClose}>
                        <span>
                            <i className="bi bi-x-circle-fill text-2xl"></i>
                        </span>
                    </button>
                </div>
                <div className="body-cm">
                    {body}
                </div>
                <div className="footer-cm">
                    {footer}
                </div>
            </form>
        </CustomModal>
    );
}
export default CustomModal;