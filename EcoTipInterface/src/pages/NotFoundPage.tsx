import React from "react";
import {Link} from "react-router";

export  default function NotFoundPage() {
    return (
        <div 
        style={{
            backgroundColor: '#2c2b2bff',
            width: '100%',
            height: '100vh',
            position: 'relative',
            textAlign: 'center',
            inset: 0,
        }}>
            <h1 style ={{fontSize: '200px', color: 'white', position: 'relative', top: '70px'}}>404 - Page Not Found</h1>

            <Link to="/" style={{fontSize: '150px', position: 'relative', top: '100px'}}>Go back home</Link>
        </div>
    )
}