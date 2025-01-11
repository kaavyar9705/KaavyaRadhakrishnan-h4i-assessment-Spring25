import React from "react";

interface GalleryCardProps {
    image: string;
    title: string;
    description: string;
    dateCreated: string;
    onPrevious: () => void;
    onNext: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
    image,
    title,
    description,
    dateCreated,
    onPrevious,
    onNext,
}) => {
    return (
        <div className="gallery-container">
            <div className="gallery-card">
                <div className="left-content">
                    <h2 className="card-title">{title}</h2>
                    <img src={image} alt={title} className="card-image" />
                    <p className="card-date">{new Date(dateCreated).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}</p>
                </div>
                <div className="right-content">
                    <div className="description-container">
                        <p className="card-description">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;