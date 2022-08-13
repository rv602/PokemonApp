import React from 'react'

function Pagination(props) {
  return (
    <>
        {props.gotoPrevPage && <button onClick={props.gotoPrevPage}>Previous</button>}
        {props.gotoNextPage && <button onClick={props.gotoNextPage}>Next</button>}
    </>
  )
}

export default Pagination
