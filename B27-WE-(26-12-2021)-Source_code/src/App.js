import { useState } from "react";
import "./App.css";
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

export default function App() {
  // const [color, setColor] = useState("green");
  // const styles = { background: color, color: color };
  // const [list, setList] = useState(["red", "yellow"]);
  return (
    <div className="App">
     <Sidebar />
    </div>
  );
}


function Sidebar(){
  return(
  <div id="wrapper">
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#demo">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fa fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>
        <hr className="sidebar-divider my-0"/>
    
    
        <li className="nav-item active">
            <a className="nav-link" href="#demo">
                <i className="fa fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>
    </ul>
    <Content />
  </div>
  );
}

function Content(){
  return(
    
        <div id="content-wrapper" className="d-flex flex-column">


          <div id="content">
            <Topnav />
            <Contentcomp/>
            <Centercontent/>
          </div>
        </div>
    
  );
}

function Topnav(){
  return(
    
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

   
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars"></i>
          </button>


          <form
              className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                  <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                      aria-label="Search" aria-describedby="basic-addon2"/>
                  <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                          <i className="fa fa-search fa-sm"></i>
                      </button>
                  </div>
              </div>
          </form>


          <ul className="navbar-nav ml-auto">

            
              <li className="nav-item dropdown no-arrow d-sm-none">
                  <a className="nav-link dropdown-toggle" href="#demo" id="searchDropdown" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-search fa-fw"></i>
                  </a>
                
                  <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown">
                      <form className="form-inline mr-auto w-100 navbar-search">
                          <div className="input-group">
                              <input type="text" className="form-control bg-light border-0 small"
                                  placeholder="Search for..." aria-label="Search"
                                  aria-describedby="basic-addon2"/>
                              <div className="input-group-append">
                                  <button className="btn btn-primary" type="button">
                                      <i className="fa fa-search fa-sm"></i>
                                  </button>
                              </div>
                          </div>
                      </form>
                  </div>
              </li>

            
              <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="#demo" id="alertsDropdown" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-bell fa-fw"></i>
                    
                      <span className="badge badge-danger badge-counter">3+</span>
                  </a>
                  
                 
              </li>

            
              <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="#demo" id="messagesDropdown" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-envelope fa-fw"></i>
                    
                      <span className="badge badge-danger badge-counter">7</span>
                  </a>
                
                 
              </li>

              <div className="topbar-divider d-none d-sm-block"></div>

              
              <li className="nav-item dropdown no-arrow">
                  <a className="nav-link dropdown-toggle" href="#demo" id="userDropdown" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">Sethu</span>
                      <img className="img-profile rounded-circle"
                          src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg" alt='...'/>
                  </a>
                  
                  
              </li>

          </ul>

      </nav>
    
  );
}

function Topheading(){
  return(
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a href="#demo" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                  className="fa fa-download fa-sm text-white-50"></i> Generate Report</a>
      </div>
  );
}

function Contentcomp(){
  return(
<div className="container-fluid">
<Topheading />
<Cards />
<Charts/>
    </div>
  );
}

