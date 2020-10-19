import React from 'react';
import { Pagination } from "react-bootstrap";



export default function JobsPagination({page,setPage,hasNextPage}) {
    //Updating page helper function
    function adjustPage(amount) {
        setPage(prevPage=>prevPage+amount)
    }
    return (
        <div className="row">
        <div className="col-md-4 offset-md-2">
            <Pagination>
                {page > 2 && <Pagination.Prev onClick={() => {adjustPage(-1)}}/>}
                {page > 2 && <Pagination.Item onClick={() => {setPage(1)}}>1</Pagination.Item>}
                {page >2 && <Pagination.Ellipsis  />}
                {page===2 && <Pagination.Item>{page - 1}</Pagination.Item>}
                <Pagination.Item className="active" onClick={() => {setPage(page)}}>{page}</Pagination.Item>
                {hasNextPage && < Pagination.Item onClick={() => {adjustPage(+1)}}>{page + 1}</Pagination.Item>}
                {hasNextPage && <Pagination.Next onClick={() => {adjustPage(+1)}}/>}
            </Pagination>
        </div>
        </div>
    )
}
