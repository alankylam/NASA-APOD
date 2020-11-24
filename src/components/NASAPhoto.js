import React, { useState, useEffect } from "react";
import NavBar from "./NavBar.js"

const apiKey = process.env.REACT_APP_NASA_KEY

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd
    var apiKey2 = apiKey + '&date=' + today

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey2}`);
            let data = await response.json();
            setPhotoData(data);
        }
    }, []);

    if (!photoData) return <div> loading... </div>;

    return (
        // React Fragments
        <>
        <NavBar />
        <div className="nasa-photo">
            {photoData.media_type === "image" ? (
                <img
                    src={photoData.hdurl}
                    alt={photoData.title}
                    className="photo"
                />
            ) : (
                <iframe
                    title="space-video"
                    src={photoData.hdurl}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                />
            )}
            <div>
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p>
                <p className="explanation">{photoData.explanation}</p>
            </div>
        </div>
            </>
    );
}