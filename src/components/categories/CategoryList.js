import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NewsCategory from '../newsCategory/NewsCategory'
import { newsAPiFetch } from '../redux/newsData/newsData.Action'


import './CategoryList.css'
const CategoryList = ({ fetchNews }) => {
    useEffect(() => {
      fetchNews(categories[0]);
    }, [fetchNews]);


    const categories = [
        "world","nation","technology","business","entertainment","health","science","sports"
    ]


    return (
        <div className="categorylist">
            {
                categories.map(category => {
                
                    return (
                      <div
                        className="category"
                        key={category}
                        onClick={(e) => {
                          e.preventDefault();
                          fetchNews(category);
                        }}
                      >
                        <NewsCategory
                          category={
                            category[0].toUpperCase() + category.slice(1).toLowerCase()
                          }
                        />
                      </div>
                    );
                })
            }
        </div>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
      fetchNews: (newsdata) => dispatch(newsAPiFetch(newsdata)),
    };
}

export default connect(null, mapDispatchToProps)(CategoryList)
