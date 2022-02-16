import React from 'react';
import './LatestNews.css';

function LatestNews() {
    return (
      <>
        <div id="latest__news">
          <h1>Latest News</h1>
          <div className="outline">
            <div className="card">
              <div className="background">
                <div className="img"></div>
                <div className="title"></div>
                {/* hearts */}
                <div className="description"></div>
                <div className="description__credits"></div>
                <div className="datetime"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

export default LatestNews;