import React from 'react';
import './LatestNews.css';
import Heart from '../../static/heart-48.png';

function LatestNews() {
    return (
      <>
        <div id="latest__news">
          <h1>Latest News</h1>
          <div className="outline">
              <div className="background">
                <div className="img">IMG</div>
                <div className="title__heart">
                  <div className="title"><h2>Title</h2></div>
                  <img src={Heart} alt="heart" className='Heart'/>
                </div>
                <div className="content">
                  <div className="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing 
                    elit. Vero maiores exercitationem autem cum iste. 
                    Quidem obcaecati ea, a hic accusantium voluptate 
                    temporibus fugiat. Ullam dolorum, vero illo 
                    \pariatur id placeat!
                  </div>
                  <div className="description__credits">
                    Lorem ipsum dolor sit amet consectetur, adipisicing 
                    elit. Vero maiores exercitationem autem cum iste. 
                    Quidem obcaecati ea, a hic accusantium voluptate 
                    temporibus fugiat. Ullam dolorum, vero illo 
                    \pariatur id placeat!
                  </div>
                </div>
                <div className="datetime">2022-06-01</div>
              </div>
          </div>
        </div>
      </>
    )
  }

export default LatestNews;