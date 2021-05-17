import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

function ContactUs () {
  return (
    <Container>
      <Col>
        <Row>
          <h1>ContactUs</h1>
          <Alert variant='success'>
            <Alert.Heading>Hey, nice to see you at contact us page</Alert.Heading>
          </Alert>
        </Row>
      </Col>
    </Container>
  )
}

export default ContactUs
