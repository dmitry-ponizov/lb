import React, { Component } from 'react'
import styled from 'styled-components'

const Table = styled.table`
  th {
    font-family: Muli;
    font-size: 14px;
    letter-spacing: 0.3px;
    color: #000000;
    padding: 10px 15px;
  }
  tbody {
    td {
      font-family: Muli;
      font-size: 14px;
      letter-spacing: 0.3px;
      color: #969696;
      padding: 10px 15px;
    }
  }
`

class Domains extends Component {

  descriptionHandler = (desc) => {
    const description = JSON.parse(desc)
    return description.renewAuto ? 'Yes' : 'No'
  }
  render() {
    
    return (
      <div>
        <Table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Domain Name</th>
                <th scope="col">Expires</th>
                <th scope="col">Autorenew</th>
                <th scope="col">Status</th>
                <th scope="col">Order</th>
                <th scope="col">Settings</th>
                </tr>
            </thead>
            <tbody>
                {this.props.domains.map((domain, index) => (
                <tr key={index  }>
                    <td>{ domain.name }</td>
                    <td>{ domain.expiration_date }</td>
                    <td>{ this.descriptionHandler(domain.order.description)}</td>
                    <td>{ domain.order.payment_status ? 'Paid' : 'No Paid'}</td>
                    <td>{ domain.order_id }</td>
                    <td>Open Payments</td>
                </tr>
                ))}
            </tbody>
            </Table>
      </div>
    )
  }
}

export default Domains;