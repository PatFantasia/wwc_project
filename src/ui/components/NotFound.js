import React from 'react';
import * as Icon from 'react-feather';
import {Nav, NavDropdown, Dropdown, DropdownButton} from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import ScrollableAnchor from 'react-scrollable-anchor';
const NotFound = () => {
    return (
        <div>
            404 Error
            <div style={{backgroundColor: "yellow"}}>
                <Dropdown.Menu show>
                    <Dropdown.Header>Dropdown header</Dropdown.Header>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                </Dropdown.Menu>
            </div>
            <div>
                <Nav defaultActiveKey="/home" as="ul" className="flex-column">
                    <Nav.Item as="li">
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
            </div>
            <div className="div" eventKey="link-1" id="link-1" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis numquam soluta provident quia recusandae, autem sapiente maxime quasi delectus dicta quam est nisi, accusamus dolorum, perspiciatis veritatis ut eos explicabo?
            </div>
            <DropdownButton
                menuAlign="right"
                drop='right'
                title="Dropdown right"
                id="dropdown-menu-align-right"
                >
                <Dropdown.Item  eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>




            <div id="main">

                 {/* <!-- begin::navigation --> */}
                <div className="navigation">
                    <Nav defaultActiveKey="#1" className="navigation-menu-tab flex-column" as="ul" >
                        <div className="flex-grow-1" >
                            {/* <ul > */}
                                {/* <li> */}
                                <DropdownButton drop='right' >
                                 <Dropdown.ItemText        
                                        href="#1" data-toggle="tooltip" data-placement="right" title="Tableau de Bord"
                                    data-nav-target="#dashboards">
                                        {/* <i data-feather="bar-chart-2"></i> */}
                                        <Icon.BarChart2  style={{ color: 'white'}}/>
                                    </Dropdown.ItemText >
                                    <Dropdown.Item >
                                    <li className="navigation-divider">Tableau de Bord</li>
                                
                               
                               
                                    </Dropdown.Item>
                                    <Dropdown.Item >
                                    <li>
                                    <a  className="active"
                                        href="dashboards-one.html">Activités Récentes</a></li>
                                    </Dropdown.Item>
                                    <Dropdown.Item >
                                    <li>
                                    <a  href="dashboards-two.html">Notifications</a></li>
                                    </Dropdown.Item>
                                    <Dropdown.Item >
                                    <li>
                                    <a  href="dashboards-three.html">Analyse du Stocage</a></li>
                                    </Dropdown.Item>
                                </DropdownButton>
                                {/* </li> */}
                                {/* <li> */}
                                <Nav.Item as="li">
                                    <Nav.Link      href="#" data-toggle="tooltip"    
                                    data-placement="right" title="Profil" data-nav-target="#apps">
                                        {/* <i data-feather="command"></i> */}
                                        <Icon.Command/>
                                    </Nav.Link>
                                </Nav.Item>
                                {/* </li> */}
                                <li>
                                    <Nav.Link   href="#" data-toggle="tooltip"
                                    data-placement="right" title="Archives"
                                    data-nav-target="#elements">
                                        {/* <i data-feather="layers"></i> */}
                                        <Icon.Layers/>
                                    </Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link   href="#" data-toggle="tooltip"
                                    data-placement="right" title="Utilisateurs" data-nav-target="#pages">
                                        {/* <i data-feather="copy"></i> */}
                                        <Icon.Copy/>
                                    </Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link   href="#" data-toggle="tooltip"
                                    data-placement="right" title="config" data-nav-target="#config">
                                    {/* <i data-feather="settings"></i> */}
                                    <Icon.Settings/>
                                    </Nav.Link>
                                </li>
                            {/* </ul> */}
                        </div>
                    </Nav>
                </div>
            </div>
        </div>



    )
}

export default NotFound;


// Login Components

 // <>
        //     <body class="form-membership">

        //         {/* <!-- begin::preloader--> */}
        //         {/* <div class="preloader">
        //             <div class="preloader-icon"></div>
        //         </div> */}
        //         {/* <!-- end::preloader --> */}
        //         <div className="form-wrapper">

                        
        //             {/* <!-- logo --> */}
        //             <div id="logo">
        //                 <img className="logo" src="./images/logo.png" alt="image"/>
        //                 <img className="logo-dark" src="./images/logo-dark.html" alt="image"/>
        //             </div>
        //             {/* <!-- ./ logo --> */}

        //             <h5>Connexion</h5>

        //             {/* <!-- form --> */}
        //             <form>
        //                 <div className="form-group">
        //                     <input type="text" class="form-control" placeholder="Username or email" required autofocus/>
        //                 </div>
        //                 <div className="form-group">
        //                     <input type="password" className="form-control" placeholder="Password" required/>
        //                 </div>
        //                 <div className="form-group d-flex justify-content-between">
        //                     <div className="custom-control custom-checkbox">
        //                         <input type="checkbox" className="custom-control-input" checked="" id="customCheck1"/>
        //                         <label className="custom-control-label" for="customCheck1">Se souvenir de moi</label>
        //                     </div>
        //                     <a href="pages-recovery-password.html">Mot de passe oublié ?</a>
        //                 </div>
        //                 <button className="btn btn-primary btn-block">Connexion</button>
        //                 <hr/>
        //                 {/* <p className="text-muted">Connectez-vous depuis un compte existant</p>
        //                 <ul className="list-inline">
        //                     <li className="list-inline-item">
        //                         <a href="#" className="btn btn-floating btn-facebook">
        //                             <i className="fa fa-facebook"></i>
        //                         </a>
        //                     </li>
        //                     <li className="list-inline-item">
        //                         <a href="#" className="btn btn-floating btn-google">
        //                             <i className="fa fa-google"></i>
        //                         </a>
        //                     </li>
        //                 </ul> */}
        //                 {/* <hr/> */}
        //                 <p className="text-muted">Pas encore de compte ?</p>
        //                 <a href="pages-register.html" className="btn btn-outline-light btn-sm">Inscrivez-vous maintenant !</a>
        //             </form>
        //             {/* <!-- ./ form --> */}
        //         </div>
        //     </body>
        // </>