import React, {useState} from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Cookies from "universal-cookie";

export const RequireAuth = ({children, scope}) => {
  const { currentUser } = useAuth();
  const cookies = new Cookies();

  const location = useLocation();

  return currentUser !== null &  cookies.get('scope') == scope
    ? children 
    : <Navigate 
        to="/"
        replace
        state={{ path: location.pathname }} />;
}

  