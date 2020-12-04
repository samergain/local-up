import React from "react";
import NavBar from "../components/HomePortal/NavBar/NavBar";

function Home(){
    return (
        <div>
        <NavBar />
        <form className="home">
        <Container fluid>
            <h3>Home</h3>

            <div className="form-group">
                <label>LoremIpsum</label>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </form>
        </Container>
        </div>
    );
}

export default Home;