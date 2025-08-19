import React from 'react';
import "./footer.css";
import Wrapper from '../wrapper/wrapper';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer-container'>
            <Wrapper>
                <ul className="footer-list flex-row">
                    <li className="footer-list-item">
                        <Link to={"/about"}>Haqqımızda</Link>
                    </li>
                    <li className="footer-list-item">
                        <Link to={"/savelist"}>Yadda Saxlanılanlar</Link>
                    </li>
                    <li className="footer-list-item">
                        <Link to={"/"}>Ana Səhifə</Link>
                    </li>
                </ul>
                <p className="footer-text">
                    Yeddi 24 Faktlar — gündəlik həyatda öyrənməyə dəyər məlumatları sizə ən sürətli və maraqlı şəkildə çatdırmağı hədəfləyən onlayn platformadır. Dünyanın dörd bir yanından elm, texnologiya, tarix, mədəniyyət, təbiət və gündəlik həyatdan maraqlı faktları toplayır, araşdırır və oxucularımıza təqdim edirik.
                </p>
                <ul className="flex-row">
                    © 2025 Yeddi 24 Faktlar. Bütün hüquqlar qorunur.
                </ul>
            </Wrapper>
        </footer>
    )
}

export default Footer;