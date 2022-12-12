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
import axios from "axios";
import Link from "next/link";

const Index = ({ heros }) => {
  return (
    <div className="container">
      <h1 className="display-2">Superhero Info Manager</h1>
      <div>
        {heros.map((hero) => {
          return (
            <MDBCard className="border boder-2 my-2" style={{ maxWidth: "22rem" }}>
              <MDBCardBody>
                <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                <MDBCardText>
                  Reveal Identity
                </MDBCardText>
                <Link className="mx-2" href={`/`}><MDBBtn>View Hero</MDBBtn></Link>
                <Link href={`/`}><MDBBtn>Edit Hero</MDBBtn></Link>
              </MDBCardBody>
            </MDBCard>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  // await axios.get('http://localhost:3000/api/hero')
  // .then(response=>{
  //   console.log(response.data, "heros array");
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  const res = await axios(`http://localhost:3000/api/hero`);
  // const data = await res.json()
  console.log(res.data);
  return {
    props: { heros: res.data.heros }, // will be passed to the page component as props
  };
}

export default Index;
