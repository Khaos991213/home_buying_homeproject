import React, { useState } from "react";
import "../style/checkbox.css";
import Select from "react-select";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
function CheckBox() {
  
  const clubs=[
    { value: 2, label: "Less Than 2km" },
    { value: 1, label: "Less Than 1km" },
    { value: 0.5, label: "Less Than 0.5km" }];
    const excercises=[
    { value: 2, label: "Less Than 2km" },
    { value: 1, label: "Less Than 1km" },
    { value: 0.5, label: "Less Than 0.5km" }];
    const medical=[
    { value: 2, label: "Less Than 2km" },
    { value: 1, label: "Less Than 1km" },
    { value: 0.5, label: "Less Than 0.5km" }];
    const shop=[
    { value: 2, label: "Less Than 2km" },
    { value: 1, label: "Less Than 1km" },
    { value: 0.5, label: "Less Than 0.5km" }];
    const price=[
    { start: 0,end:1000, label: "1000萬以下" },
    { start: 1000,end:2000, label: "1000到2000萬" },
    { start: 2000,end:3000, label: "2000到3000萬" },
    { start: 3000,end:4000, label: "3000到4000萬" },
    { start: 4000,end:false, label: "4000萬以上" }
  ];
    const ping=[
      {start: 0,end:50, label: "50坪以下" },
      {start: 50,end:75,  label: "50坪到75坪" },
      {start: 75,end:100, label: "75坪到100坪" },
      {start: 100,end:false, label: "100坪以上" },];
    const year=[
      {start: 0,end:5, label: "0到5年" },
      {start: 5,end:10, label: "5到10年" },
      {start: 10,end:15, label: "10到15年" },
      {start: 15,end:20, label: "15年到20年" },
      {start: 20,end:false, label: "20年以上" },];
  const [selectClub, setSelectClub] = useState(0);
  const [selectExc, setSelectExc] = useState(0);
  const [selectMed, setSelectMed] = useState(0);
  const [selectShop, setSelectShop] = useState(0);
  const [selectPrice, setSelectPrice] = useState(0);
  const [selectPing, setSelectPing] = useState(0);
  const [selectYear, setSelectYear] = useState(0);



  const handleChangeClub = selectClub => {
    setSelectClub(selectClub);
  };
  const handleChangeExc = selectExc => {
    setSelectExc(selectExc);
  };
  const handleChangeMed = selectMed => {
    setSelectMed(selectMed);
  };
  const handleChangeShop = selectShop => {
    setSelectShop(selectShop);
  };
  const handleChangePrice = selectPrice => {
    setSelectPrice(selectPrice);
  };
  const handleChangePing = selectPing => {
    setSelectPing(selectPing);
  };
  const handleChangeYear = selectYear => {
    setSelectYear(selectYear);
  };
  
  return (
    <div callName="Container">
    <div className="select" style={{width: '80vw'} }>
      <h3> Club:</h3>
      <Select className="select1" options={clubs} value={selectClub} onChange={handleChangeClub} />
      <h3> Excercise:</h3>
      <Select className="select1" options={excercises} value={selectExc} onChange={handleChangeExc} />
      <h3> Medical:</h3>
      <Select className="select1" options={medical} value={selectMed} onChange={handleChangeMed} />
      <h3> Shop:</h3>
      <Select className="select1" options={shop} value={selectShop} onChange={handleChangeShop} />
      <h3> Price:</h3>
      <Select className="select1" options={price} value={selectPrice} onChange={handleChangePrice} />
      <h3> 坪數:</h3>
      <Select className="select1" options={ping} value={selectPing} onChange={handleChangePing} />
      <h3> 屋齡:</h3>
      <Select className="select1" options={year} value={selectYear} onChange={handleChangeYear} />
    </div>
    <div className="search">
      <Link exact to='/result'>
    <Button variant="contained">Search</Button>
      </Link>
    </div>
    </div>
  );
}
export default CheckBox;