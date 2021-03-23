import React from 'react';
import {HomeInterface}  from './Interface';


export const Home: React.FC<HomeInterface> =  (props) =>{
    return (
        <>
            {props?.chidren}
        </>
    );
}