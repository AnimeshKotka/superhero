import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from 'axios';

 const Index = ()=> {
  return (
      <div className="container">
        <h1 className="display-2">Superhero Info Manager</h1>
        <div>
          <MDBCard className="border boder-2" style={{maxWidth:'22rem'}}>
            <MDBCardBody> 
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
              <MDBBtn>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
  );
}

Index.getInitialProps = async () =>{
 await axios.get('http://localhost:3000/api/hero')
  .then(response=>{
    console.log(response, "heros array");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  return {}
}

export default Index;
