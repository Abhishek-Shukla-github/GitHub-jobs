import React, { useState } from 'react'
import ReactMarkdown from "react-markdown"; 
import { Card, Button, Badge, Collapse } from "react-bootstrap";


export default function Job({ job }) {
    const [viewDetail,setViewDetail]=useState(false);
    return (
        <Card style={{margin:"30px"}}>
            <Card.Body style={{backgroundColor:"#e9ebe4"}}>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {job.title} - <span className="text-muted">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted m-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge variant="secondary m-1">{job.type}</Badge>
                        <Badge variant="secondary m-1">{job.location}</Badge>
                        <div style={{wordBreak:"break-all"}}>
                            How to apply:- <ReactMarkdown escapeHtml={false} i source={job.how_to_apply} />
                        </div>
                    </div>
                    <img className="d-none d-md-block" height="50" src={job.company_logo} />
                </div>
            <Card.Text>
                <Button variant="primary" onClick={
                    ()=>setViewDetail(!viewDetail)
                }>
                    {viewDetail ? "Hide Details" : "View Details"}
                </Button>
            </Card.Text>
            <Collapse in={viewDetail}>
                <div className="mt-4">
                    <ReactMarkdown escapeHtml={false} source={job.description} />
                </div>
            </Collapse>
            </Card.Body>
        </Card>
    )
}
