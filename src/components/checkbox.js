import React,{Component} from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../style/checkbox.css';
class Testcheckbox extends Component {
    state ={
        Club : "50",
        Exc:"50",
        Med : "50",
        Shop:"50",
        Price:"20000",
        Ping:"200",
        Year:"200",
        Data:{},
    }
    handleClub = async e =>{
        await this.setState({
            Club : e.target.value, 
        })
    }
    handleExc = async e =>{
        await this.setState({
            Exc : e.target.value, 
        })
    }
    handleMed = async e =>{
      await this.setState({
          Med : e.target.value, 
      })
    }
    handleShop = async e =>{
      await this.setState({
          Shop : e.target.value, 
      })
    }
    handlePrice = async e =>{
      await this.setState({
          Price : e.target.value, 
      })
    }
    handlePing = async e =>{
      await this.setState({
          Ping : e.target.value, 
      })
    }
    handleYear = async e =>{
      await this.setState({
          Year : e.target.value, 
      })
  }
handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state.Club);
        console.log(this.state.Exc);
        console.log(this.state.Med);
        console.log(this.state.Shop);
        console.log(this.state.Price);
        console.log(this.state.Ping);
        console.log(this.state.Year);


        let formData = new FormData();
        formData.append("Club",this.state.Club);
        formData.append("Exc",this.state.Exc);
        formData.append("Med",this.state.Med);
        formData.append("Shop",this.state.Shop);
        formData.append("Price",this.state.Price);
        formData.append("Ping",this.state.Ping);
        formData.append("Year",this.state.Year);
        const url = "http://35.174.176.147/final_pro/search.php";
        axios.post(url,formData)
        .then(res=>{
            console.log(res.data)
            this.setState({ Data:res.data });
            alert("Your Search Complete")
        })
        .catch(err=>console.log(err));
    }

    render() {
        return (
            <div className="page">
            <div className="select">
                <select onChange={this.handleClub}>
                    <option value="50">Near clubs</option>
                    <option value="0.5">Less then 0.5km</option>
                    <option value="1">Less then 1km</option>
                    <option value="2">Less then 2km</option>
                </select>
                
                <select onChange={this.handleExc}>
                    <option value="50">Near Exercise</option>
                    <option value="0.5">Less then 0.5km</option>
                    <option value="1">Less then 1km</option>
                    <option value="2">Less then 2km</option>
                </select>
                {/* <button onClick={this.handleSubmit}  id="submit">save</button> */}
                
                <select onChange={this.handleMed}>
                    <option value="50">Near Medical</option>
                    <option value="0.5">Less then 0.5km</option>
                    <option value="1">Less then 1km</option>
                    <option value="2">Less then 2km</option>
                </select>
                
                <select onChange={this.handleShop}>
                    <option value="50">Near Shop</option>
                    <option value="0.5">Less then 0.5km</option>
                    <option value="1">Less then 1km</option>
                    <option value="2">Less then 2km</option>
                </select>
                
                <select onChange={this.handlePrice}>
                    <option value="">Price Range</option>
                    <option value="1000">Under 10 million</option>
                    <option value="2000">Under 20 million</option>
                    <option value="3000">Under 30 million</option>
                    <option value="4000">Under 40 million</option>
                </select>
                
                <select onChange={this.handlePing}>
                    <option value="200">Ping shu</option>
                    <option value="50">Under 50 ping</option>
                    <option value="75">Under 75 ping</option>
                    <option value="100">Under 100 ping</option>
                </select>
                
                <select onChange={this.handleYear}>
                    <option value="100">House Age</option>
                    <option value="7">Under 7 years</option>
                    <option value="15">Under 15 years</option>
                    <option value="20">Under 20 years</option>
                    <option value="25">Under 25 years</option>
                </select>
                </div>
                <div className="SearchButton">
                    <Button variant="contained" onClick={this.handleSubmit}  id="submit" color="primary">
                        Save
                    </Button>
                    <Link   
                        to ={{
                        pathname:'/result',
                        aboutProps:{
                        result:this.state.Data,
                        }
                        }}
                    > 
                        <Button variant="outlined" color="secondary">
                            Search
                        </Button>
                    </Link>
                </div>
            </div>
        )
    } 
}
export default Testcheckbox;