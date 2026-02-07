import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import NotFoundPage from "./NotFoundPage";
import Loading from "../components/Loading";

interface Ecosistema {
    id: number;
    nombre: string;
    descripcion: string;
}

export default function EcosistemasPage() {
    const [ecosistemas, setEcosistemas] = useState<Ecosistema[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/ecosistemas')
            .then(response => response.json())
            .then((data: Ecosistema[]) => setEcosistemas(data))
            .then(() => setLoading(false))
            .then(() => setError(""))
            .catch((err) => {
                setError("Failed to fetch games");
                console.error(err);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <NotFoundPage />;
    }

    return (
        <div>
        <h1 style={{ position: 'relative' }}>Ecosistemas</h1>

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
            {ecosistemas.map((ecosistema) => (
            <li
                key={ecosistema.id}
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
                <p>{ecosistema.nombre}</p>
                <p style={{fontFamily: 'Arial, sans-serif italic'}}>{ecosistema.descripcion}</p>
                <NavLink
                to={`/ecosistemas/${ecosistema.id}`}
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