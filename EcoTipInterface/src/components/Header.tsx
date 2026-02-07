import React from "react";
import { useState, useEffect } from "react";
import  Navigation  from "./Navigation";

export default function Header() {  
    return (
        <>
        <header
        style={{ backgroundColor: 'rgba(16, 125, 214, 1)',
            position: 'sticky', top: 0, zIndex: 999, paddingBlock: '2rem', height: '7rem', display: 'flex',
            justifyContent: 'center', alignItems: 'center', width: '100%'
        }}>
            <h1 style={{fontFamily: 'Times New Roman', fontStyle: 'bold', 
            fontSize: '2.5rem', fontWeight: '400', letterSpacing: '10px', textAlign: 'left'
            }}>ECOTIP</h1>
            
        </header>
        </>
    );
}