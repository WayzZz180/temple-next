import { useState } from 'react';
import Button from '@/components/common/button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import 'bootstrap/dist/css/bootstrap.min.css' 

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button text={name} btnColor="black" link={handleShow} className="me-2" />
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function Example(){
  return (
    <div className='nowrap'>
      {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name="加入購物車" />
      ))}
    </div>
  );
}

