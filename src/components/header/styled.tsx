import styled from "styled-components";
export const NewHeader = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  z-index: 5;
  background-color: var(--primary-blue);
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  position: fixed;
  top: 0;

.logos {
  display: flex;
  align-items: flex-end;
}

button {
  height: 26px;
  width: 52px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

button > span {
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  transition: width 2s;
}

@media (min-width: 600px){
    justify-content: space-between;

    .logos, button {
      margin: 0 5% 0 5%;
    }

}
`

export const Menu = styled.div`
z-index: 7;
position: fixed;
height: 100vh ;
width: 80vw;
top: 0;
right: 0;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: var(--primary-blue);
-webkit-box-shadow: -10px 0px 10px 1px rgb(0 0 0 / 0.2);
-moz-box-shadow:    -10px 0px 10px 1px rgb(0 0 0 / 0.2);
box-shadow:         -10px 0px 10px 1px rgb(0 0 0 / 0.2);

.container-menu {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.container-menu > h1 {
  color: var(--primary-white);
margin-top: 10px;
font-size: 26px;

}

.container-menu > button {
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background-color: black;
  color: var(--primary-blue);
  font-size: 35px;
  line-height: 15px;
}
.box-footer {
  display: flex;
  justify-content: space-around;
  color: var(--primary-white);
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
}

footer {
  display: flex;
  background-color: black;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  color: var(--primary-white);
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 700;
}

@media(min-width: 600px){
  width: 60vw;
}



@media (min-width: 800px){
  width: 30vw;

.container-menu > h1 {
  font-size: 27px;
  letter-spacing: 0em;
}

.container-menu > button {
  height: 38px;
  width: 38px;
  top: 39px;
  font-size: 28px;
  color: var(--primary-white);
}


}`





