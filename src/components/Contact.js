import { React, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env
  const formRef = useRef()
  
  function onSubmit(e) {
    e.preventDefault()
    emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, formRef.current, REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
  }

  return (
    <div>
      <div class="text-bg-warning p-3 mt-3">Solicita tu Cotización</div>
      <Container>
        <Form ref={formRef} onSubmit={onSubmit}>
          <div class="row align-items-stretch mb-3 mt-3">
            <h3>Platícanos de tu proyecto para asesorarte o describe el producto que deseas cotizar.</h3>
          </div>
          <div class="row align-items-stretch mb-3 mt-3">
            <div class="col-md-6">
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="name" type="text" placeholder="Nombre:" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control name="phone" type="tel" placeholder="Teléfono:" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control name="email" type="email" placeholder="Correo electrónico:" required />
              </Form.Group>
            </div>
            <div class="col-md-6">
              <Form.Group>
                <Form.Label>Mensaje</Form.Label>
                <Form.Control name="message" as="textarea" placeholder="Deja tu mensaje aquí" style={{ height: '100px' }} required />
              </Form.Group>
            </div>
          </div>
          <div class="row align-items-stretch mb-3 mt-3">
            <div class="col-md-6">
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  )
}
