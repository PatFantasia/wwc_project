

import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import * as Icon from 'react-feather';
 
import $ from "jquery";
 
 

class App extends Component {
    componentDidMount() {
        
      }
      
    render () {
        <Helmet>
            {/* <script
            src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"
            /> */}
            <script
            src="../../../public/assets/js/app.min"
            
        />
         
      </Helmet> 
        return (
            <> 
             
      
    
            <div className="no-scroll navigation-show">
                {/* <!-- begin::header --> */}
                <div className="header">
                    <div className="header-left">
                        <div className="navigation-toggler">
                            <a href="#" data-action="navigation-toggler">
                                {/* <i data-feather="menu"></i> */}
                                <Icon.Menu/>
                            </a>
                        </div>
                        <div className="header-logo">
                            <a href="https://github.com/" >
                                <img className="logo" src="./assets/media/image/logo.png" alt="logo"/>
                                <img className="logo-light" src="./assets/media/image/logo-light.png" alt="light logo"/>
                            </a>
                        </div>
                    </div>
        
                    <div className="header-body">
                        <div classNam="header-body-left">
                            <div className="page-title">
                                <h4>E-commerce</h4>
                            </div>
                        </div>
                        <div className="header-body-right">
                            <ul className="navbar-nav">
        
                                <li className="nav-item">
                                    <a href="#" className="nav-link" data-toggle="dropdown">
                                        <img width="18" src="./assets/media/image/flags/262-united-kingdom.png" alt="flag"
                                            className="mr-2 rounded" title="United Kingdom"/> EN
                                    </a>
                                    <div className="dropdown-menu">
                                        <a href="#" className="dropdown-item">
                                            <img width="18" src="./assets/media/image/flags/003-tanzania.png"
                                                className="mr-2 rounded"
                                                alt="flag"/>
                                            Tanzania
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <img width="18" src="./assets/media/image/flags/261-china.png"
                                                className="mr-2 rounded"
                                                alt="flag"/> China
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <img width="18" src="./assets/media/image/flags/013-tunisia.png"
                                                className="mr-2 rounded"
                                                alt="flag"/>
                                            Tunisia
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <img width="18" src="./assets/media/image/flags/044-spain.png"
                                                className="mr-2 rounded"
                                                alt="flag"/> Spain
                                        </a>
                                    </div>
                                </li>
        
                                {/* <!-- begin::header fullscreen --> */}
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link" title="Fullscreen" data-toggle="fullscreen">
                                        {/* <i className="maximize" data-feather="maximize"></i>
                                        <i className="minimize" data-feather="minimize"></i> */}
                                        <Icon.Maximize className="maximize"/>
                                        <Icon.Minimize className="minimize"/>
                                    </a>
                                </li>
                                {/* <!-- end::header fullscreen --> */}
        
                                {/* <!-- begin::header search --> */}
                                <li className="nav-item">
                                    <a href="#" className="nav-link" title="Recherche" data-toggle="dropdown">
                                        {/* <i data-feather="search"></i> */}
                                        <Icon.Search/>
                                    </a>
                                    <div className="dropdown-menu p-2 dropdown-menu-right">
                                        <form>
                                            <div className="input-group">
                                                <input 
                                                  type="text" 
                                                  className="form-control" 
                                                  placeholder="Recherche"
                                                />
                                                <div className="input-group-prepend">
                                                    <button className="btn" type="button">
                                                        {/* <i data-feather="search"></i> */}
                                                        <Icon.Search/>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                {/* <!-- end::header search --> */}
        
                                {/* <!-- begin::apps --> */}
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link" title="Apps" data-toggle="dropdown">
                                        {/* <i data-feather="box"></i> */}
                                        <Icon.Box/>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                                        <div className="bg-dark p-4 text-center d-flex justify-content-between">
                                            <h5 className="mb-0">Apps</h5>
                                        </div>
                                        <div className="p-3">
                                            <div className="row row-xs">
                                                <div className="col-6">
                                                    <a href="apps-chat.html">
                                                        <div className="border-radius-1 text-center mb-3">
                                                            <figure className="avatar avatar-lg border-0">
                                                                <span className="avatar-title bg-primary text-white rounded-circle">
                                                                    {/* <i className="width-30 height-30" data-feather="message-circle"></i> */}
                                                                    <Icon.MessageCircle className="width-30 height-30" />
                                                                </span>
                                                            </figure>
                                                            <div className="mt-2">Chat</div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="apps-inbox.html">
                                                        <div className="border-radius-1 text-center mb-3">
                                                            <figure className="avatar avatar-lg border-0">
                                                                <span className="avatar-title bg-secondary text-white rounded-circle">
                                                                    {/* <i className="width-30 height-30" data-feather="mail"></i> */}
                                                                    <Icon.Mail className="width-30 height-30"/>
                                                                </span>
                                                            </figure>
                                                            <div className="mt-2">Mail</div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="apps-todo.html">
                                                        <div className="border-radius-1 text-center">
                                                            <figure className="avatar avatar-lg border-0">
                                                                <span className="avatar-title bg-info text-white rounded-circle">
                                                                    {/* <i className="width-30 height-30" data-feather="check-circle"></i> */}
                                                                    <Icon.CheckCircle className="width-30 height-30"/>
                                                                </span>
                                                            </figure>
                                                            <div className="mt-2">Todo</div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="apps-file-manager.html">
                                                        <div className="border-radius-1 text-center">
                                                            <figure className="avatar avatar-lg border-0">
                                                                <span className="avatar-title bg-warning text-white rounded-circle">
                                                                    {/* <i className="width-30 height-30" data-feather="file"></i> */}
                                                                    <Icon.File className="width-30 height-30" />
                                                                </span>
                                                            </figure>
                                                            <div className="mt-2">File Manager</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <!-- end::apps --> */}
        
                                {/* <!-- begin::header messages dropdown --> */}
                                
                                {/* <!-- end::header messages dropdown --> */}
        
                                {/* <!-- begin::header notification dropdown --> */}
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link nav-link-notify" title="Notifications" data-toggle="dropdown">
                                        {/* <i data-feather="bell"></i> */}
                                        <Icon.Bell/>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                                        <div className="bg-dark p-4 text-center d-flex justify-content-between align-items-center">
                                            <h5 className="mb-0">Notifications</h5>
                                            <small className="font-size-11 opacity-7">1 unread notifications</small>
                                        </div>
                                        <div>
                                            <ul className="list-group list-group-flush">
                                                <li>
                                                    <a href="#" className="list-group-item d-flex align-items-center hide-show-toggler">
                                                        <div>
                                                            <figure className="avatar mr-2">
                                                                <span
                                                                    className="avatar-title bg-success-bright text-success rounded-circle">
                                                                    <i className="ti-user"></i>
                                                                </span>
                                                            </figure>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                                New customer registered
                                                                <i title="Mark as read" data-toggle="tooltip"
                                                                  className="hide-show-toggler-item fa fa-circle-o font-size-11"></i>
                                                            </p>
                                                            <span className="text-muted small">20 min ago</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="text-divider small pb-2 pl-3 pt-3">
                                                    <span>Old notifications</span>
                                                </li>
                                                <li>
                                                    <a href="#" className="list-group-item d-flex align-items-center hide-show-toggler">
                                                        <div>
                                                            <figure className="avatar mr-2">
                                                                <span
                                                                    className="avatar-title bg-warning-bright text-warning rounded-circle">
                                                                    <i className="ti-package"></i>
                                                                </span>
                                                            </figure>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                                New Order Recieved
                                                                <i title="Mark as unread" data-toggle="tooltip"
                                                                  className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                                            </p>
                                                            <span className="text-muted small">45 sec ago</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                      className="list-group-item d-flex align-items-center hide-show-toggler">
                                                        <div>
                                                            <figure className="avatar mr-2">
                                                                <span className="avatar-title bg-danger-bright text-danger rounded-circle">
                                                                    <i className="ti-server"></i>
                                                                </span>
                                                            </figure>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                                Server Limit Reached!
                                                                <i title="Mark as unread" data-toggle="tooltip"
                                                                  className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                                            </p>
                                                            <span className="text-muted small">55 sec ago</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                      className="list-group-item d-flex align-items-center hide-show-toggler">
                                                        <div>
                                                            <figure className="avatar mr-2">
                                                                <span className="avatar-title bg-info-bright text-info rounded-circle">
                                                                    <i className="ti-layers"></i>
                                                                </span>
                                                            </figure>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 line-height-20 d-flex align-items-center justify-content-between">
                                                                Apps are ready for update
                                                                <i title="Mark as unread" data-toggle="tooltip"
                                                                  className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                                            </p>
                                                            <span className="text-muted small">Yesterday</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="p-2 text-right border-top">
                                            <ul className="list-inline small">
                                                <li className="list-inline-item mb-0">
                                                    <a href="#">Mark All Read</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* <!-- end::header notification dropdown --> */}
        
