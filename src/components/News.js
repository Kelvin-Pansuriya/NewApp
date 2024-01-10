import React, { Component } from 'react'
import Newsiteams from './Newsiteams'

export class News extends Component {
    constructor(){
        super()
        this.state = {
            articles:[],
            page:1
        }
    }
    async componentDidMount(){
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&page=${this.state.page}&pageSize=20&apiKey=51099226a1984b299129d12352be845a`)
        let textData = await data.json()
        this.setState({
            articles:textData.articles,
            totalResults:textData.totalResults
        })
    }
    goPrevious = async ()=>{
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&page=${this.state.page-1}&pageSize=20&apiKey=51099226a1984b299129d12352be845a`)
        let textData = await data.json()
        this.setState({
            articles:textData.articles,
            page:this.state.page-1
        })
    }
    goNext = async ()=>{
        if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){
        }
        else{
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&page=${this.state.page+1}&pageSize=20&apiKey=51099226a1984b299129d12352be845a`)
            let textData = await data.json()
            this.setState({
                articles:textData.articles,
                page:this.state.page+1
            })
        }
    }
    render() {
    return (
      <div className='container-fluid p-0'>
        <div className="container py-2">
            <h1 className='text-center'>Top Headlines Of {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h1>
        </div>
        <div className="container py-2">
            <div className="row">
                {
                    this.state.articles && this.state.articles.map((element)=>{
                        return(
                            <div className="col-md-4 my-4" key={element.url}>
                                <Newsiteams author={element.author===null?"Unknown":element.author} title={element.title===null?"Title Is Not Available":element.title.slice(0,35)} description={element.description===null?"Description Is Not Available":element.description.slice(0,53)} url={element.url===null?"/":element.url} urlToImage={element.urlToImage===null?"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg":element.urlToImage} badge={element.source.name===null?"Unknown":element.source.name} publishedAt={element.publishedAt===null?"Not Available":element.publishedAt} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="container d-flex justify-content-between py-4">
            <button disabled={this.state.page<=1} onClick={this.goPrevious} type="button" className="btn btn-dark">&larr; Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} onClick={this.goNext} type="button" className="btn btn-dark">&rarr; Next</button>
        </div>
      </div>
    )
  }
}

export default News