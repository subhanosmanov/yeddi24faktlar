import React, { useEffect, useState } from 'react';
import "./hero.css";

function Hero() {

    const facts = [
        "İnsan onurğasında adətən 24 fəqərə var.",
        "Tam saf qızıl 24 karat ilə ölçülür.",
        "NBA-də komandaların hücum üçün 24 saniyə vaxtı var."
    ];

    return (
        <div className='hero'>
            <div className="hero-content">
                <h1 className="hero-title">Hər gün yeni bir fakt <span className="highlight">kəşf et</span></h1>
                <p className="hero-subtitle">Gündəlik seçilmiş, qısa və təsirli faktlarla dünyanı bir az daha maraqlı öyrən.</p>
                <div className="hero-buttons">
                    <span className="cta primary">Faktları Kəşf Et</span>
                    <span className="cta secondary">Bizi izlə</span>
                </div>
                <div className="fact-preview">
                    {facts.map((fact, idx) => (
                        <div key={idx} className="fact-item">
                            <div className="fact-number">Fakt {idx + 1}</div>
                            <div className="fact-text">{fact}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hero-decor"></div>
        </div>
    )
}

export default Hero;