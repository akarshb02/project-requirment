import {
    Component,
    useState,
    useEffect
} from 'react';
import axios from 'axios';


const App = () => {


    const [news, setNews] = useState([])
    const [search, setSearch] = useState('react')

    const fetchNews = () => {
        axios.get(`http://newsapi.org/v2/everything?q=${search}&from=2021-03-08&to=2021-03-07&sortBy=popularity&apiKey=9835b5b2d1ec4155b92b697a5a112d46`)
            .then(response => {
                setNews(response.data.articles)
            })
    }

    useEffect(() => {
        fetchNews();
    });

    const handleChange = (e) => {
        setSearch(e.target.value)

    }
    return (

        <div>
          <h1 > News < /h1> 
          <form>
            <input type = 'text' value = {search} onChange = {handleChange}/> 
            <button > Search </button>
          </form>

        { news.map((items) => {

           return ( 
             <div ><h4 > {items.title} </h4> 
            </div>
           )

            })
        } 
    </div>

    )

}
