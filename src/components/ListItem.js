import React from 'react'
import PropTypes from 'prop-types'
import { STATUS } from "../types"

const ListItem = ({ onClick, status, name, disable }) => (
  <li
    className={"collection-item "+
               "collection-item--"+status.toLowerCase() + 
               (disable===true?" collection-item--disable":"") }
    onClick={disable===true || status===STATUS.DONE ? null : onClick}
  >
    {name}
    <i className="material-icons right">{status.toLowerCase()}</i>
  </li>
)

ListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired
}

export default ListItem
