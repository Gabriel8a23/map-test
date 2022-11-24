import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export const Contact = () => {
  return (
    <div>
      <div class="text-bg-warning p-3 mt-3">Solicita tu Cotización</div>
      <Container>
        <Form>
          <div class="row align-items-stretch mb-3 mt-3">
            <h3>Platícanos de tu proyecto para asesorarte o describe el producto que deseas cotizar.</h3>
          </div>
          <div class="row align-items-stretch mb-3 mt-3">
            <div class="col-md-6">
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre:" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="tel" placeholder="Teléfono:" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Correo electrónico:" />
              </Form.Group>
            </div>
            <div class="col-md-6">
              <Form.Group>
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" placeholder="Deja tu mensaje aquí" style={{ height: '100px' }} />
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