function Charts(){
  return(
      <div className="row">

         
          <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                 
                  <div
                      className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                      <div className="dropdown no-arrow">
                          <a className="dropdown-toggle" href="#demo" role="button" id="dropdownMenuLink"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fa fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                          </a>
                         
                      </div>
                  </div>
                 
                  <div className="card-body">
                      <div className="chart-area">
                          
                      </div>
                  </div>
              </div>
          </div>

         
          <div className="col-xl-4 col-lg-5">
              <div className="card shadow mb-4">
                
                  <div
                      className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                      <div className="dropdown no-arrow">
                          <a className="dropdown-toggle" href="#demo" role="button" id="dropdownMenuLink"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fa fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                          </a>
                         
                      </div>
                  </div>
                
                  <div className="card-body">
                      <div className="chart-pie pt-4 pb-2">
                          
                      </div>
                      <div className="mt-4 text-center small">
                          <span className="mr-2">
                              <i className="fa fa-circle text-primary"></i> Direct
                          </span>
                          <span className="mr-2">
                              <i className="fa fa-circle text-success"></i> Social
                          </span>
                          <span className="mr-2">
                              <i className="fa fa-circle text-info"></i> Referral
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}




function Cards(){
  return(
      <div className="row">

         
          <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                  Earnings (Monthly)</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                          </div>
                          <div className="col-auto">
                              <i className="fa fa-calendar fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          
          <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                  Earnings (Annual)</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                          </div>
                          <div className="col-auto">
                              <i className="fa fa-dollar-sign fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

         
          <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                              </div>
                              <div className="row no-gutters align-items-center">
                                  <div className="col-auto">
                                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                  </div>
                                  <div className="col">
                                      <div className="progress progress-sm mr-2">
                                          <div className="progress-bar bg-info" role="progressbar"
                                            style={{width: '50%' }}   aria-valuemin="0"
                                              aria-valuemax="100"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-auto">
                              <i className="fa fa-clipboard-list fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          
          <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                  Pending Requests</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                          </div>
                          <div className="col-auto">
                              <i className="fa fa-comments fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
function Centercontent() {
 
  return(
<div className="row">
<div className="col-lg-6 mb-4">

   
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
        </div>
        <div className="card-body">
            <h4 className="small font-weight-bold">Server Migration <span
                    className="float-right">20%</span></h4>
            <div className="progress mb-4">
                <div className="progress-bar bg-danger" role="progressbar" style={{width:'20%'}} 
                    aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold">Sales Tracking <span
                    className="float-right">40%</span></h4>
            <div className="progress mb-4">
                <div className="progress-bar bg-warning" role="progressbar" style={{width:'40%'}}
                    aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold">Customer Database <span
                    className="float-right">60%</span></h4>
            <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" style={{width:'60%'}}
                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold">Payout Details <span
                    className="float-right">80%</span></h4>
            <div className="progress mb-4">
                <div className="progress-bar bg-info" role="progressbar" style={{width:'80%'}}
                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold">Account Setup <span
                    className="float-right">Complete!</span></h4>
            <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{width:'100%'}}
                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>

    
    <div className="row">
        <div className="col-lg-6 mb-4">
            <div className="card bg-primary text-white shadow">
                <div className="card-body">
                    Primary
                    <div className="text-white-50 small">#4e73df</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-success text-white shadow">
                <div className="card-body">
                    Success
                    <div className="text-white-50 small">#1cc88a</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    Info
                    <div className="text-white-50 small">#36b9cc</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-warning text-white shadow">
                <div className="card-body">
                    Warning
                    <div className="text-white-50 small">#f6c23e</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-danger text-white shadow">
                <div className="card-body">
                    Danger
                    <div className="text-white-50 small">#e74a3b</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-secondary text-white shadow">
                <div className="card-body">
                    Secondary
                    <div className="text-white-50 small">#858796</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-light text-black shadow">
                <div className="card-body">
                    Light
                    <div className="text-black-50 small">#f8f9fc</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    Dark
                    <div className="text-white-50 small">#5a5c69</div>
                </div>
            </div>
        </div>
    </div>

</div>
  

<div className="col-lg-6 mb-4">

    
<div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
    </div>
    <div className="card-body">
        <div className="text-center">
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}}
                src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="..."/>
        </div>
        <p>Add some quality, svg illustrations to your project courtesy of <a
                target="_blank" rel="nofollow" href="#demo">unDraw</a>, a
            constantly updated collection of beautiful svg images that you can use
            completely free and without attribution!</p>
        <a target="_blank" rel="nofollow" href="#demo">Browse Illustrations on
            unDraw &rarr;</a>
    </div>
</div>


<div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
    </div>
    <div className="card-body">
        <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce
            CSS bloat and poor page performance. Custom CSS classNamees are used to create
            custom components and custom utility classNamees.</p>
        <p className="mb-0">Before working with this theme, you should become familiar with the
            Bootstrap framework, especially the utility classNamees.</p>
    </div>
</div>

</div> 

</div>
  );
}

function Box({ li }) {
  const styles = {
    background: li,
    height: "25px",
    width: "250px",
    marginTop: "10px",
  };
  return <div className="App" style={styles}></div>;
}
//onchange event we need inform react so we are using hooks here, hooks will be stating with a keyword "use"
function Movies({ name, poster, summary, rating }) {
  // const [like, setLike] = useState(0);
  // const [dislike, setDislike] = useState(0);
  return (
    <div>
      <div className="columns">
        <ul className="price">
          <li className="header">{name}</li>
          <li>
            <img src={poster} className="width" alt={name} />
          </li>
          <li className="grey">{summary}</li>

          <li>Rating : {rating}</li>
        </ul>
        <Counter />
      </div>
    </div>
  );
}
function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {like} 👍
      </button>
      <button
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        {dislike} 👎
      </button>
      {/* <h2> </h2> */}
    </div>
  );
}
