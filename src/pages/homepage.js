import React from "react";
import fire from "../firebase";
import { useHistory } from "react-router-dom";
import { LogOutButton, SHeader } from "../styles/Shomepage";
import { SNavbar, SHomePage, SLogo, SProfileButton } from "../styles/Shomepage";
import { SPartner, Cards } from "../styles/Shomepage";
import Card from "react-bootstrap/Card";
import Logo from "../images/Logo.png";
import { Col, Row } from "react-bootstrap";

const HomePage = () => {
  const history = useHistory();

const handleLogout = () => {
    fire.auth().signOut();
    history.push("/");
  
  };

  const handleProfile = () => {
history.push("/UserProfile");
  };

  return (
    <SHomePage>
      <SHeader>
        {/* <div className="logoContainer">
            <img src={Logo} className="logo" alt="BorrowIT-logo" /> */}
        {/* </div> */}
        <img src={Logo} className="Logo" alt="BorrowIT-logo" />
        <SNavbar>
          <h2 className="navbarStyle">How it Works</h2>
          <h2 className="navbarStyle">About Us</h2>
          <h2 className="navbarStyle">Blog</h2>
          <button className="SProfileButton" onClick={handleProfile}>
            Profile
          </button>
          <button className="logoutBtn" onClick={handleLogout}>
            Log Out
          </button>
        </SNavbar>
        {/* <button onClick={handleLogout}>Log Out</button> */}
        {/* <SearchBarPartner>
               <input  className="inputField" value={search} onChange={this.updateSearch} placeholder="Enter item you need..." />
          <button className="searchBtn" onClick={search}>Search</button>
          </SearchBarPartner> */}
      </SHeader>
      <SPartner>
        <h3>Find Your Partner</h3>
        <h3>
          Browse through the list of other thesis writer and find your perfect
          match
        </h3>
      </SPartner>
      <Cards className="CardsStyle">
        <Row className="Show-Grid">
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              />
              <Card.Body>
                <Card.Title>Marie</Card.Title>
                <Card.Text>
                  BSC in International Business, CBS, 20yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              />
              <Card.Body>
                <Card.Title>Max</Card.Title>
                <Card.Text>
                  BSC in Finance, CBS, 25yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1581992652564-44c42f5ad3ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              />
              <Card.Body>
                <Card.Title>Fiona</Card.Title>
                <Card.Text>
                  MSC in EBusiness, CBS, 24yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1545696968-1a5245650b36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1917&q=80"
              />
              <Card.Body>
                <Card.Title>Aron</Card.Title>
                <Card.Text>
                  BSC in Finance, CBS, 25yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1517842536804-bf6629e2c291?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              />
              <Card.Body>
                <Card.Title>Sofia</Card.Title>
                <Card.Text>
                  BSC in Marketing, CBS, 25yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1604820649462-62dbda149c73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              />
              <Card.Body>
                <Card.Title>Marek</Card.Title>
                <Card.Text>
                  BSC in Information Systems, CBS, 23yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Cards>
    </SHomePage>
  );

};

export default HomePage;
