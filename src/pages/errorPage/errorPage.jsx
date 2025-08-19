import React from 'react';
import "./errorPage.css";
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div>
      <div className="error-container">
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">Səhifə tapılmadı</h2>
        <p className="error-text">
          Üzr istəyirik, getmək istədiyiniz səhifə mövcud deyil.
        </p>
        <Link to="/" className="error-button">
          Ana Səhifəyə Qayıt
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage;