import {  Container,  SimpleGrid,  } from '@chakra-ui/react';
import React from 'react'
import { connect } from 'react-redux'
import NewsCard from '../newsCard/NewsCard';
import SkeletonCom from '../skeleton/SkeletonCom';

const News = ({loading, newsState}) => {
   
    return (
        
      <div>
        <Container>
         
                {
                    loading ? <SkeletonCom /> : <SimpleGrid>
                        {newsState.map(news => {
                            return (
                              <div key={news.title}>
                                <a
                                  href={news.source.url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <NewsCard news={news} />
                                </a>
                              </div>
                            );
                        })}
                    </SimpleGrid>
            }
 
        </Container>
      </div>
    );
}

const mapStateToProps = state => {
   
    return {
        newsState: state.news,
        loading : state.loading
    };
}

export default connect(mapStateToProps)(News)


