import React, {useState} from 'react'
import {AppBar,Toolbar,Typography,Tabs,Tab} from '@mui/material'
import AddHomeIcon from '@mui/icons-material/AddHome';
import {NavLink} from 'react-router-dom'
import logo from '../images/logo.jpg'

const Header = () => {
  const [value,setValue] = useState()
  return (
    <div>
    <AppBar sx={{backgroundColor: '#232F3D'}} position='sticky'>
    <Toolbar>
    <Typography><img src={logo} width={100}/></Typography>
    <Typography variant='h5'>Counselling and visitor management system</Typography>
    <Tabs sx={{ml: 'auto'}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setValue(val)}>
    <Tab LinkComponent={NavLink} to='/signup' label='SignUp'/>
    <Tab LinkComponent={NavLink} to='/signin' label='SignIn'/>
    <Tab LinkComponent={NavLink} to='/counsellor' label='Add Counsellor'/>
    <Tab LinkComponent={NavLink} to='/fetchregistration' label='Fetch Registrations'/>
    <Tab LinkComponent={NavLink} to='/appointment' label='Appointment'/>
    <Tab LinkComponent={NavLink} to='/visitor' label='Add Visitor'/>
    <Tab LinkComponent={NavLink} to='/contactus' label='Contact Us'/>
    </Tabs></Toolbar></AppBar>
    </div>
  )}

export default Header