// Bootstrap for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Badge } from 'react-bootstrap';
//Custom CSS
import './App.css';
//Video Player plugin
import YouTube from 'react-youtube';
//Json file
import videolist from './JSON/VideoList.json'
import { useState } from 'react';
//Icons package
import { BiLike, BiDislike } from "react-icons/bi";
import { RiShareForwardFill } from "react-icons/ri";

function App() {
  const video_id = 'WTJSt4wP2ME'
  const video_name = "1.K'NAAN - Wavin' Flag (Coca-Cola Celebration Mix)"
  const opts = {
    height: '460',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }
  const [getVideo, setVideo] = useState(video_id)
  const [getName, setName] = useState(video_name)
  return (
    <div className="App" >
      {
        <Container fluid className='mt-1' >
          <Row>
            <Col lg={8}>
              <YouTube videoId={getVideo} opts={opts} />

              <Col lg={8} className="bottom">
                <p className='title'>{getName}
                  <span className="icons">
                  <RiShareForwardFill/> SHARE
                  </span>
                  <span className="icons">
                    <BiDislike /> DISLIKE
                  </span>
                  <span className="icons">
                    <BiLike /> LIKE
                  </span>
                  </p>
                <Badge bg="secondary" className="pill">All</Badge>
                <Badge bg="light" className="pill" text="dark">From your search</Badge>
                <Badge bg="light" className="pill" text="dark">Supercar</Badge>
                <Badge bg="light" className="pill" text="dark">Racing</Badge>
                <i class="fa fa-share" aria-hidden="true"></i>
              </Col>
            </Col>
            <Col lg={4} className="sidebar">
              {
                videolist.map((video) => {
                  return (
                    <div key={video.videoId}>
                      <Row onClick={() => {
                        setVideo(video.videoId)
                        setName(video.id + "." + video.title)
                      }
                      }>
                        <Col lg={2}>
                        {/* image for video thumbnail in side list */}
                          <img src="https://img.youtube.com/" alt="error image" className="videoIcon"></img>
                        </Col>
                        <Col>
                          <p className="videoname" >
                            {video.id}.&nbsp;{video.title}</p>
                        </Col>
                      </Row>
                    </div>
                  );
                })
              }
            </Col>

          </Row>
        </Container >
      },
    </div >
  );
}

export default App;
