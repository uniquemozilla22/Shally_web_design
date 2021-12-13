
import React, { useState } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';


const App= ()=> {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <div className="App">
    <MDBBtn onClick={()=>toggleShow}>LAUNCH DEMO MODAL</MDBBtn>
    <MDBModal show={basicModal} setShow={()=>setBasicModal}>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Modal title</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>...</MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleShow}>
              Close
            </MDBBtn>
            <MDBBtn>Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </div>
  );
}



export default App