                                {/* <!-- begin::settings --> */}
                              
                                {/* <!-- end::settings --> */}
        
                                {/* <!-- begin::user menu --> */}
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link" title="User menu" data-toggle="dropdown" aria-expanded="false">
                                        <span className="mr-2 d-sm-inline d-none">Roxana Roussell</span>
                                        <figure className="avatar avatar-sm">
                                            <img src="../../assets/media/image/user/women_avatar1.jpg" className="rounded-circle"
                                                alt="avatar"/>
                                        </figure>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href="#" className="dropdown-item">Profile</a>
                                        <a href="#" className="dropdown-item d-flex">
                                            Followers <span className="text-muted ml-auto">214</span>
                                        </a>
                                        <a href="#" className="dropdown-item d-flex">
                                            Inbox <span className="text-muted ml-auto">18</span>
                                        </a>
                                        <a href="#" className="dropdown-item" data-sidebar-target="#settings">Billing</a>
                                        <a href="#" className="dropdown-item" data-sidebar-target="#settings">Need help?</a>
                                        <a href="#" className="dropdown-item text-danger" data-sidebar-target="#settings">Sign Out!</a>
                                    </div>
                                </li>
                                {/* <!-- end::user menu --> */}
        
                            </ul>
        
                            {/* <!-- begin::mobile header toggler --> */}
                            <ul className="navbar-nav d-flex align-items-center">
                                <li className="nav-item header-toggler">
                                    <a href="#" className="nav-link">
                                        {/* <i data-feather="arrow-down"></i> */}
                                        <Icon.ArrowDown/>
                                    </a>
                                </li>
                            </ul>
                            {/* <!-- end::mobile header toggler --> */}
                        </div>
                    </div>
        
