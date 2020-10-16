import React from 'react'
import {Card,Button, Badge} from "react-bootstrap"

export default function Job({job}) {
    return (
        <Card>
            <Card.Body>
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
                    </div>
                </div>
            </Card.Body>
            {/* //{console.log(job)} */}
        </Card>
    )
}
