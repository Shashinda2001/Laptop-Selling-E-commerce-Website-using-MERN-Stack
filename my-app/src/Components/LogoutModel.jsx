import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function LogoutModel() {

    
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const loggingOut = async (event) => {
        event.preventDefault(); 
    
        const url = "http://localhost:4000/users/logout";
        const token = Cookies.get('token');
    
        try {
          const response = await axios.post(url, {}, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
          if (response.status === 200) {
            Cookies.remove('token'); 
            navigate('/LoginForm'); // Redirect to the login page
          } else {
            throw new Error('Logout failed');
          }
        } catch (error) {
          console.error('Error logging out:', error);
        }
      };

    return ( 
        <div className="my-3">
             <Button variant="danger"   onClick={handleShow}>Logout</Button>
             <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Are you sure you want to log out? Logging out
         will end your current session, and any unsaved progress or data will be lost. Please confirm if you wish to proceed.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={loggingOut}>Yes Logout</Button>
        </Modal.Footer>
      </Modal>

        </div>
     );
}

export default LogoutModel;