                </div>
                {/* <!-- end::header --> */}
        
                {/* <!-- begin::main --> */}
                <div id="main">
        
                    {/* <!-- begin::navigation --> */}
                    <div className="navigation">
                        <div className="navigation-menu-tab "  >
                            <div className="flex-grow-1" >
                                <ul >
                                    <li>
                                   
                                        <a       
                                            href="#1" data-toggle="tooltip" data-placement="right" title="Tableau de Bord"
                                          data-nav-target="#dashboards">
                                            {/* <i data-feather="bar-chart-2"></i> */}
                                            <Icon.BarChart2 />
                                        </a>
                                     
                                    </li>
                                    <li>
                                   
                                        <a    href="#" data-toggle="tooltip"    
                                          data-placement="right" title="Profil" data-nav-target="#apps">
                                            {/* <i data-feather="command"></i> */}
                                            <Icon.Command/>
                                        </a>
                               
                                    </li>
                                    <li>
                                        <a   href="#" data-toggle="tooltip"
                                          data-placement="right" title="Archives"
                                          data-nav-target="#elements">
                                            {/* <i data-feather="layers"></i> */}
                                            <Icon.Layers/>
                                        </a>
                                    </li>
                                    <li>
                                        <a   href="#" data-toggle="tooltip"
                                          data-placement="right" title="Utilisateurs" data-nav-target="#pages">
                                            {/* <i data-feather="copy"></i> */}
                                            <Icon.Copy/>
                                        </a>
                                    </li>
                                    <li>
                                        <a   href="#" data-toggle="tooltip"
                                          data-placement="right" title="config" data-nav-target="#config">
                                          {/* <i data-feather="settings"></i> */}
                                          <Icon.Settings/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <a href="#" data-toggle="tooltip" data-placement="right" title="Mode Sombre">
                                            {/* <i data-feather="moon"></i> */}
                                            <Icon.Moon/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="pages-login.html" data-toggle="tooltip" data-placement="right" title="Logout"
                                          target="_blank">
                                            {/* <i data-feather="log-out"></i> */}
                                            <Icon.LogOut/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="navigation-menu-body">
                            <div className="navigation-menu-group">
        
                                <div  
                                  className="open"
                                  id="dashboards">
                                    <ul>
                                        <li className="navigation-divider">Tableau de Bord</li>
                                        <li>
                                            <a  className="active"
                                                href="dashboards-one.html">Activités Récentes</a></li>
                                        <li>
                                            <a  href="dashboards-two.html">Notifications</a></li>
                                        <li>
                                            <a  href="dashboards-three.html">Analyse du Stocage</a></li>
                                      
                                        
                                        
                                    </ul>
                                </div>
                                <div  id="apps">
                                    <ul>
                                        <li className="navigation-divider">Mon Profil</li>
                                        
                                        <li>
                                            <a  href="apps-file-manager.html">
                                                <span>Profil d'Utilisateurs</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a  href="apps-file-manager.html">
                                                <span>Données Personnelles</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a  href="apps-file-manager.html">
                                                <span>Paramètre du Compte</span>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div   id="elements">
                                    <ul>
                                        <li className="navigation-divider">Archives</li>
                                        
                                        <li>
                                            <a  href="elements-avatar.html">Explorateurs</a>
                                            
                                        </li>
                                        <li>
                                            <a  href="elements-icons.html">Catégories</a></li>
                                        <li>
                                            <a  href="elements-colors.html">Paramètres d'importations</a></li>
                                      
                                        <li>
                                            <a href="#" className="d-flex align-items-start">
                                                <div>
                                                    <figure className="avatar mr-2">
                                                        <span className="avatar-title bg-warning rounded-circle">
                                                            <i className="ti-bar-chart-alt"></i>
                                                        </span>
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h6 className="mb-0">Archives</h6>
                                                    <p className="text-muted mb-0 small">Statistiques </p>
                                                    <h4 className="mb-0">$50.958</h4>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex align-items-start">
                                                <div>
                                                    <figure className="avatar mr-2">
                                                        <span className="avatar-title bg-success rounded-circle">
                                                            <i className="ti-world"></i>
                                                        </span>
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h6 className="mb-0">Stockages</h6>
                                                    <p className="text-muted mb-0 small">Statistiques</p>
                                                    <h4 className="mb-0">35</h4>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex align-items-start">
                                                <div>
                                                    <figure className="avatar mr-2">
                                                        <span className="avatar-title bg-info rounded-circle">
                                                            <i className="ti-user"></i>
                                                        </span>
                                                    </figure>
                                                </div>
                                                <div>
                                                    <h6 className="mb-0">Utilisateurs</h6>
                                                    <p className="text-muted mb-0 small">Statistiques</p>
                                                    <h4 className="mb-0">5.301</h4>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div   id="pages">
                                    <ul>
                                        <li className="navigation-divider">Utilisateurs</li>
                                        <li><a href="pages-login.html" target="_blank">Liste des Utilisateurs</a></li>
                                        <li><a href="pages-register.html" target="_blank">Ajouter un Utilisateur</a></li>
                                    
