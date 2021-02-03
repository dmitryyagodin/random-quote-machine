import quotesData from './QuotesData';
import React from 'react';
import Button from 'react-bootstrap/Button';
import {Twitter} from 'react-bootstrap-icons';

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    let randomNum = Math.floor(Math.random() * quotesData.length);
    this.setState({
      number: randomNum
    });
  }
  
  render() {
    let quoteText = quotesData[this.state.number].quote;
    let author = quotesData[this.state.number].author;
    let tweetCode = encodeURIComponent('"' + quoteText + '" ' + author);
    return (
      <div id="quote-box">
        <p id="text"><span>"</span>{quoteText}<span>"</span></p>
        <p id="author">{author}</p>
        <Button id="new-quote" onClick={this.handleClick} variant="outline-primary" style={{float: "right"}}>
          New quote
        </Button>
        <Button style={{marginLeft: '10px', float: 'left'}} title="Tweet this quote!" variant="outline-primary">
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${tweetCode}`} target="_blank"><Twitter /> Tweet</a>
        </Button>
      </div>
    );
  }
};

export default QuoteBox;
