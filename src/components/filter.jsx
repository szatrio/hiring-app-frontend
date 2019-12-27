import React, { Component } from 'react'
import { Row, Col, InputGroup, ButtonGroup, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap'


export default class DetailPage extends Component {

    render(){
      return(
        <Row className="justify-content-center text-center mt-3">
          <Col md='5' className="pr-5">
          {/* <h4><Badge variant='success' className="pl-5 pr-5 pt-2 pb-2"> Total Data : {this.props.detail.allData} | Data Showed <Form.Control size="sm" style={{width: '30px'}} type="email" placeholder={this.props.detail.dataShowed} /></Badge></h4> */}
          {/* <InputGroup className="mb-3 ml-5" style={{width:'480px'}}>
            <InputGroup.Prepend className="ml-5">
              <InputGroup.Text>Total data</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl defaultValue={this.props.detail.allData} type='number' style={{width:'50px'}} disabled/>
            <InputGroup.Prepend className="">
              <InputGroup.Text>Limit</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl onChange={(e) => this.props.limit(e.target.value)} defaultValue={this.props.detail.limit} type='number' min="1" className=' mr-5' />
          </InputGroup>
          </Col>
          <Col md='2'>
          <ButtonGroup>
            <Button variant="outline-dark" onClick={() => this.props.getPrevClicked()}>Prev</Button>
            <Button variant="outline-dark" className="pr-5 pl-5" disabled>{this.props.detail.page}/{this.props.detail.allPage}</Button>
            <Button variant="outline-dark" onClick={() => this.props.getNextClicked()}>Next</Button>
          </ButtonGroup>
          </Col> 
          <Col md='5'>
            <InputGroup className="mb-3 pl-5 pr-5">
              <DropdownButton as={InputGroup.Prepend} className="pl-5" variant="primary" title="Sort By">
                <Dropdown.Item onClick={() => this.props.sortBy('name')}>name</Dropdown.Item>
                <Dropdown.Item onClick={() => this.props.sortBy('skill')}>skill</Dropdown.Item>
                <Dropdown.Item onClick={() => this.props.sortBy('date_updated')}>date updated</Dropdown.Item>
              </DropdownButton>
              <FormControl className="" aria-describedby="basic-addon1" defaultValue={this.props.detail.sortBy} disabled/>
              <DropdownButton as={InputGroup.Append} className="pr-5" variant="primary" title={this.props.orderState}>
                <Dropdown.Item onClick={() => this.props.orderBy('ASC')}>ASC</Dropdown.Item>
                <Dropdown.Item onClick={() => this.props.orderBy('DESC')}>DESC</Dropdown.Item>
              </DropdownButton>
            </InputGroup> */}
          </Col>
        </Row>
      )
    }

}