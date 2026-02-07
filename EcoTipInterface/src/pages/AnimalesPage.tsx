import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";

interface Animal {
    id: number;
    nombre: string;
    especie: string;
    peso: number;
    ecosistemaId: number;
    apadrinado: boolean;
}

export default function AnimalesPage() {
    const [animales, setAnimales] = useState<Animal[]>([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/animales')
            .then(response => response.json())
            .then((data: Animal[]) => setAnimales(data))
            .catch((err) => {
                setError("Failed to fetch animals");
                console.error(err);
            });
    }, []);

    return (
        <div>
        <h1 style={{ position: 'relative' }}>Animales</h1>

        <ul
            style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            listStyle: 'none',
            padding: 0,
            width: '100%',
            }}
        >
            {animales.map((animal) => (
            <li
                key={animal.id}
                style={{
                border: 'solid 5px',
                borderRadius: '10px',
                padding: '20px',
                fontSize: '24px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                }}
            >
                <div style={{ textAlign: 'center' }}>
                <p>{animal.nombre}</p>
                <p style={{fontFamily: 'Arial, sans-serif italic'}}>{animal.especie}</p>
                <NavLink
                to={`/animales/${animal.id}`}
                style={({ isActive }) => ({
                    color: isActive ? "#fded09ff" : "lightgray",
                    textDecoration: "none"
                })}
                className="btn"
                >
                    Ver detalles
                </NavLink>
                </div>
            </li>
            ))}
            </ul>
        </div>
    )
}