import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router";
import  NotFoundPage from "./NotFoundPage";
import Loading from "../components/Loading";

interface Animal {
    id: number;
    nombre: string;
    especie: string;
    peso: number;
    ecosistemaId: number;
    apadrinado: boolean;
}

export default function AnimalDetailPage() {
    const { id } = useParams<{ id?: string }>();
    const animalId = id ? parseInt(id, 10) : NaN;

    const [animal, setAnimal] = useState<Animal | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`http://localhost:8080/animales/${animalId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Animal no encontrado");
                }
                return response.json();
            })
            .then((data: Animal) => {
                setAnimal(data);
                setError(null);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch animal details");
                setLoading(false);
            });
    }, [animalId]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <NotFoundPage />;
    }

    if (animal) {
        return (
            <div style={{
                width: '100%',
                minHeight: '100vh',
                padding: '2rem',
                color: '#ffffff',
            }}>
                <div>
                    <h1>{animal.nombre}</h1>
                    <p><strong>Especie: </strong> {animal.especie}</p>
                    <p><strong>Peso: </strong> {animal.peso} kg</p>
                    <p><strong>Ecosistema: </strong> {animal.ecosistemaId}</p>
                    <p><strong>Apadrinado: </strong> {animal.apadrinado ? "Sí" : "No"}</p>
                    <NavLink
                        to={`/ecosistemas/${animal.ecosistemaId}`}
                        style={({ isActive }) => ({
                            color: isActive ? "#fded09ff" : "lightgray",
                            textDecoration: "none",
                        })}
                    >
                        Ver ecosistema
                    </NavLink>
                </div>
            </div>
        );
    }
}