function Row4(){
    return (<div className="row4">
          <div className="project_card">
              <img src="assets\img1.jpg" alt = "Img1" style={{width:"400px",height: "300px"}}/>
              <div className="project_data">
                  <h4>AiVision</h4>
                  <p>AiVision is an AI based software designed to automate the process of manually monitoring the surveillance system.</p>
              </div>
          </div>
          <div className="project_card">
              <img src="assets\img2.jpg" alt = "Img1" style={{width:"400px",height: "300px"}}/>
              <div className="project_data">
                  <h4>LSTM for MultiClass classification</h4>
                  <p>Multiclass classification model using Long Short-Term Memory (LSTM) neural networks to classify news articles</p>
              </div>
          </div>
          <div className="project_card">
              <img src="assets/img3.jpg" alt = "Img1" style={{width:"400px",height: "300px"}}/>
              <div className="project_data">
                  <h4>Sentiment Analysis                </h4>
                  <p>Aims to perform sentiment analysis on the Quora dataset using Natural Language Processing (NLP) tools and a Convolutional Neural Network (CNN).</p>
              </div>
          </div>
      </div>)
}

export default Row4;