import React, { Component } from 'react'
import { Form, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../styles/header.css'

export default class SearchField extends Component {

  sendData = (e) =>{ 
    this.props.getDataFromSearch(e.target.value)
  }

  render() {
    return(
      <>
      <Form className="mr-auto">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl onChange={this.sendData} type="text" placeholder="Search by Name" id="searchbar" />
        </InputGroup>
      </Form>
      </>
    )
  }
}