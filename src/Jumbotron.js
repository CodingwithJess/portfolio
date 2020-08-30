import React from "react";
import {Jumbotron} from "reactstrap";
import styled from "styled-components";
import img from "./img/Sparkle.jpg";
import logo from "./img/logo.png"

const JumboWrapper = styled.div`
.jumbotron {
    text-align:center;
    background-image: url(${img});
    background-repeat:none;
    background-size: cover;
    border-radius: 0rem;
  }
  .img {
    margin-left:auto;
    margin-right:auto;
    border-radius:none;
  }
  .logo{
    height:350px
    margin:0px
  }
`

function MainJumbotron() {
  return (
    <JumboWrapper>
        <Jumbotron>
          <img src={logo} class="logo" alt="Jessica Edens Logo"/>          
        </Jumbotron>
  </JumboWrapper>
  );
}

export default MainJumbotron;
