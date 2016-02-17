import React from 'react'
import ReactDOM from 'react-dom'

import moment from 'moment'
import { default as url_helper } from 'url'

export default class NewsItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="newsItem">
        <Rank rank={this.props.rank} />
        <Vote item={this.props.item} />
        <div className="newsItem-itemText">
          <Title item={this.props.item} />
          <Subtext item={this.props.item} />
        </div>
      </div>
    )
  }
}

const Rank = (props) => <div className="newsItem-rank">{props.rank}</div>

const Vote = (props) => {
  let link = 'https://news.ycombinator.com/vote?for=' + props.item.id + '&dir=up&whence=news'

  return (
    <div className="newsItem-vote">
      <a href={link}><img src="/img/grayarrow2x.gif" width="10"/></a>
    </div>
  )
}


const Title = (props) => {
  let domain = url_helper.parse(props.item.url).hostname
  let { url, title } = props.item

  return (
    <div className="newsItem-title">
      <a className="newsItem-titleLink" href={url}>{title}</a>
      <span className="newsItem-domain">({domain})</span>
    </div>
  )
}

const Subtext = (props) => {
  let by = 'https://news.ycombinator.com/user?id=' + props.item.by
  let posted = moment(props.item.time * 1000).fromNow()

  return <div className="newsItem-subtext">
    {props.item.score} points by <a href={by}>{props.item.by}</a> {posted} | {<CommentLink item={props.item} />}
  </div>
}


const CommentLink = (props) => {
  let commentText = 'discuss'

  if (props.item.kids && props.item.kids.length) {
    commentText = props.item.kids.length + ' comments'
  }

  return (
    <a href={'https://news.ycombinator.com/item?id=' + props.item.id}>{commentText}</a>
  )
}


