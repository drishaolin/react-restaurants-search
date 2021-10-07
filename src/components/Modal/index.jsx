import { useEffect } from "react";
import Portal from "./Portal";
import { Dialog, Overlay } from "./Portal/styles";

export default function Modal({ children, isOpen, onClose }) {
    useEffect(() => {
        if (!isOpen) return;

        function onEsc(e) {
            if (e.key === "Escape") {
                onClose();
            }
        }
        window.addEventListener('keydown', onEsc);

        return () => {
            window.removeEventListener('keydown', onEsc);
        }
    }, [isOpen, onClose]);

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
