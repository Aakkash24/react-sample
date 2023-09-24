function Row5(){
    return (
        <div className="row5">
          <h1 >About me</h1>
          <div className="about-me-content">
          <div className="personal_tab">
              <div className="tab1">
              <div className="card">
                  <h3>Personal Details</h3>
                  <ul>
                  <li>Aakkash</li>
                  <li>24/03/2003</li>
                  <li>India</li>
                  <li>Ph:123456</li>
                  </ul>
              </div>
          </div>
          </div>
          <div className="personal_tab" style={{backgroundColor:"#31669b"}}>
              <div className="tab2" >
              <div className="card">
                  <h3>Education/Skillset</h3>
                  <ul>
                      <li>B.Tech</li>
                      <li>Python, C++, C</li>
                      <li>ML, NLP</li>
                      <li>DVC, MLFlow</li>
                      </ul>
              </div>
          </div>
          </div>
        </div>
    </div>
    )
}

export default Row5;