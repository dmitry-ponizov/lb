import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const ListItem = styled.div`
    padding: 20px 10px;
    font-family: Muli;
    font-size: 14px;
    font-weight: 600;
    margin: 0 10px;
    &:first-child {
      margin-left: 0px;
    }
    letter-spacing: 0.3px;
    border-bottom: ${props => props.active ? '2px solid #e36854': '2px solid transparent' };
    color: ${props => props.active ? '#000': '#969696' };
`

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {onClick, props: {activeTab, label},} = this;

    return (
      <ListItem active={activeTab === label} onClick={onClick} >
        {label}
      </ListItem>
    );
  }
}

export default Tab;