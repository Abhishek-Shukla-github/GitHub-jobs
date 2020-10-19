import React from 'react';
import "./styles/loader.css"

export default function Loader({loading,jobs}) {
    return (
        <div>
            {loading && !jobs.length &&
                <div className="row cf loader">
                  <div className="three col">
                    <div className="loader" id="loader-5">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>}
        </div>
    )
}

