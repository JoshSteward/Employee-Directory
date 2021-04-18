import './App.css'; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import API from './utils/API';


class App extends React.Component {
  state = { employees: [], search: ''};

  componentDidMount() {
    API.search().then((res) => {
      //console.log(res) to see what output is 
      console.log(res);
      this.setState({
        employees: res.data.results.map((e, i) => ({
          firstName: e.name.first,
          lastName: e.name.last,
          email: e.email,
          phone: e.phone,
          picture: e.picture.small,
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
  employeeSearch = (filter) => {
    const newList = this.state.employees.filter((employees) => {
      //merge data if employee exists 
      let merge = Object.merge(employee).join('').toLowerCase();
      return values.indexOf(filter.toLowerCase());
    });
    //update newList
    this.setState({employees: newList});
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.search);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked", this.state.search, e);
    this.employeeSearch(this.state.search);
  };

  //render data on page 
  
}


export default App;
