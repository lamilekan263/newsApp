import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'


const NewsCard = ({ news }) => {
    return (
      <div style={{ marginTop: "20px" }}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">{news.title}</Heading>
          <Text mt={4}>Source: {news.source.name} </Text>
          <span>
            <ExternalLinkIcon />
          </span>
        </Box>
      </div>
    );
}

export default NewsCard
