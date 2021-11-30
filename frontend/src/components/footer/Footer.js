import "./footer.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer style={{ backgroundColor: "black", marginTop: "150px" }}>
        <div className="main-footer">
          <div className="container">
            <div className="row">
              <div className="colo">
                <h4 style={{ color: "gray" }}>connect with us: </h4>
                <ul className="list-unstyled">
                  <li style={{ color: "white" }}>
                    Wateen Endowment Foundation
                  </li>
                  <li style={{ color: "white" }}> Record number: 1010627625</li>
                  <li style={{ color: "white" }}>
                    Tax number: 310406758300003
                  </li>
                  <li style={{ color: "white" }}>
                    Address: Riyadh - Al-Wurud District - Olaya Road
                  </li>
                  <li style={{ color: "white" }}>
                    Copyright ©2021 Wateen Initiative. All rights reserved
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Image
          style={{ width: "60px", height: "60px", marginLeft: "45%" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfzn1T7H5Ls02u1zERewsVWKNPGI4HW3HO-Zy268QIIREz9_UKOrCIN1ULNLjXmSC21c&usqp=CAU"
        />
        <Image
          style={{ width: "80px", height: "80px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eabwcDZTDqb3A20Hq7JmHXY3K5yEvgfsm26sOkj65ePMvobGrN6IBTJj1uk2tQPidq0&usqp=CAU"
        />
      </footer>
    </div>
  );
}

export default Footer;
