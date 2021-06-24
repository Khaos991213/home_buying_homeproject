import React,{useState} from 'react';
import Geocode from "react-geocode";
import { GoogleMap,LoadScript,Marker} from '@react-google-maps/api';
export default function GoogleMapTest(props) {
    const { responseNear,centerlat,centerlng } = props;
    if (!Array.isArray(responseNear)) {
        console.log("it's not array")
    } 
    
    const [selectplace, setSelectedplace] = useState(" ")

    const handleClick = (user) => {
      const set = user === selectplace ? " " : user
      setSelectedplace(set)
    }
    
  

    Geocode.setApiKey("AIzaSyDCyp4PlSITFDqxhZpxEwjoQkGKxVPSNZk");

  const containerStyle = {
      width: '800px',
      height: '400px'
  };
  return (
    <div>
    <LoadScript
      googleMapsApiKey= "AIzaSyDCyp4PlSITFDqxhZpxEwjoQkGKxVPSNZk"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={15}
        center={{lat:centerlat,lng:centerlng}}
      >
        <div>
        <Marker  position={{lat:centerlat,lng:centerlng}} icon='/placeholder.png' />
            {Array.isArray(responseNear) ? (
                responseNear.map((info) => (
                <Marker
                  position={{
                    lat:info.緯,
                    lng:info.經
                  }}
                  onClick={() => {
                    handleClick(info)
                    console.log(info)
                  }}
                />
                ))      
            ): (
                console.log('no data')            
            )}
        </div>
        
      </GoogleMap>
      
    </LoadScript>
        <div className="infowindow">
        {selectplace.name ?(<h4>Name:{selectplace.name}</h4>):(null)}
        {selectplace.address ?(<p>地址:{selectplace.address}</p>):(null)}
        {selectplace.tel ?(<p>Tel:{selectplace.tel}</p>):(null)}
        {selectplace.level ?(<p>Level:{selectplace.level}</p>):(null)}
        {selectplace.type ?(<p>Type:{selectplace.type}</p>):(null)}
        {selectplace.活動 ?(<p>活動:{selectplace.活動}</p>):(null)}
        {selectplace.設施 ?(<p>設施:{selectplace.設施}</p>):(null)}
        {selectplace.shopnum ?(<p>Total Shop:{selectplace.shopnum}</p>):(null)}
        {selectplace.time ?(<p>Time:{selectplace.time}</p>):(null)}
      </div>
    </div>
  )
}
