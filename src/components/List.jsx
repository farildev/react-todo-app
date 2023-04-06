import React from 'react'

function List({title , id , handleDelete}) {
  return (
    <div className="col-12 mt-3">
            <div className="alert alert-primary">
              <div className="row">
                <div className="col-11">
                  <p>{title}</p>
                </div>
                <div className="col-1">
                  <div className="btn-group">
                    <div className="btn btn-danger" onClick={() => handleDelete(id)}>X</div>
                  </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default List