                                        <li>
                                            <a href="#">Menu Level</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Menu Level</a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">Menu Level </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div  id="config">
                                    <ul>
                                        <li className="navigation-divider">Configurations</li>
                                        <li>
                                            <a href="pages-login.html" target="_blank">Notifications</a>
                                        </li>
                                        <li><a href="pages-register.html" target="_blank">Sécurité</a></li>
                                        
                                        <li>
                                            <a href="#">Menu Level</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Menu Level</a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">Menu Level </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end::navigation --> */}
        
                    
        
                    {/* <!-- begin::main-content --> */}
                    <div className="main-content">
        
        
        
                    {/* <!-- begin::footer --> */}
                    <footer>
                        <div className="container-fluid">
                            <div>© 2020 PiDocx - <a href="http://laborasyon.com/" target="_blank">Laborasyon</a></div>
                            <div>
                                <nav className="nav">
                                    <a href="https://themeforest.net/licenses/standard" className="nav-link">Licenses</a>
                                    <a href="#" className="nav-link">Change Log</a>
                                    <a href="#" className="nav-link">Get Help</a>
                                </nav>
                            </div>
                        </div>
                    </footer>
                    {/* <!-- end::footer --> */}
        
                    </div>
                    {/* <!-- end::main-content --> */}
        
                </div>
                {/* <!-- end::main --> */}
        
                
        
                    {/* <!-- To use theme colors with Javascript --> */}
                    <div className="colors">
                        <div className="bg-primary"></div>
                        <div className="bg-primary-bright"></div>
                        <div className="bg-secondary"></div>
                        <div className="bg-secondary-bright"></div>
                        <div className="bg-info"></div>
                        <div className="bg-info-bright"></div>
                        <div className="bg-success"></div>
                        <div className="bg-success-bright"></div>
                        <div className="bg-danger"></div>
                        <div className="bg-danger-bright"></div>
                        <div className="bg-warning"></div>
                        <div className="bg-warning-bright"></div>
                    </div>
        
                    
        
        
            </div>
         
            
            </>
         )
    }
}

export default App;

// import React from 'react';
// import * as Icon from 'react-feather';
// // import {Nav, NavDropdown, Dropdown, DropdownButton} from 'react-bootstrap';
// // import { HashLink as Link } from 'react-router-hash-link';
// // import ScrollableAnchor from 'react-scrollable-anchor';


// const App = () => {
//     // const [ancName, setAncName] = React.useState("disable");
//     // const [divName, setDivName] = React.useState("close");
//     // const [isActive, setIsActive] = React.useState(false);
    
//     // const divRef = React.useRef("dashboards");

//     // Anchor's tag
//     // const AncRef1 = React.useRef("active");
//     // const AncRef2 = React.useRef("active");
    
//     // const handleDiv= () => {
//     //     const span = divRef.current; // corresponding DOM node
//         // span.id = "sucess";
//         // span.className = "close";
//     //     if(span.className !== "open"){
//     //         span.className="open"
//     //     }else {
//     //         span.className = "close"
//     //     }
//     //     console.log('handle div', divRef.current);
//     // }
     
   
    
//     // const handleAnc1= () => {
//     //         const span = AncRef1.current.id; // corresponding DOM node
//     //         const element = document.getElementById(span);
//     //         element.classList.toggle("active");
//     //         if(AncRef1.current.className === 'active'){
//     //             const dashboard = 'open';
//     //         }
//     // }
 
//   return (
//     <div className="no-scroll navigation-show">
//         {/* <!-- begin::header --> */}
//         <div className="header">
//             <div className="header-left">
//                 <div className="navigation-toggler">
//                     <a href="#" data-action="navigation-toggler">
//                         {/* <i data-feather="menu"></i> */}
//                         <Icon.Menu/>
//                     </a>
//                 </div>
//                 <div className="header-logo">
//                     <a href="https://github.com/" >
//                         <img className="logo" src="./assets/media/image/logo.png" alt="logo"/>
//                         <img className="logo-light" src="./assets/media/image/logo-light.png" alt="light logo"/>
//                     </a>
//                 </div>
//             </div>

