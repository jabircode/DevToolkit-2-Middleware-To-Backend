import './App.css';
import React, { useEffect } from 'react';

import { ContextHolder } from '@frontegg/rest-api';
import { useAuth, useLoginWithRedirect } from "@frontegg/react";

import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table';


function Frontegg() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
  loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <div className="Frontegg">
      { isAuthenticated ? (
        <div className='card'>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name}/>
          </div>
          <div className='detail'>
            <span className='heading'>Logged in as: {user?.name}</span>
            <br></br>
            <span className='heading'>User email: {user?.email}</span>
          </div>
          <div>
            <button  className='btn btn-primary' onClick={() => logout()}>Click to logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
} 

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = { data: [] }
    }  

    callAPIServer() {
        fetch('https://hidden-forest-50920.herokuapp.com/customer/assignment')
        .then(response => response.json())
        .then(data => this.setState({ data }))
    }

    componentDidMount() {
        this.callAPIServer()
    }

    render() {
        return(
          <div>
            <Frontegg />
            <div className='map p-3'>
            <Table striped bordered hover size="sm" variant='dark' className='container'>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Shipping date</th>
                </tr>
              </thead>
              <tbody>
              {(this.state.data).map( (item) => {
                return (
                  <tr>
                    <td>{item.customer}</td>
                    <td>{item.item}</td>
                    <td>{item.quantity}</td>
                    <td>{item.shipping_date}</td>
                  </tr>
                  )
                })}  
                </tbody>    
              </Table>   
            </div>
          </div>
        )
    }
}

export default App