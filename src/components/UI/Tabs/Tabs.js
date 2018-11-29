import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab/Tab';
import styled from 'styled-components'

const TabList = styled.div`
    padding: 0 20px;
    display: flex;
    cursor: pointer;
    border-bottom: 1px solid #eaeaea;
`

const TabContentStyles = styled.div`
  padding: 30px;
`

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }


  render() {
    const { props: { children, activeTab, onClickTabItem }} = this;

    return (
      <div className="tabs">
        <TabList>
          {children.map((child) => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={() => onClickTabItem(label)}
              />
            );
          })}
        </TabList>
        <TabContentStyles>
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </TabContentStyles>
      </div>
    );
  }
}

export default Tabs;