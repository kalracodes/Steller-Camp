import React, { useState,useEffect } from 'react';
import {BsWallet} from 'react-icons/bs';
import { Link} from 'react-router-dom';  
import './Navbar.css';


export default function Navbar() {

  const [account, setAccount] = useState("");

  return (
    <>
    <div className='nav-bar'>
      
      <Link to="/" className='nav-items'>The Decentralised Petition App</Link>

      <div className='flex justify-items-start space-x-10'>
        <Link to="/" className='nav-items'>Home</Link>
        <Link to="/mypetitions" className='nav-items'>My Petitons</Link>
        <Link to="/browse" className='nav-items'>Browse</Link>
        <Link to="#" className='wallet flex items-center'><BsWallet className='mr-2'/>{account !=="" ? account:"Connect to Wallet"}</Link>
      </div>
    </div> 
    </>
  )
}

