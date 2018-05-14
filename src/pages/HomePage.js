import React, { Component } from 'react';

import Jumbotron from '../components/Jumbotron';

class HomePage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          {/* <h2 style={{textAlign:'center'}}>Welcome to the home of St. Catherine's of Alexandria Chargers!</h2> */}
          <Jumbotron />
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <strong className="d-inline-block mb-2 text-primary">Football</strong>
                  <h3 className="mb-0">
                    <a className="text-dark" href="/">
                      Gold Ball Champs
                    </a>
                  </h3>
                  <div className="mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-auto">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                  </p>
                  <a href="/">Continue reading</a>
                </div>
                <img
                  className="card-img-right flex-auto d-none d-lg-block"
                  data-src="holder.js/200x250?theme=thumb"
                  alt="Thumbnail [200x250]"
                  style={{ width: '200px', height: '250px' }}
                  src="http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0412%2Fr288190_2_1296x518_5-2.jpg&w=660&h=264&scale=crop&cquality=80&location=center"
                  data-holder-rendered="true"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <strong className="d-inline-block mb-2 text-success">Cheerleading</strong>
                  <h3 className="mb-0">
                    <a className="text-dark" href="/">
                      Loud and Proud
                    </a>
                  </h3>
                  <div className="mb-1 text-muted">Nov 11</div>
                  <p className="card-text mb-auto">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                  </p>
                  <a href="/">Continue reading</a>
                </div>
                <img
                  className="card-img-right flex-auto d-none d-lg-block"
                  data-src="holder.js/200x250?theme=thumb"
                  alt="Thumbnail [200x250]"
                  src="http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0412%2Fr288190_2_1296x518_5-2.jpg&w=660&h=264&scale=crop&cquality=80&location=center"
                  data-holder-rendered="true"
                  style={{ width: '200px', height: '250px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