//             <div className="header-body">
//                 <div className="header-body-left">
//                     <div className="page-title">
//                         <h4>E-commerce</h4>
//                     </div>
//                 </div>
//                 <div className="header-body-right">
//                     <ul className="navbar-nav">

//                         <li className="nav-item">
//                             <a href="#" className="nav-link" data-toggle="dropdown">
//                                 <img width="18" src="./assets/media/image/flags/262-united-kingdom.png" alt="flag"
//                                     className="mr-2 rounded" title="United Kingdom"/> EN
//                             </a>
//                             <div className="dropdown-menu">
//                                 <a href="#" className="dropdown-item">
//                                     <img width="18" src="./assets/media/image/flags/003-tanzania.png"
//                                         className="mr-2 rounded"
//                                         alt="flag"/>
//                                     Tanzania
//                                 </a>
//                                 <a href="#" className="dropdown-item">
//                                     <img width="18" src="./assets/media/image/flags/261-china.png"
//                                         className="mr-2 rounded"
//                                         alt="flag"/> China
//                                 </a>
//                                 <a href="#" className="dropdown-item">
//                                     <img width="18" src="./assets/media/image/flags/013-tunisia.png"
//                                         className="mr-2 rounded"
//                                         alt="flag"/>
//                                     Tunisia
//                                 </a>
//                                 <a href="#" className="dropdown-item">
//                                     <img width="18" src="./assets/media/image/flags/044-spain.png"
//                                         className="mr-2 rounded"
//                                         alt="flag"/> Spain
//                                 </a>
//                             </div>
//                         </li>

//                         {/* <!-- begin::header fullscreen --> */}
//                         <li className="nav-item dropdown">
//                             <a href="#" className="nav-link" title="Fullscreen" data-toggle="fullscreen">
//                                 {/* <i className="maximize" data-feather="maximize"></i>
//                                 <i className="minimize" data-feather="minimize"></i> */}
//                                 <Icon.Maximize className="maximize"/>
//                                 <Icon.Minimize className="minimize"/>
//                             </a>
//                         </li>
//                         {/* <!-- end::header fullscreen --> */}

//                         {/* <!-- begin::header search --> */}
//                         <li className="nav-item">
//                             <a href="#" className="nav-link" title="Recherche" data-toggle="dropdown">
//                                 {/* <i data-feather="search"></i> */}
//                                 <Icon.Search/>
//                             </a>
//                             <div className="dropdown-menu p-2 dropdown-menu-right">
//                                 <form>
//                                     <div className="input-group">
//                                         <input 
//                                           type="text" 
//                                           className="form-control" 
//                                           placeholder="Recherche"
//                                         />
//                                         <div className="input-group-prepend">
//                                             <button className="btn" type="button">
//                                                 {/* <i data-feather="search"></i> */}
//                                                 <Icon.Search/>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </li>
//                         {/* <!-- end::header search --> */}

//                         {/* <!-- begin::apps --> */}
//                         <li className="nav-item dropdown">
//                             <a href="#" className="nav-link" title="Apps" data-toggle="dropdown">
//                                 {/* <i data-feather="box"></i> */}
//                                 <Icon.Box/>
//                             </a>
//                             <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
//                                 <div className="bg-dark p-4 text-center d-flex justify-content-between">
//                                     <h5 className="mb-0">Apps</h5>
//                                 </div>
//                                 <div className="p-3">
//                                     <div className="row row-xs">
//                                         <div className="col-6">
//                                             <a href="apps-chat.html">
//                                                 <div className="border-radius-1 text-center mb-3">
//                                                     <figure className="avatar avatar-lg border-0">
//                                                         <span className="avatar-title bg-primary text-white rounded-circle">
//                                                             {/* <i className="width-30 height-30" data-feather="message-circle"></i> */}
//                                                             <Icon.MessageCircle className="width-30 height-30" />
//                                                         </span>
//                                                     </figure>
//                                                     <div className="mt-2">Chat</div>
//                                                 </div>
//                                             </a>
//                                         </div>
//                                         <div className="col-6">
//                                             <a href="apps-inbox.html">
//                                                 <div className="border-radius-1 text-center mb-3">
//                                                     <figure className="avatar avatar-lg border-0">
//                                                         <span className="avatar-title bg-secondary text-white rounded-circle">
//                                                             {/* <i className="width-30 height-30" data-feather="mail"></i> */}
//                                                             <Icon.Mail className="width-30 height-30"/>
//                                                         </span>
//                                                     </figure>
//                                                     <div className="mt-2">Mail</div>
//                                                 </div>
//                                             </a>
//                                         </div>
//                                         <div className="col-6">
//                                             <a href="apps-todo.html">
//                                                 <div className="border-radius-1 text-center">
//                                                     <figure className="avatar avatar-lg border-0">
//                                                         <span className="avatar-title bg-info text-white rounded-circle">
//                                                             {/* <i className="width-30 height-30" data-feather="check-circle"></i> */}
//                                                             <Icon.CheckCircle className="width-30 height-30"/>
//                                                         </span>
//                                                     </figure>
//                                                     <div className="mt-2">Todo</div>
//                                                 </div>
//                                             </a>
//                                         </div>
//                                         <div className="col-6">
//                                             <a href="apps-file-manager.html">
//                                                 <div className="border-radius-1 text-center">
//                                                     <figure className="avatar avatar-lg border-0">
//                                                         <span className="avatar-title bg-warning text-white rounded-circle">
//                                                             {/* <i className="width-30 height-30" data-feather="file"></i> */}
//                                                             <Icon.File className="width-30 height-30" />
//                                                         </span>
//                                                     </figure>
//                                                     <div className="mt-2">File Manager</div>
//                                                 </div>
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                         {/* <!-- end::apps --> */}

