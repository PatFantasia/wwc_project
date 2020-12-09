import styled from 'styled-components';

const StyledConnexion = styled.div`


@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');

h1, h2, h3, h4, h5, h6 {
	font-weight: lighter;
}
.connexionBox {
  background-image: url(./bg-img.jpg);
  min-height: 100%;
  min-width: 100%;
  background-size: cover;
  background-position: center;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
  background-attachment: fixed;
  background-repeat: no-repeat;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;


	background-color: #eceff1;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}
.connexion {
	max-width: 500px;
	font-size:30px;
}
.connexion > * {
	width: 100%;
}
.connexion > h1{
	font-family: 'Arial', Indie Flower,cursive;
	text-align: center;
	color: rgb(240, 139, 8);
}
.connexion > p{
	font-family: 'Indie Flower', cursive;
	text-align: center;
	color: #ffffffe3;
}
.connexion > input {
	box-sizing: border-box;
	font-size: 24px;
	padding: 5px;
	border: 5px solid rgba(240, 139, 8, 0.801);
	background-color: #fff;
	border-width: 0 0 5px 0;
	outline: none;
}
button {
	font-size: 20px;
	border: none;
	color: white;
	background-color: rgba(255, 120, 9, 0.712);
	margin-top: 10px;
	padding: 10px;
	cursor: pointer;
	border-radius: 2px;
}


`
export default StyledConnexion;