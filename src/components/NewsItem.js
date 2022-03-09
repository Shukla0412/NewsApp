
// import React, { Component } from 'react'

// export class NewsItem extends Component {
//   render() {
//     let {title,description,imgUrl,url}=this.props;
//     return (
//       <div>
//            <div className="card" >
//               {/* <img src={!imgUrl?"https://d32r1sh890xpii.cloudfront.net/article/718x300/2021-10-29_7qtapayz9j.jpg":imgUrl} className="card-img-top" alt="..."/> */}
//               <img src={!imgUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imgUrl} className="card-img-top" alt="..."/>
//               <div className="card-body">
//                 <h5 className="card-title">{title}</h5>
//                 <p className="card-text">{description}</p>
//                 <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
//               </div>
//            </div>
//       </div>
//     )
//   }
// }

// export default NewsItem



import React from 'react'


const NewsItem=(props)=>  {
  
        let {title, description, imgUrl, newsUrl,author,date} = props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imgUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imgUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItem
