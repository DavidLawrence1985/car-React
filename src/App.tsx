
import './App.css';
import { makeStyles, Container, AppBar, Button, IconButton, Toolbar, Typography, Grid, Paper, Menu, MenuItem } from "@material-ui/core"
import { Details, Menu as MenuIcon } from "@material-ui/icons";
import CarSectionDetailCard  from "./components/car-section-detail"
import { Route, Routes } from 'react-router';
import Home from './components/home';
import { getCarSectionDetails, getCarSections } from './clients/APICalls';
import React from 'react';
import { CarSection, CarSectionDetail, CarSections } from './types/car-types';
import { cp } from 'fs/promises';

var img = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

const  renderMenuItem = (sections) => {
  return sections.map( (item) => (<MenuItem key={item.carSectionID} >{item.carSectionName}</MenuItem>))
}


export function App() {
  const [sections, setSections] = React.useState<Array<CarSection>>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    new Promise<CarSections>( () => getCarSections( d => {
      setSections(d);
    }));
  },[])

  React.useEffect(() => {
      if(sections !== undefined)
          setIsLoading(false);
  },[sections]);


  return (
    <>
      <Container maxWidth="xl" >
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} style={{marginTop: "2em"}}>
          <Typography variant="h3" align="justify">
            Car Overview
          </Typography>
          <img src={img} style={{width: "100%" }} alt=""/>
          <div>
            <Typography variant="h6" paragraph>
              A car is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people rather than goods. 
            </Typography>
            <Typography variant="h6" paragraph>
            Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex. These include rear-reversing cameras, air conditioning, navigation systems, and in-car-entertainment. Most cars in use in the early 2020s are propelled by an internal combustion engine, fueled by the combustion of fossil fuels. Electric cars, which were invented early in the history of the car, became commercially available in the 2000s and are predicted to cost less to buy than gasoline cars before 2025. 
            </Typography>
          </div>    
        </Grid>
        <Grid item xs={12} md={6} style={{marginTop: "2em", height: "100%"}}>
        {!isLoading && <Home section={sections} />}
        </Grid>
      </Grid>
      </Container>
    </>
  );
}

export default App;


