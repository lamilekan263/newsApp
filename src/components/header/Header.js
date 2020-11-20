import React from 'react'
import moment from 'moment'
import { Text,Heading, Container } from "@chakra-ui/react";
import CategoryList from '../categories/CategoryList';
const Header = () => {
    return (
      <div className="header" style ={{  backgroundColor: '#111111',borderBottom : '1px solid white' ,color: '#918c98', paddingTop:'20px', paddingBottom:'20px' }}>
        <div className="header__displayTime">
          <Container centerContent ={false}>
            <Heading>Today</Heading>
                    <Text>{moment().format("dddd DD, MMMM").toUpperCase()}</Text>
                    <CategoryList />
          </Container>
        </div>
      </div>
    );
}

export default Header
