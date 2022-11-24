import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';

export const Home = () => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="https://gruasviajerasem.com/wp-content/uploads/2020/01/Gr%C3%BAas-viajeras-portada-2-NUEVA-1.jpg" />
      </Card>
      <div class="text-bg-warning p-3">Servicios para Grúas Viajeras y Polipastos</div>
      <Container>
        <Card>
          <Card.Body>
            <div class="row align-items-stretch mb-3">
              <Card.Text>
                <p>Somos una empresa especializada en diseño, fabricación, montaje, puesta en marcha de Grúas Viajeras Monopuente,  Grúas Viajeras Bipuente, Grúa Pórtico y Grúa Radial con personal altamente capacitado y actualizado en temas de ingeniería, producción, innovación tecnológica y logística. Nuestra planta se ubica en la ciudad de Querétaro, punto estratégico industrial que nos permite  brindar atención y servicio en todo México.</p>
                <p>Lo más importante para nuestra empresa es la satisfacción de nuestros clientes. Es por ello que nuestro compromiso está enfocado en ofrecer productos y servicios que cumplan y superen sus expectativas.</p>
              </Card.Text>
            </div>
            <div class="row align-items-stretch mb-3">
              <div class="col-md-6">
                <Card.Text>
                  <h3>Nuestro Compromiso</h3>
                  <p> Lo más importante para nuestra empresa es la satisfacción de nuestros clientes. Es por ello que nuestro compromiso está enfocado en ofrecer productos y servicios que cumplan y superen sus expectativas.</p>
                </Card.Text>
              </div>
              <div class="col-md-6">
                <Card.Img variant="top" src="https://www.munckcranes.com.mx/imagenes/gruas/landing/gruas-munck-portico-01.jpg" />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <div class="text-bg-warning p-3">Warning with contrasting color</div>
      <Container class="mt-3 mb-4">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="https://www.konecranes.com/sites/default/files/styles/5_7_small/public/2018-09/medium_konecranes_waste_to_energy_beinheim_france_scaldis_2012_008.jpg?itok=qmrB0Xho" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.munckcranes.com.mx/imagenes/gruas/landing/gruas-munck-portico-01.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://gruasviajerasem.com/wp-content/uploads/2020/01/Gr%C3%BAas-viajeras-portada-2-NUEVA-1.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  )
}
