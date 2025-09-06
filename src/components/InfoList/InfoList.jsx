import React, { useState, useEffect, useCallback } from 'react';
import "./ınfoList.css";
import InfoCard from '../InfoCard/InfoCard';
import InfoCardSkeleton from '../skeleton/InfoCardSkeleton/InfoCardSkeleton';

function InfoList({ data, loading, categoryApi, category }) {
    const [modal, setModal] = useState({ isOpen: false, info: null });
    const closeModal = useCallback(() => {
        setModal({ isOpen: false, info: null });
    }, []);
    const CardChange = useCallback((info) => {
        setModal({ isOpen: true, info });
    }, []);
    
    return (
        <div className='info-list'>
            {loading == true ?
                Array.from({ length: 6 }).map((_, i) => (
                    <InfoCardSkeleton key={i} />
                ))
                : data?.map((post) => (
                    <InfoCard
                        key={post.id}
                        post={post}
                        CardHandler={CardChange}
                    />
                ))}
            {modal.isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <InfoCard
                            post={modal.info}
                            modal={modal.isOpen}
                            categoryApi={categoryApi}
                            category={category}
                            onClose={closeModal}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default InfoList;