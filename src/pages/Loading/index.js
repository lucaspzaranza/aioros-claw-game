import React from 'react';
import './styles.css'
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { InGameRouter } from '../../shared/RoutesString';

export default function Loading() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(InGameRouter);
          }, 3000);

          return () => clearTimeout(timer);
    },[]);

    return (
        <div className='loading-title'>
            <h1>Carregando...</h1>
        </div>
    )
};