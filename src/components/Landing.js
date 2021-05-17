import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

function Landing () {
  return (
    <Container>
      <Col>
        <Row>
          <h1>Next.js React Bootstrap</h1>
          <Alert variant='success'>
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              Aww yeah, you successfully read this important alert message. This example
              text is going to run a bit longer so that you can see how spacing within an
              alert works with this kind of content.
            </p>
            <hr />
            <p className='mb-0'>
              Whenever you need to, be sure to use margin utilities to keep things nice
              and tidy.
            </p>
          </Alert>
        </Row>
      </Col>
    </Container>
  )
}

export default Landing
