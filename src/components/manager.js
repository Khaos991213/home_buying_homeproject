import React,{Component} from 'react';
import axios from 'axios';
export default class Test extends Component {
    state ={
        name : "",
        price:"",
        postcode : "",
        address_city:"",
        address_area:"",
        address_vil:"",
        address_road:"",
        pin:"",
        room:"",
        living:"",
        bath:"",
        age:"",
        floor:"",
        sum_floor:"",
        parking:"",
        case:"",
        link:"",
    }
    handleName = async e =>{
        await this.setState({
            name : e.target.value, 
        })
    }
    handlePrice = async e =>{
        await this.setState({
            price : e.target.value, 
        })
    }
    handlePostCode = async e =>{
        await this.setState({
          postcode : e.target.value, 
        })
    }
    handleAddressCity = async e =>{
        await this.setState({
          address_city : e.target.value, 
        })
    }
    handleAddressArea = async e =>{
        await this.setState({
          address_area : e.target.value, 
        })
    }
    handleAddressVil = async e =>{
        await this.setState({
            address_vil : e.target.value, 
        })
    }
    handleAddressRoad = async e =>{
        await this.setState({
            address_road : e.target.value, 
        })
    }
    handlePin = async e =>{
        await this.setState({
          Pin : e.target.value, 
        })
    }
    handleRoom = async e =>{
        await this.setState({
          room : e.target.value, 
        })
    }
    handleLiving = async e =>{
        await this.setState({
            living : e.target.value, 
        })
    }
    handleBath = async e =>{
        await this.setState({
            bath : e.target.value, 
        })
    }
    handleAge = async e =>{
        await this.setState({
            age : e.target.value, 
        })
    }
    handleFloor = async e =>{
        await this.setState({
            floor : e.target.value, 
        })
    }
    handleSumFloor = async e =>{
        await this.setState({
            sum_floor : e.target.value, 
        })
    }
    handleParking = async e =>{
        await this.setState({
            parking : e.target.value, 
        })
    }
    handleCase = async e =>{
        await this.setState({
            case : e.target.value, 
        })
    }
    handleLink = async e =>{
        await this.setState({
            link : e.target.value, 
        })
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.state.price);
        console.log(this.state.postcode);
        console.log(this.state.address_city);
        console.log(this.state.address_area);
        console.log(this.state.address_vil);
        console.log(this.state.address_road);
        console.log(this.state.pin);
        console.log(this.state.room);
        console.log(this.state.living);
        console.log(this.state.bath);
        console.log(this.state.age);
        console.log(this.state.floor);
        console.log(this.state.sum_floor);
        console.log(this.state.parking);
        console.log(this.state.case);
        console.log(this.state.link);
        let formData = new FormData();
        formData.append("name",this.state.name);
        formData.append("price",this.state.price);
        formData.append("postcode",this.state.postcode);
        formData.append("address_city",this.state.address_city);
        formData.append("address_area",this.state.address_area);
        formData.append("address_vil",this.state.address_vil);
        formData.append("address_road",this.state.address_road);
        formData.append("pin",this.state.pin);
        formData.append("room",this.state.room);
        formData.append("living",this.state.living);
        formData.append("bath",this.state.bath);
        formData.append("age",this.state.age);
        formData.append("floor",this.state.floor);
        formData.append("sum_floor",this.state.sum_floor);
        formData.append("parking",this.state.parking);
        formData.append("case",this.state.case);
        formData.append("link",this.state.link);
        const url = "http://localhost/test.php";
        axios.post(url,formData)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err));
    }

    render() {
        return (
           <div>
               </div>
        )
    } 
}
