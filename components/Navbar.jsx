import Link from "next/link";
import { MDBBtn } from "mdb-react-ui-kit";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <Link href="/">
        Superhero Info
      </Link>
      <Link href="/new">
      <MDBBtn>New Info</MDBBtn>
      </Link>
    </nav>
  );
};

export default Navbar;
