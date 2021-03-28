import React, { useState, useEffect } from "react";

// import ReactPaginate from 'react-paginate';
import PaginationBottom from '@material-ui/lab/Pagination';
import Article from "./article";
import Searchbar from './searchbar';
import "./styles.css";
import ClearIcon from '@material-ui/icons/Clear';
import FindInPageIcon from '@material-ui/icons/FindInPage';


export default function Main() {

  const [articles, setArticles] = useState();
  const [page, setPage] = useState()
  const [total, setTotal] = useState()
  const [userInput, setUserInput] = useState("");

  const url = "https://spaceflightnewsapi.net/api/v1/articles"

  /* useEffect(() => {
    fetch(url).then(response => response.json())
  .then(data => {
    setArticles(data.docs);
    setPage(page)
    setTotal(data.totalPages);
  })
  }, []) */

  useEffect( () => {
    getArticlePerPage();
  }, [page]);


  const getArticlePerPage = () => {
    const endpoint = url + `?page=${page}`;
    fetch(endpoint).then(response => response.json())
    .then(data => {
      setArticles(data.docs);
      setTotal(data.totalPages);
    }).catch( (err) => {
      console.log(err)
    })
  }

  const handlePage = (e, num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  /* function handleSearch({target}) {
    const {value} = target;
    setUserInput(value);
    if(userInput) {
      const rexex = new RegExp(`${userInput}`, 'i');
      const filteredArticles = articles.filter( (article) => rexex.test(article.title));
      setArticles(filteredArticles)
  }
} */

  function handleReset() {
    document.location.reload()
  } 

  function handleChange() {
    setUserInput(document.querySelector('input').value);
  }

  function handleSearch() {
      const endpoint = url+'?search='+userInput;
      fetch(endpoint).then(response => response.json())
    .then(data => {
      setArticles(data.docs);
      setTotal(data.totalPages);
    }).catch( (err) => {
      console.log(err)
    })
    }


  return (
    <div id= "main">
    <Searchbar value={userInput} onChange={handleChange} />
    { userInput && userInput.length > 1 ? 
    (<div className="two">
    <FindInPageIcon id="Btn" onClick={handleSearch} />
    <ClearIcon id="Btn" onClick={handleReset} />
    </div>)
    : null }
    
<div className="all">

    {articles && articles.length < 1 ? <h2>No matches found, please try again</h2> : 
        ( <div>
          <Article articles={articles} page={page} />
        <PaginationBottom count={total} color="black" size="large" onChange={handlePage} id="pages" />
        </div>)
        }
</div>
    </div>

  )
}

