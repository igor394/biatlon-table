import {Form, Row, Col} from 'react-bootstrap';

export default function Search({searchMember}) {
    return (
        <Form style={{paddingTop: '20px'}}>
            <Form.Group as={Row} controlId="">
                <Form.Label column sm="2">
                    Search for athletes:
                </Form.Label>
                <Col sm="4">
                    <Form.Control onChange={searchMember} type="text" placeholder="enter part of the member's name"/>
                </Col>
            </Form.Group>
        </Form>
    )
}
