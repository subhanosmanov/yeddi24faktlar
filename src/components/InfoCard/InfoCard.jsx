import React, { useCallback } from 'react';
import "./InfoCard.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/savedSlice';

function InfoCard({ post, CardHandler, modal, onClose }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const CartClick = useCallback(() => {
        if (modal === undefined) {
            CardHandler(post);
        }
    }, [modal, CardHandler, post]);

    const buttonHandler = useCallback((e) => {
        e.stopPropagation();
        navigate(`/${post.category}/${post.id}`);
    }, [navigate, post]);

    const saveHandler = useCallback((e) => {
        e.stopPropagation();
        dispatch(addItem(post));
    }, [dispatch, post]);

    const savedItems = useSelector((state) => state.saved.items);
    // Bu element array-də varmı?
    const isSaved = savedItems.some((saved) => saved.id === post.id);

    return (
        <div className='info-card' onClick={CartClick}>
            {
                modal &&
                <button onClick={(e) => {
                    e.stopPropagation();
                    if (onClose) onClose();
                }}
                    className={`close-card-btn`}>✕</button>
            }
            <img
                src={post.photo}
                className="card-image"
                alt="post image"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x250?text=No+Image'; }}
            />
            <div className="card-content">
                <h3 className="card-title">
                    {post.title}
                </h3>
                <p className="card-description">
                    {post.description}
                </p>
                <div className="button-container">
                    <button className="card-button" onClick={(e) => buttonHandler(e)}>
                        Ətraflı
                    </button>
                    <button className="card-button" style={{ background: "orange" }} onClick={(e) => saveHandler(e)}>
                        {isSaved ? "Saxlanıldı" : "Yadda saxla"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;