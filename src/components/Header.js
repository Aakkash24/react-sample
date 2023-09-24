import "./Header.css"

function Header(){
    return (
        <div className="row1">
          <div className="row1_image">
              <img src='assets\profile_img.jpg' alt='Img1'/>
          </div>
          <div className="row1_data">
              <h1>Aakkash</h1>
              <p>Student</p>
              <p>Backend Engineer Intern</p>
              <button className="button email_btn">Email Me</button>
          </div>
      </div>
    )
};

export default Header;