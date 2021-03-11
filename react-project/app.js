import { Component, useState, useEffect } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import "./styles.css"


const App = () => {


    const [news, setNews] = useState([])
    const [search, setSearch] = useState()
    const [url, setUrl] = useState('http://newsapi.org/v2/everything?q=apple&from=2021-03-08&to=2021-03-08&sortBy=popularity&apiKey=api')

    const fetchNews = () => {
        axios.get(url)
            .then(response => {
                setNews(response.data.articles)
            })
    }

    useEffect(() => {
        fetchNews();
    }, [url]);

    const handleChange = (e) => {
        setSearch(e.target.value)

    }

    const handleSubmit = e => {
        e.preventDefault()
        setUrl(`http://newsapi.org/v2/everything?q=${search}&from=2021-03-08&to=2021-03-08&sortBy=popularity&apiKey=9835b5b2d1ec4155b92b697a5a112d46`)
    }


    return (

        <div>
        <h1 > News </h1>   
        <form onSubmit = { handleSubmit } autoComplete="off">
        <input type = 'text' value = { search } onChange = { handleChange }/> 
         <button > Search </button> 
        </form>

        {
            news.map((items) => {
                return ( <div>
      
                    
                    <Link to="/content"><h4>{items.title }</h4></Link>
               
                   
                    </div>
                )

            })
        } 
        </div>

    )

}
