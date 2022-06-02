import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import ReactPaginate from 'react-paginate';





const {Text, Title} = Typography;
const {Option} = Select;
const demoImage = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const OldNews = (props) => {

    function scrollup() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
            });
      }

    const [oldData, setOldData] = useState([]);

    //pagination
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 9;
    const pageVisited = pageNumber * newsPerPage;


    

    const getOldData = () => {
        axios.get('http://localhost:9000/news')
            .then(response => {
            console.log('From local DB : ',response.data);
            const localData = response.data;            
            setOldData(localData)
            });
        scrollup();
    };
          
    useEffect( () => getOldData(), []);

    
    //paging
    const displayNews = oldData
        .slice(pageVisited, pageVisited + newsPerPage)
        .map((news, i) => {
            return(
                <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className="news-card">
                    <a href={news.news_article_url || news.url} target="_blank" rel="noreferrer">
                        <div className="news-image-container">                          
                            <Title className="news-title" level={4}>{news.news_title || news.name}</Title>
                            <img src={news?.news_image || news?.image?.thumbnail?.contentUrl || demoImage } alt="News" style={{width : '100px', height : '100px'}} /><br />
                        </div>
                            <p>
                                {news.news_desc || news.description > 100 
                                    ? `${news.news_desc.substring(0, 100) || news.description.substring(0, 100)} ...` 
                                    : news.news_desc ||  news.description
                                }
                            </p>                        
                    </a>
                </Card>
                </Col>
            );
        });
    
    const pageCount = Math.ceil( oldData.length / newsPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
        scrollup();
    }

  return (
    <Row gutter={[24,24]} >
        {displayNews}
        <ReactPaginate 
            previousLabel = {'Previous'}
            nextLabel = {'Next'}
            pageCount = {pageCount}
            onPageChange = {changePage}
            containerClassName = {'paginationBtns'}
            previousLinkClassName = {'previousBtn'}
            nextLinkClassName = {'nextBtn'}
            disabledClassName = {'paginationDisabled'}
            activeClassName = {"paginationActive"}
        />
        {/* {oldData.map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card">
                  <a href={news.news_article_url || news.url} target="_blank" rel="noreferrer">
                      <div className="news-image-container">                          
                          <Title className="news-title" level={4}>{news.news_title || news.name}</Title>
                          <img src={news?.news_image || news?.image?.thumbnail?.contentUrl || demoImage } alt="News" style={{width : '100px', height : '100px'}} /><br />
                      </div>
                          <p>
                              {news.news_desc || news.description > 100 
                                  ? `${news.news_desc.substring(0, 100) || news.description.substring(0, 100)} ...` 
                                  : news.news_desc ||  news.description
                              }
                          </p>
                      
                  </a>
              </Card>
            </Col>
            
        ))} */}
        

      </Row>
  );
};

export default OldNews;