//                         {/* <!-- begin::header messages dropdown --> */}
                        
//                         {/* <!-- end::header messages dropdown --> */}

//                         {/* <!-- begin::header notification dropdown --> */}
//                         <li className="nav-item dropdown">
//                             <a href="#" className="nav-link nav-link-notify" title="Notifications" data-toggle="dropdown">
//                                 {/* <i data-feather="bell"></i> */}
//                                 <Icon.Bell/>
//                             </a>
//                             <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
//                                 <div className="bg-dark p-4 text-center d-flex justify-content-between align-items-center">
//                                     <h5 className="mb-0">Notifications</h5>
//                                     <small className="font-size-11 opacity-7">1 unread notifications</small>
//                                 </div>
//                                 <div>
//                                     <ul className="list-group list-group-flush">
//                                         <li>
//                                             <a href="#" className="list-group-item d-flex align-items-center hide-show-toggler">
//                                                 <div>
//                                                     <figure className="avatar mr-2">
//                                                         <span
//                                                             className="avatar-title bg-success-bright text-success rounded-circle">
//                                                             <i className="ti-user"></i>
//                                                         </span>
//                                                     </figure>
//                                                 </div>
//                                                 <div className="flex-grow-1">
//                                                     <p className="mb-0 line-height-20 d-flex justify-content-between">
//                                                         New customer registered
//                                                         <i title="Mark as read" data-toggle="tooltip"
//                                                           className="hide-show-toggler-item fa fa-circle-o font-size-11"></i>
//                                                     </p>
//                                                     <span className="text-muted small">20 min ago</span>
//                                                 </div>
//                                             </a>
//                                         </li>
//                                         <li className="text-divider small pb-2 pl-3 pt-3">
//                                             <span>Old notifications</span>
//                                         </li>
//                                         <li>
//                                             <a href="#" className="list-group-item d-flex align-items-center hide-show-toggler">
//                                                 <div>
//                                                     <figure className="avatar mr-2">
//                                                         <span
//                                                             className="avatar-title bg-warning-bright text-warning rounded-circle">
//                                                             <i className="ti-package"></i>
//                                                         </span>
//                                                     </figure>
//                                                 </div>
//                                                 <div className="flex-grow-1">
//                                                     <p className="mb-0 line-height-20 d-flex justify-content-between">
//                                                         New Order Recieved
//                                                         <i title="Mark as unread" data-toggle="tooltip"
//                                                           className="hide-show-toggler-item fa fa-check font-size-11"></i>
//                                                     </p>
//                                                     <span className="text-muted small">45 sec ago</span>
//                                                 </div>
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a href="#"
//                                               className="list-group-item d-flex align-items-center hide-show-toggler">
//                                                 <div>
//                                                     <figure className="avatar mr-2">
//                                                         <span className="avatar-title bg-danger-bright text-danger rounded-circle">
//                                                             <i className="ti-server"></i>
//                                                         </span>
//                                                     </figure>
//                                                 </div>
//                                                 <div className="flex-grow-1">
//                                                     <p className="mb-0 line-height-20 d-flex justify-content-between">
//                                                         Server Limit Reached!
//                                                         <i title="Mark as unread" data-toggle="tooltip"
//                                                           className="hide-show-toggler-item fa fa-check font-size-11"></i>
//                                                     </p>
//                                                     <span className="text-muted small">55 sec ago</span>
//                                                 </div>
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a href="#"
//                                               className="list-group-item d-flex align-items-center hide-show-toggler">
//                                                 <div>
//                                                     <figure className="avatar mr-2">
//                                                         <span className="avatar-title bg-info-bright text-info rounded-circle">
//                                                             <i className="ti-layers"></i>
//                                                         </span>
//                                                     </figure>
//                                                 </div>
//                                                 <div className="flex-grow-1">
//                                                     <p className="mb-0 line-height-20 d-flex align-items-center justify-content-between">
//                                                         Apps are ready for update
//                                                         <i title="Mark as unread" data-toggle="tooltip"
//                                                           className="hide-show-toggler-item fa fa-check font-size-11"></i>
//                                                     </p>
//                                                     <span className="text-muted small">Yesterday</span>
//                                                 </div>
//                                             </a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 <div className="p-2 text-right border-top">
//                                     <ul className="list-inline small">
//                                         <li className="list-inline-item mb-0">
//                                             <a href="#">Mark All Read</a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </li>
//                         {/* <!-- end::header notification dropdown --> */}

