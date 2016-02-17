import React from 'react'

import NewsItem from './NewsItem'
import NewsHeader from './NewsHeader'

export default class NewsList extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    let items = this.props.items.map((item, index) => {
                    return <NewsItem key={item.id} item={item} rank={index + 1} />
                });
    return (
      <div className="newsList">
        <NewsHeader/>
        <div className="newsList-items">{items}</div>
        <More />
      </div>
    );
  }
}


const More = () => {
  return (
    <div className="newsList-more">
      <a className="newsList-moreLink" href="https://news.ycombinator.com/news?p=2">More</a>
    </div>
  )
}
