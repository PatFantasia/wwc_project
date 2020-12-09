import React from 'react';
import { Redirect } from 'react-router-dom';


const Login = (props) => {
  const[state, setState] = React.useState({
    username:"",
    password:""
  });
//   const componentDidMount = () => {
//     <div class="preloader">
//    <div class="preloader-icon"></div>
//  </div>  
//  }
  const [goToApp, setGoToApp] = React.useState(false);

  const {username, password} = state;
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setState(prevState =>( 
      {
        ...prevState,
        [inputName] : inputValue
      }
    ))
  }
  
  const handleGoToApp = event => {
    event.preventDefault()
    setGoToApp(true);
  }
  if(goToApp) {
        return <Redirect push to={`/pseudo/${username}`} />
  }
  return (
       <div className="form-membership">
          <div className="form-wrapper">
          {/* {componentDidMount} */}

                  
              <div id="logo">
                  <img className="logo" src="./assets/media/image/logo.png" alt="image"/>
                  <img className="logo-dark" src="./assets/media/image/logo-dark.html" alt="image"/>
              </div>
              <h5>Connexion</h5>
              <form onSubmit={handleGoToApp}>
                  <div className="form-group">
                      <input  
                        className="form-control"  
                        type="text"  
                        placeholder="Non d'utilisateur ou email" 
                        name="username"
                        value={username}
                        onChange={handleChange}
                        required autoFocus
                      />
                  </div>
                  <div className="form-group">
                      <input 
                        className="form-control" 
                        type="password" 
                        placeholder="Mot de Passe" 
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                      />
                  </div>
                  <div className="form-group d-flex justify-content-between">
                      <div className="custom-control custom-checkbox">
                          <input 
                            type="checkbox" 
                            className="custom-control-input" 
                            defaultChecked="" 
                            id="customCheck1"
                          />
                          <label className="custom-control-label" htmlFor="customCheck1">
                            Se souvenir de moi
                          </label>
                      </div>
                      <a href="pages-recovery-password.html">Mot de passe oublié ?</a>
                  </div>
                  <button className="btn btn-primary btn-block" type="submit" >Connexion</button>
                  <hr/>
                  <p className="text-muted">Pas encore de compte ?</p>
                  <a href="pages-register.html" className="btn btn-outline-light btn-sm">Inscrivez-vous maintenant !</a>
              </form>
          </div>
        </div>
  )
}

export default Login;