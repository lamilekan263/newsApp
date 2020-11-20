import { Text } from '@chakra-ui/react'
import React from 'react'

const NewsCategory = ({category}) => {
    return (
      <div
        style={{ paddingRight: "10px" }}
       
      >
        <Text>{category}</Text>
      </div>
    );
}

export default NewsCategory