//                         {/* <!-- begin::settings --> */}
                      
//                         {/* <!-- end::settings --> */}

//                         {/* <!-- begin::user menu --> */}
//                         <li className="nav-item dropdown">
//                             <a href="#" className="nav-link" title="User menu" data-toggle="dropdown" aria-expanded="false">
//                                 <span className="mr-2 d-sm-inline d-none">Roxana Roussell</span>
//                                 <figure className="avatar avatar-sm">
//                                     <img src="../../assets/media/image/user/women_avatar1.jpg" className="rounded-circle"
//                                         alt="avatar"/>
//                                 </figure>
//                             </a>
//                             <div className="dropdown-menu dropdown-menu-right">
//                                 <a href="#" className="dropdown-item">Profile</a>
//                                 <a href="#" className="dropdown-item d-flex">
//                                     Followers <span className="text-muted ml-auto">214</span>
//                                 </a>
//                                 <a href="#" className="dropdown-item d-flex">
//                                     Inbox <span className="text-muted ml-auto">18</span>
//                                 </a>
//                                 <a href="#" className="dropdown-item" data-sidebar-target="#settings">Billing</a>
//                                 <a href="#" className="dropdown-item" data-sidebar-target="#settings">Need help?</a>
//                                 <a href="#" className="dropdown-item text-danger" data-sidebar-target="#settings">Sign Out!</a>
//                             </div>
//                         </li>
//                         {/* <!-- end::user menu --> */}

//                     </ul>

//                     {/* <!-- begin::mobile header toggler --> */}
//                     <ul className="navbar-nav d-flex align-items-center">
//                         <li className="nav-item header-toggler">
//                             <a href="#" className="nav-link">
//                                 {/* <i data-feather="arrow-down"></i> */}
//                                 <Icon.ArrowDown/>
//                             </a>
//                         </li>
//                     </ul>
//                     {/* <!-- end::mobile header toggler --> */}
//                 </div>
//             </div>

//         </div>
//         {/* <!-- end::header --> */}

//         {/* <!-- begin::main --> */}
//         <div id="main">

//             {/* <!-- begin::navigation --> */}
//             <div className="navigation">
//                 <div  className="navigation-menu-tab "   >
//                     <div className="flex-grow-1" >
//                         <ul >
//                             <li>
                           
//                                 <a       
//                                     href="#1" data-toggle="tooltip" data-placement="right" title="Tableau de Bord"
//                                   data-nav-target="#dashboards">
//                                     {/* <i data-feather="bar-chart-2"></i> */}
//                                     <Icon.BarChart2 />
//                                 </a>
                             
//                             </li>
//                             <li>
                           
//                                 <a    href="#" data-toggle="tooltip"    
//                                   data-placement="right" title="Profil" data-nav-target="#apps">
//                                     {/* <i data-feather="command"></i> */}
//                                     <Icon.Command/>
//                                 </a>
                       
//                             </li>
//                             <li>
//                                 <a   href="#" data-toggle="tooltip"
//                                   data-placement="right" title="Archives"
//                                   data-nav-target="#elements">
//                                     {/* <i data-feather="layers"></i> */}
//                                     <Icon.Layers/>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a   href="#" data-toggle="tooltip"
//                                   data-placement="right" title="Utilisateurs" data-nav-target="#pages">
//                                     {/* <i data-feather="copy"></i> */}
//                                     <Icon.Copy/>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a   href="#" data-toggle="tooltip"
//                                   data-placement="right" title="config" data-nav-target="#config">
//                                   {/* <i data-feather="settings"></i> */}
//                                   <Icon.Settings/>
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                     <div>
//                         <ul>
//                             <li>
//                                 <a href="#" data-toggle="tooltip" data-placement="right" title="Mode Sombre">
//                                     {/* <i data-feather="moon"></i> */}
//                                     <Icon.Moon/>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="pages-login.html" data-toggle="tooltip" data-placement="right" title="Logout"
//                                   target="_blank">
//                                     {/* <i data-feather="log-out"></i> */}
//                                     <Icon.LogOut/>
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="navigation-menu-body">
//                     <div className="navigation-menu-group">

//                         <div  
//                           className="open"
//                           id="dashboards">
//                             <ul>
//                                 <li className="navigation-divider">Tableau de Bord</li>
//                                 <li>
//                                     <a  className="active"
//                                         href="dashboards-one.html">Activités Récentes</a></li>
//                                 <li>
//                                     <a  href="dashboards-two.html">Notifications</a></li>
//                                 <li>
//                                     <a  href="dashboards-three.html">Analyse du Stocage</a></li>
                              
                                
                                
//                             </ul>
//                         </div>
//                         <div  id="apps">
//                             <ul>
//                                 <li className="navigation-divider">Mon Profil</li>
                                
