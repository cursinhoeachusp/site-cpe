import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

function Home () {
  return (
    <Container style={{ border: 'solid 3px red' }}>
      <Col>
        <Row>
          <h1>Home</h1>
          <Alert variant='success'>
            <Alert.Heading>Hey, nice to see you at home page</Alert.Heading>
          </Alert>
        </Row>
      </Col>
    </Container>
  )
}

export default Home
