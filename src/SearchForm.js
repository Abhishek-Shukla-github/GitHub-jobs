import React from 'react';
import { Form,Col } from "react-bootstrap";


export default function SearchForm({params,onParamChange}) {
    return (
        <Form className="mb-4 ">
            <Form.Row className="align-items-end">
                <Form.Group as={Col} >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" onChange={onParamChange} value={params.description} name="description" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" onChange={onParamChange} value={params.location} name="location" />
                </Form.Group>
                <Form.Group className="ml-2" xs="auto">
                    <Form.Check className="mb-2" onChange={onParamChange} value={params.full_time} id="full-time" name="full-time" label="Only Full Time" type="checkbox"/>
                </Form.Group>
            </Form.Row>
       </Form>
    )
}
