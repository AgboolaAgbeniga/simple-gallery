import React, { useState, useEffect } from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'


const GalleryPage = () => {
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
   

    useEffect(() => {
        // Check if the user is authenticated
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (!user) {
            // User is not authenticated, redirect to the login page
            navigate('/'); // Change the path to your login page route
          }
        });
    
        // Clean up the listener when the component unmounts
        return () => unsubscribe();
      }, [navigate]);


    const handleSearch = (query) => {
        setError(null);
        setLoading(true);

        // Perform the API request here and update searchResults
        fetchImagesFromUnsplash(query);
    };

    async function fetchImagesFromUnsplash(query) {
        try {
            const accessKey = "ASce65Gi4cay9Tk_RglFvqOlflyKG8MX9rc3erBpCRc";
            // Make the API request and set searchResults with the fetched images
            const response = await fetch(
                `https://api.unsplash.com/search/photos?query=${query}&per_page=16`,
                {
                    headers: {
                        Authorization: `Client-ID ${accessKey}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setSearchResults(data.results);
            setLoading(false);
        } catch (error) {
            setError('An error occurred while fetching images from Unsplash. Please try again later.');
            setLoading(false);
        }
    }

    return (
        <div>
            <Navbar onSearch={handleSearch} />
            <Gallery searchResults={searchResults} />
        </div>
    )
}

export default GalleryPage