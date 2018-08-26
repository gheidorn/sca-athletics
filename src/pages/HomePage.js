import React, { Component } from 'react';
import { createClient } from 'contentful';

import Jumbotron from '../components/Jumbotron';

class HomePage extends Component {
  constructor() {
    super();
    this.state = { content: [], isLoading: false };
  }

  contentful = createClient({
    space: 'c2uaoj4ms2z1',
    accessToken: 'f0b859cab1edcb57da5cb76ef73576816b2f866f6cc5563bd4951ced843e6e58'
  });

  componentWillMount() {
    this.fetchPageTeasers().then(this.setPageTeasers);
  }

  fetchPageTeasers = () => this.contentful.getEntries({ content_type: 'pageTeaser' });

  setPageTeasers = response => {
    this.setState({
      content: response.items,
      isLoading: false
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div className="row">
          <div className="col-md-12">
            <Jumbotron />
            <div className="row mb-2">
              <div className="col-md-6 px-0">Loading...</div>
            </div>
          </div>
        </div>
      );
    }

    // for each PageTeaser, create PageTeaser's HTML
    let pageTeasers = this.state.content.map(item => (
      <div className="col-md-6" key={item.fields.title}>
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <h3>{item.fields.title}</h3>
            <p>{item.fields.tease}</p>
            <a href={item.fields.link}>More Information</a>
            {/* <img
              className="card-img-right flex-auto d-none d-lg-block"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              // style={{ width: '200px', height: '250px' }}
              src={item.fields.image.fields.file.url}
              data-holder-rendered="true"
            /> */}
          </div>
        </div>
      </div>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <Jumbotron />
          <div className="row mb-2">{pageTeasers}</div>
        </div>
      </div>
    );
  }
}

export default HomePage;
