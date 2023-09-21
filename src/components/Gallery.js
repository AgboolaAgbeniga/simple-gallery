import React, { useEffect, useState } from 'react';

const Gallery = ({ searchResults }) => {
    const [images, setImages] = useState([]);
    const [draggedImage, setDraggedImage] = useState(null);

    useEffect(() => {
        const apiUrl = 'https://api.unsplash.com/photos';
        const accessKey = "ASce65Gi4cay9Tk_RglFvqOlflyKG8MX9rc3erBpCRc"; // Replace with your actual access key
        const perPage = 16;

        if (!searchResults || searchResults.length === 0) {
            // Fetch the first 16 pictures from the API by default
            fetch(`${apiUrl}?per_page=${perPage}`, {
                headers: {
                    Authorization: `Client-ID ${accessKey}`,
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    const imageUrls = data.map((photo) => photo.urls.regular);
                    setImages(imageUrls);
                })
                .catch((error) => {
                    console.error('Error fetching images from Unsplash:', error);
                });
        } else {
            // If there are search results, update the images with the search results
            const searchImageUrls = searchResults.map((photo) => photo.urls.regular);
            setImages(searchImageUrls);
        }
    }, [searchResults]);

    const handleDragStart = (e, index) => {
        setDraggedImage(index);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', index.toString());
    };

    const handleDragEnd = () => {
        setDraggedImage(null);
    };

    const handleDragOver = (e, index) => {
        e.preventDefault();
    };

    const handleDrop = (e, index) => {
        e.preventDefault();
        const droppedIndex = parseInt(e.dataTransfer.getData('text/plain'));
        if (draggedImage !== null && droppedIndex !== index) {
            const updatedImages = [...images];
            const draggedImageItem = updatedImages.splice(draggedImage, 1)[0];
            updatedImages.splice(index, 0, draggedImageItem);
            setImages(updatedImages);
        }
        setDraggedImage(null);
    };

    const handleTouchStart = (e, index) => {
        e.preventDefault(); // Prevent default touch behavior (e.g., scrolling)
        setDraggedImage(index);
    };

    const handleTouchEnd = () => {
        // Reset the draggedImage state when touch ends
        setDraggedImage(null);
    };

    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div className="text-xl mb-5 font-semibold">
                <p>Agboola Gallery</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        draggable="true"
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragEnd={handleDragEnd}
                        onDragOver={(e) => handleDragOver(e, index)}
                        onDrop={(e) => handleDrop(e, index)}
                        onTouchStart={(e) => handleTouchStart(e, index)}
                        onTouchEnd={handleTouchEnd}
                    >
                        <img
                            className="h-auto max-w-full object-cover select-none w-full bg-gray-200 rounded cursor-move aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4] transition duration-200 hover:scale-110"
                            src={image}
                            alt={`Image ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;