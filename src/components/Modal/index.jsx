import { useEffect } from "react";
import Portal from "./Portal";
import { Dialog, Overlay } from "./Portal/styles";

export default function Modal({ children, isOpen, onClose }) {
    
    useEffect(() => {
        function onEsc(e) {
            if(e.keyCode === 27) onClose();
        }
        window.addEventListener('keydown', onEsc);

        return () => {
            window.removeEventListener('keydown', onEsc);
        }
    }, [onClose]);

    if(!isOpen) return null;

    function onOverlayClick() {
        onClose();
    }

    function onDialogClick(e) {
        e.stopPropagation(); //para evitar que o modal feche ao clicar no dialog, devido ao efeito de bubbling
    }

    return (
        <Portal>
            <Overlay onClick={onOverlayClick}>
                <Dialog onClick={onDialogClick}>{children}</Dialog>
            </Overlay>
        </Portal>
    );
}
