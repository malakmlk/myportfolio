import React from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import './App.css';
import Main from './Components/main';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div  >
          <div className="demo-big-content">
              <Layout classeName="App-header" >
                  <Header >
                      <Navigation  >
                          <Link to="/resume">Resume</Link>
                          <Link to="/aboutme">Aboutme</Link>
                          <Link to="/project">Project</Link>
                          <Link to="/contact">Contact</Link>
                      </Navigation>
                  </Header>
                  
                  <Content>
                      <div className="page-content" />
                      <Main/>
                  </Content>
              </Layout>
          </div>
    </div>
  );
}

export default App;
