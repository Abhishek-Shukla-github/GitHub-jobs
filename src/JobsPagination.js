import React from 'react'
import { Pagination } from 'react-bootstrap'



export default function JobsPagination({page,setPage,hasNextPage}) {
    return (
        <div>
            <Pagination>
                {page>2 && <Pagination.Prev />}
                {page > 2 && <Pagination.Item>1</Pagination.Item>}
                {page >2 && <Pagination.Ellipsis  />}
                {page===2 && <Pagination.Item>{page - 1}</Pagination.Item>}
                <Pagination.Item className="active">{page}</Pagination.Item>
                {hasNextPage && < Pagination.Item>{page + 1}</Pagination.Item>}
                {hasNextPage && <Pagination.Next />}
            </Pagination>
        </div>
    )
}
