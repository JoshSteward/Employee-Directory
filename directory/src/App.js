import './App.css'; 
import Wrapper from "./components/Wrapper";
import Col from "./components/Col";
import Card from "./components/Card";
//import Footer from "./components/Footer";
import Search from "./components/Search";
import API from './utils/API';
import React from 'react';


class App extends React.Component {
  state = { employees: [], search: ''};

  componentDidMount() {
    API.getEmployees().then((res) => {
      //console.log(res) to see what output is 
      console.log(res);
      this.setState({
        employees: res.data.results.map((e, i) => ({
          firstName: e.name.first,
          lastName: e.name.last,
          email: e.email,
          phone: e.phone,
          picture: e.picture.large,
          key: i,
        })),
      });
    })
    .catch((err) => console.log(err));
  }

  refresh() {
    //This method takes an optional parameter which by default is false. If set to true, the browser will do a complete page refresh from the server and not from the cached version of the page
    window.location.reload(false);
  }

  //create function to search through employees
  //search function not working
  employeeSearch = (filter) => {
    const newList = this.state.employees.filter((employees) => {
      //merge data if employee exists 
      //employee or employees? 
      let merge = Object.values(employees).join('').toLowerCase();
      return merge.indexOf(filter.toLowerCase());
    });
    //update newList
    this.setState({employees: newList});
    //newList coming out as 0
    console.log("Check two ", + newList);
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.search);
  };

  //issue potentially here for not laoding search 
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked", this.state.search, e);
    this.employeeSearch(this.state.search);
    console.log(this.state.search);
  };

  //render data on page 
  render() {
    return(
      <Wrapper>
        <div className = "container">
          <div className = "row">
            <Col size = "md-3">
              <h1>Employee Directory</h1>
              <Search
                value = {this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Col>
          </div>

          <div className = "row">
            <Col size = "md-10">
              <table className = "table">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                {[...this.state.employees].map((item) =>(
                  <Card
                  picture = {item.picture}
                  firstName = {item.firstName}
                  lastName = {item.lastName}
                  email = {item.email}
                  phone = {item.phone}
                  key = {item.key}
                  />
                ))}
              </table>
            </Col>
          </div>
        </div> 
      </Wrapper>
    );
  }
}


export default App;
