// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// export class News extends Component {
//   static defaultProps = {
//            country: 'in',
//            pageSize: 8, 
//            category: 'general',
//          }
//   constructor(){
//     super();
//     this.state={
//      articles: [],
//      loading: false,
//      page:1,
//     }
//   }
//   static propTypes = {
//             country: PropTypes.string,
//             pageSize: PropTypes.number, 
//             category: PropTypes.string,
//           }
//   async componentDidMount(){
//      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a0cdcaf6b7ac412d816847cf549b26cc&page=1&pageSize=${props.pageSize}`;
//      this.setState({laoding:true});
//      let data=await fetch(url);
//      let parsedata=await data.json();
//      console.log(parsedata);
//      this.setState({
//          articles:parsedata.articles,
//         totalResults:parsedata.totalResults,
//         loading:false
//     })
//   }
//   handlePrevClick =  async ()=>{
//     console.log("prev");
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a0cdcaf6b7ac412d816847cf549b26cc&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
//     this.setState({laoding:true});//request jate hi loading ko true kro
//     let data = await fetch(url);
//     let parsedData = await data.json()
//     console.log(parsedData);
//     this.setState({
//     page: this.state.page - 1,
//     articles: parsedData.articles,
//     loading:false
//    })
//     }
//#33
//handlePrevClick = async ()=>{
// console.log("Previous");
// let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
// this.setState({loading: true});
// let data = await fetch(url);
// let parsedData = await data.json()
// console.log(parsedData);  
// this.setState({
//     page: this.state.page - 1,
//     articles: parsedData.articles,
//     loading: false
// })
//}
// async componentDidMount(){ 
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1&pageSize=${props.pageSize}`;
//     // this.setState({loading: true});
//     // let data = await fetch(url);
//     // let parsedData = await data.json()
//     // console.log(parsedData); 
//     // this.setState({articles: parsedData.articles,
//     //     totalResults: parsedData.totalResults,
//     //     loading: false})
// }

//   handleNextClick = async ()=>{
//     console.log("next");
//     if (! (this.state.page + 1 > Math.ceil(this.state.totalResults /props.pageSize)))
//     var url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a0cdcaf6b7ac412d816847cf549b26cc&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
//     this.setState({laoding:true});
//     let data = await fetch(url);
//     let parsedData = await data.json()
//     //this.setState({laoding:false});//after data been fetched
//     this.setState({
//     page: this.state.page + 1,
//     articles: parsedData.articles,
//     loading:false
//    })
//     }
//  handleNextClick = async ()=>{
//     console.log("Next"); 
//     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){
//         // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
//         // this.setState({loading: true});
//         // let data = await fetch(url);
//         // let parsedData = await data.json() 
//         // this.setState({
//         //     page: this.state.page + 1,
//         //     articles: parsedData.articles,
//         //     loading: false
//         // })
//     }
// async update(){
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${props.page}&pageSize=${props.pageSize}`;
//     this.setState({loading: true});
//     let data = await fetch(url);
//     let parsedData = await data.json()
//     console.log(parsedData); 
//     this.setState({articles: parsedData.articles,
//         totalResults: parsedData.totalResults,
//         loading: false})
//  }
//   render() {
//     return (
//       <div className="container my-3">
//         <h1 className="text-center">News MOnkey-Top Headlines</h1>
//         {/* {this.state.loading &&<Spinner/>} */}
//         {this.state.loading && <Spinner/>}
//         <div className="row">
//         {/* {!this.state.loading && this.state.articles.map((element)=>{ */}
//         {!this.state.loading && this.state.articles.map((element)=>{
//             return <div className="col-md-4" key={element.url}>
//               <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} url={element.url}/>
//               {/* <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} url={element.url}/> *
//             </div>
//           })}
//         </div>
//         <div className="container d-flex justify-content-between m-3">
//         <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}>&larr; Previous</button>
//         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)}  type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next &#8594;</button>
//         </div>
//       </div>
//     )
//   }
// }
// export default News
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])//using hooks to set state without using constructor
    const [loading, setloading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    

    // const captialise = (string) => {
    //     return string.charAt(0).toUpperCase() + string.slice(1);

    // }
    

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a0cdcaf6b7ac412d816847cf549b26cc&page=${page}&pageSize=${props.pageSize}`;
        setloading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults)
        setloading(false)

        props.setProgress(100);
    }
    useEffect(() => {
        //document.title=`${this.captialise(props.category)} -NewsMonkey`;
        updateNews();//it is the effect it will bring
    }, [])//inplace of componentdidunmount useeffect is used, [] is the listen that after that task it will work

    const fetchMoreData = async () => {

        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a0cdcaf6b7ac412d816847cf549b26cc&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()

        setArticles(articles.concat(parsedData.articles))//so that articles add hote rhe
        setTotalResults(parsedData.totalResults)
        //to fetch more data as we were fetching more data earlier thru updatenews
    };



    return (
        <div className="container my-3">
            <h1 className="text-center" style={{ margin: '35px 0px',marginTop:'90px' }}>NewsMonkey - Top Headlines</h1>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
        </div>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News
