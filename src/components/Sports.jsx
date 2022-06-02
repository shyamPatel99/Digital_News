import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';


import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';


import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const {Text, Title} = Typography;
const {Option} = Select;
const demoImage = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const  Sports = (props) => {
    function scrollup() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
            });
      }

    //offline sports data
    const [localSports, setLocalSports] = useState([]);
    const getLocalSports = () => {
        axios.get('http://localhost:9000/news/Sports')
            .then(response => {                
            const localData = response.data;            
            setLocalSports(localData)
            });
        scrollup();
    };    

    useEffect( () => getLocalSports(), []);
    //---------------------------------

    
    
    //pagination
    const [pageNumber, setPageNumber] = useState(0);
    let newsPerPage;
    
    //is it a home page or not
    if(props.simplified) {
        newsPerPage = 6;      
    }else {
        newsPerPage = 9;       
    }


    const pageVisited = pageNumber * newsPerPage;
    //console.log("Local Sports News : ", localSports);
    

    
    const {data:cryptoNews} = useGetCryptoNewsQuery({ newsCategory:'sports', count:props.simplified ? 6 : 20 });


    



    //console.log(cryptoNews);
    if(!cryptoNews?.value) return 'Loading ...';

    //Data
    console.log("local : ",localSports)
    console.log("Length of local Data collection is ", localSports.length);
    
    //Database data handle
    let Dataneeded = [] ;
    for (let i = 0; i < localSports.length; i++) {
        Dataneeded = (Dataneeded).concat(localSports[i].value)
        console.log(i);
    }
     console.log("DataNeeded",Dataneeded);

    const Data = (cryptoNews.value).concat(Dataneeded) ;

    //   //const Data = (cryptoNews.value).concat(Dataneeded) ;
    //   const Data = Dataneeded ;

    //console.log("Merged Data : ",Data);
    //console.log("Sports News :",cryptoNews.value);

    

    

    //paging
    const displayNews = Data
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
    const pageCount = Math.ceil( Data.length / newsPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
        scrollup();
    }


  return (
    <>
        <Row gutter={[24,24]} >
            {displayNews}
            {!props.simplified && (
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
            )}
        </Row>

        
            
                
            
    
        
        

        {/* <Row gutter={[24,24]} >
            {Data.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className="news-card">
                    <a href={news.url} target="_blank" rel="noreferrer">
                        <div className="news-image-container">                          
                            <Title className="news-title" level={4}>{news.name}</Title>
                            <img src={news?.image?.thumbnail?.contentUrl || demoImage } alt="News" style={{width : '100px', height : '100px'}} /><br />
                        </div>
                            <p>
                                {news.description > 100 
                                    ? `${news.description.substring(0, 100)} ...` 
                                    : news.description 
                                }
                            </p>
                        
                    </a>
                </Card>
                </Col>
            ))}
        </Row> */}
    </>
  );
};

export default Sports;