import React from 'react'

export default function Error({ error, jobs }) {
    return (
        <div>
            {error && <div className="text-center d-flex align-items-center">
            <img src="https://media1.tenor.com/images/f120d1754c380a11c86ecb4e717f0613/tenor.gif" />
            <h1 className="text-danger">Error :( ...try refreshing</h1>
          </div>}
        </div>
    )
}
