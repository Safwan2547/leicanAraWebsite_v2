import React from 'react';
import {animate,motion} from "framer-motion"

function LoadingScreen (time) {

    return (
        <div className="flex justify-center items-center h-screen w-screen ">
            
            <p className="w-1/3 text-center text-gray-500">This won't take long.</p>
        </div>
    );
};

export default LoadingScreen;
