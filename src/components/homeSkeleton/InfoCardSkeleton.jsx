import React from 'react';
import "./InfoCardSkeleton.css";

function InfoCardSkeleton() {
    return (
        <div className="info-card skeleton">
            {/* Şəkil */}
            <div className="skeleton-image"></div>

            {/* Card content */}
            <div className="card-content">
                {/* Başlıq */}
                <div className="skeleton-title"></div>

                {/* Təsvir */}
                <div className="skeleton-description"></div>

                {/* Düymələr */}
                <div className="button-container">
                    <div className="skeleton-button"></div>
                    <div className="skeleton-button"></div>
                </div>
            </div>
        </div>
    )
}

export default InfoCardSkeleton;