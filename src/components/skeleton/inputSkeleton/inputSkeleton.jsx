import React from 'react';
import "./inputSkeleton.css";

function InputSkeleton({ count= 5}) {
    return (
        <ul className="skeleton-list">
            {Array.from({ length: count }).map((_, index) => (
                <li key={index} className="skeleton-item">
                    <div className="skeleton-circle"></div>
                    <div className="skeleton-text"></div>
                </li>
            ))}
        </ul>
    )
}

export default InputSkeleton;