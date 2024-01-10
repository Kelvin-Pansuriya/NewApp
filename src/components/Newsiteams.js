import React, { Component } from "react";

export class Newsiteams extends Component {
  render() {
    const {author,title,description,url,urlToImage,badge,publishedAt} = this.props;
    return (
      <div>
        <span className="badge badge-pill badge-danger">{badge}</span>
        <div className="card">
          <img src={urlToImage} className="card-img-top img-fluid" alt="Image404...." style={{height:"211px",width:"auto"}}/>
          <div className="card-body">
            <h5 className="card-title">Title:- {title}....</h5>
            <h6 className="card-title">Author Name:- {author}</h6>
            <h6 className="card-title">Date Of Article:- {publishedAt}</h6>
            <p className="card-text">{description}....</p>
            {/* <button onClick={()=>{window.location.href = {url}}} type="button" className="btn btn-dark">Read Full Articles</button> */}
            <a href={url} rel="noreferrer" target="_blank" className="btn btn-dark">Read Full Articles</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsiteams;
