import React, { Component } from 'react';
import { createClient } from 'contentful';

import './Jumbotron.css';

const contentful = createClient({
  space: 'c2uaoj4ms2z1',
  accessToken: 'f0b859cab1edcb57da5cb76ef73576816b2f866f6cc5563bd4951ced843e6e58'
});

const JUMBOTRON_ENTRY_ID = '3IqnMv5odaMQegYyYAGYWe';

class Jumbotron extends Component {
  constructor() {
    super();
    this.state = { content: {}, isLoading: true };
  }

  componentWillMount() {
    contentful
      //   .getEntry(JUMBOTRON_ENTRY_ID)
      .getEntries({ content_type: 'jumbotron' })
      .then(({ items }) =>
        this.setState({
          content: items[0],
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error
        })
      );
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">Loading...</div>
        </div>
      );
    }
    console.log(this.state.content);

    return (
      <div className="sca-jumbotron text-white rounded">
        <div
          style={{
            backgroundImage: 'url(' + this.state.content.fields.backgroundImage.fields.file.url + ')',
            backgroundPosition: '0 500px',
            backgroundSize: '1440px',
            // WebkitBorderRadius: 5,
            // MozBorderRadius: 5,
            // borderRadius: 5,
            height: 300,
            padding: 20
          }}
        >
          <h1 className="display-6 font-italic sca-jumbotron-title">{this.state.content.fields.title}</h1>
          <p className="lead my-3">{this.state.content.fields.blurb}</p>
          <p className="lead mb-0">
            <a href="/" className="text-white font-weight-bold">
              Continue reading...
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
