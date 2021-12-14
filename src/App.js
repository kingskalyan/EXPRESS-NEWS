

import {  useState } from 'react';
import './App.css';


function App() {
 
 
  let searchkey="world cup 120";
  let [articles,setArticles]=useState([]);
  
  function getSearch(value){
    searchkey = value;
  }
  
  function getNews(){
  fetch(`https://newsapi.org/v2/everything?q=${searchkey}&apiKey=0ad4026784d94a8ca33d007b3721c367`)
  
  .then((response)=>response.json())
  .then(news=>{
    setArticles(news.articles);
    console.log(news.articles)
  })
  .catch(err=>console.log(err));
  }
  function test(){
    fetch("https://testwebsiteapi.azurewebsites.net/api/Test").then((response)=>response.json())
  .catch(err=>console.log(err));
  }
  


  return (
    <div className="body">
      
      <h1 className='top'>EXPRESS NEWS</h1>
      {/* <link rel="manifest" href="/manifest.json"> */}
     
      <input className = "head" placeholder ="Search News" onChange={(event) => {getSearch(event.target.value)}} />
      <button className="search" onClick={(getNews)}>Search</button>
       <button className="test" onClick={(test)}>Test</button>
      <div>
                <button>
                <iframe title="My Daily Marathon Tracker" className='bot' src='https://webchat.botframework.com/embed/webservicebot-bot?s=38X4-XtuyT0.dZvk4D-C7dn0mdASlA1G5dgalvpn-8e2nDH7udae6PM'  ></iframe>
                
                </button>
               
              </div>
      <div className='articles'>
      {
        articles.map((article,index)=>{
          return(
              <div key={index} className='article'>
                  <img src={article.urlToImage} className='newsimg' alt =''/>
              <div className='news'>
                <h3  className='news'>{article.title}</h3>
                <a href ={article.url}>
                        <button className='btn'> Read more</button>
                </a>
                <h4>Published At : {article.publishedAt.split('T')}</h4>
              </div>
            
              </div>
              
   
          )
      
        })
     
      }
      </div>







    </div>
    
  );
}

export default App;
