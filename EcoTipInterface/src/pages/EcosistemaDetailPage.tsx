import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router";
import Loading from "../components/Loading";
import NotFoundPage from "./NotFoundPage";

interface Ecosistema {
    id:number,
    nombre:string,
    descripcion:string,
    temperaturaMedia:number,
    isActive: boolean,
    createdAt: string,
}

export default function EcosistemaDetailPage() {
    const { id } = useParams<{ id?: string }>();
    const ecosistemaId = id ? parseInt(id, 10) : NaN;

    const [ecosistema, setEcosistema] = useState<Ecosistema | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`http://localhost:8080/ecosistemas/${ecosistemaId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Ecosistema no encontrado");
                }
                return response.json();
            })
            .then((data: Ecosistema) => {
                setEcosistema(data);
                setError(null);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch ecosistema details");
                setLoading(false);
            });
    }, [ecosistemaId]);
    
    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <NotFoundPage />;
    }

    if (ecosistema) {
        return (
            <div style={{
                width: '100%',
                minHeight: '100vh',
                padding: '2rem',
                color: '#ffffff',
            }}>
                <div>
                    <h1>{ecosistema.nombre}</h1>
                    <p><strong>Descripción: </strong>{ecosistema.descripcion}</p>
                    <p><strong>Temperatura media: </strong>{ecosistema.temperaturaMedia}°C</p>
                    <p><strong>Estado: </strong> {ecosistema.isActive ? "Activo" : "Inactivo"}</p>
                    <p><strong>Creado en: </strong> {ecosistema.createdAt}</p>
                </div>
            </div>
        );
    }
}