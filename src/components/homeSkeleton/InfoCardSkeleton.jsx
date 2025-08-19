import React from 'react';
import "./InfoCardSkeleton.css";

function InfoCardSkeleton() {
    console.log("geldiiiiiiiii")
    return (
        <div className="info-card skeleton-card">
            <div className="skeleton skeleton-rect image-skeleton"></div>

            <div className="card-content">

                <div className="skeleton skeleton-text title-skeleton"></div>

                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text short"></div>

                <div className="button-container">
                    <div className="skeleton skeleton-rect button-skeleton"></div>
                    <div className="skeleton skeleton-rect button-skeleton"></div>
                </div>
            </div>
        </div>
    )
}

export default InfoCardSkeleton;