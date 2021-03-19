import React from 'react';
import HomeInterface  from './Interface';


export const Home: React.FC<HomeInterface> =  (props: HomeInterface) =>{
    return (
        <>
            {props?.chidren}
        </>
    );
}