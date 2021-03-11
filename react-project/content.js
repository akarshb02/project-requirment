import { Component, useState, useEffect } from 'react';
import axios from 'axios';
import App from './App';
import {Link} from 'react-router-dom';

const Content = () => {


     const [news, setNews] = useState([])
     const [search, setSearch] = useState('react')

     const fetchNews = () => {
        axios.get(`http://newsapi.org/v2/everything?q=${search}&from=2021-03-08&to=2021-03-08&sortBy=popularity&apiKey=api`)
            .then(response => {
                setNews(response.data.articles)
            })
    }

    useEffect(() => {
        fetchNews();
    }, [search]);

    return ( <div> 
          
        {
            news.map((items) => {
                return ( <div>
                <a href={items.url}>
                <h1>{items.title}</h1>
                </a>
                <img src={items.urlToImage} />
                <p>{items.publishedAt}</p>

            </div>
                )

            })
        } 
        </div>

    )

}

export default Content
