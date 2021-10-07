import ReactDOM from 'react-dom';

export default function Portal( {children}) {
    const portal = document.getElementById('modal-root');
    return (
        ReactDOM.createPortal(children, portal)
    );
}