//                                 <li>
//                                     <a  href="apps-file-manager.html">
//                                         <span>Profil d'Utilisateurs</span>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a  href="apps-file-manager.html">
//                                         <span>Données Personnelles</span>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a  href="apps-file-manager.html">
//                                         <span>Paramètre du Compte</span>
//                                     </a>
//                                 </li>
                                
//                             </ul>
//                         </div>
//                         <div   id="elements">
//                             <ul>
//                                 <li className="navigation-divider">Archives</li>
                                
//                                 <li>
//                                     <a  href="elements-avatar.html">Explorateurs</a>
                                    
//                                 </li>
//                                 <li>
//                                     <a  href="elements-icons.html">Catégories</a></li>
//                                 <li>
//                                     <a  href="elements-colors.html">Paramètres d'importations</a></li>
                              
//                                 <li>
//                                     <a href="#" className="d-flex align-items-start">
//                                         <div>
//                                             <figure className="avatar mr-2">
//                                                 <span className="avatar-title bg-warning rounded-circle">
//                                                     <i className="ti-bar-chart-alt"></i>
//                                                 </span>
//                                             </figure>
//                                         </div>
//                                         <div>
//                                             <h6 className="mb-0">Archives</h6>
//                                             <p className="text-muted mb-0 small">Statistiques </p>
//                                             <h4 className="mb-0">$50.958</h4>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="d-flex align-items-start">
//                                         <div>
//                                             <figure className="avatar mr-2">
//                                                 <span className="avatar-title bg-success rounded-circle">
//                                                     <i className="ti-world"></i>
//                                                 </span>
//                                             </figure>
//                                         </div>
//                                         <div>
//                                             <h6 className="mb-0">Stockages</h6>
//                                             <p className="text-muted mb-0 small">Statistiques</p>
//                                             <h4 className="mb-0">35</h4>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="d-flex align-items-start">
//                                         <div>
//                                             <figure className="avatar mr-2">
//                                                 <span className="avatar-title bg-info rounded-circle">
//                                                     <i className="ti-user"></i>
//                                                 </span>
//                                             </figure>
//                                         </div>
//                                         <div>
//                                             <h6 className="mb-0">Utilisateurs</h6>
//                                             <p className="text-muted mb-0 small">Statistiques</p>
//                                             <h4 className="mb-0">5.301</h4>
//                                         </div>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div   id="pages">
//                             <ul>
//                                 <li className="navigation-divider">Utilisateurs</li>
//                                 <li><a href="pages-login.html" target="_blank">Liste des Utilisateurs</a></li>
//                                 <li><a href="pages-register.html" target="_blank">Ajouter un Utilisateur</a></li>
                            
//                                 <li>
//                                     <a href="#">Menu Level</a>
//                                     <ul>
//                                         <li>
//                                             <a href="#">Menu Level</a>
//                                             <ul>
//                                                 <li>
//                                                     <a href="#">Menu Level </a>
//                                                 </li>
//                                             </ul>
//                                         </li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div  id="config">
//                             <ul>
//                                 <li className="navigation-divider">Configurations</li>
//                                 <li>
//                                     <a href="pages-login.html" target="_blank">Notifications</a>
//                                 </li>
//                                 <li><a href="pages-register.html" target="_blank">Sécurité</a></li>
                                
//                                 <li>
//                                     <a href="#">Menu Level</a>
//                                     <ul>
//                                         <li>
//                                             <a href="#">Menu Level</a>
//                                             <ul>
//                                                 <li>
//                                                     <a href="#">Menu Level </a>
//                                                 </li>
//                                             </ul>
//                                         </li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* <!-- end::navigation --> */}

            

//             {/* <!-- begin::main-content --> */}
//             <div className="main-content">



//             {/* <!-- begin::footer --> */}
//             <footer>
//                 <div className="container-fluid">
//                     <div>© 2020 PiDocx - <a href="http://laborasyon.com/" target="_blank">Laborasyon</a></div>
//                     <div>
//                         <nav className="nav">
//                             <a href="https://themeforest.net/licenses/standard" className="nav-link">Licenses</a>
//                             <a href="#" className="nav-link">Change Log</a>
//                             <a href="#" className="nav-link">Get Help</a>
//                         </nav>
//                     </div>
//                 </div>
//             </footer>
//             {/* <!-- end::footer --> */}

//             </div>
//             {/* <!-- end::main-content --> */}

//         </div>
//         {/* <!-- end::main --> */}

        

//             {/* <!-- To use theme colors with Javascript --> */}
//             <div className="colors">
//                 <div className="bg-primary"></div>
//                 <div className="bg-primary-bright"></div>
//                 <div className="bg-secondary"></div>
//                 <div className="bg-secondary-bright"></div>
//                 <div className="bg-info"></div>
//                 <div className="bg-info-bright"></div>
//                 <div className="bg-success"></div>
//                 <div className="bg-success-bright"></div>
//                 <div className="bg-danger"></div>
//                 <div className="bg-danger-bright"></div>
//                 <div className="bg-warning"></div>
//                 <div className="bg-warning-bright"></div>
//             </div>

            


//     </div>
//   )
// }

// export default App;

