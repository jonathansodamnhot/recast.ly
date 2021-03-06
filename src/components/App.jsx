class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
    this.handleVideoTitleClick = this.handleVideoTitleClick.bind(this);
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  }
    
  getYouTubeVideos(query) {
    
  }

  handleVideoTitleClick(video) {
    this.setState({
      currentVideo: video
    });    
  }
  
  render() {
  
    return (    
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList titleClick={this.handleVideoTitleClick} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );    
  }
}

// <div><h5><em>videoList</em> view goes here</h5></div>

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
