import React from 'react';
import "./sidebar.css";
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Wrapper from "../../components/wrapper/wrapper.jsx"
function Sidebar({ open, setOpen }) {

    const pages = [
        {
            id: 1,
            page: "/",
            categoryText: "",
            text: "Ana Səhifə"
        }, {
            id: 2,
            page: "/technology",
            categoryText: "TEXNOLOGİYA",
            text: "Texnologiya"
        },
        {
            id: 3,
            page: "/landscape",
            categoryText: "MƏNZƏRƏLƏR",
            text: "Mənzərələr"
        },
        {
            id: 4,
            page: "/football",
            categoryText: "FUTBOL",
            text: "Futbol"
        },
        {
            id: 5,
            page: "/aphorism",
            categoryText: "AFORİZMLƏR",
            text: "Aforizmlər"
        },
        {
            id: 6,
            page: "/animals",
            categoryText: "HEYVANLAR",
            text: "Heyvanlar"
        },
        {
            id: 7,
            page: "/savelist",
            categoryText: "YADDA SAXLANILANLAR",
            text: "Yadda Saxlanılanlar"
        },
        {
            id: 8,
            page: "/about",
            categoryText: "HAQQIMIZDA",
            text: "Haqqımızda"
        },
    ]

    return (
        <>
            <div className={`sidebar-container ${open ? "open" : ""}`}>
                <button className={`close-btn ${open ? "show" : ""}`} onClick={() => setOpen(false)}>✕</button>
                <h2>Menü</h2>
                <ul className='sidebar'>
                    <li className='sidebar-list'>
                        {pages.map((page, index) => (
                            <Link key={index} className='sidebar-link' onClick={() => setOpen(false)} to={page.page} state={{ categoryText: page?.categoryText }}>
                                <div className='sidebar-text-list'>
                                    <span>
                                        {page.text}
                                    </span>
                                    <span className='flex-row'>
                                        <ChevronRightIcon />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </li>
                </ul>
            </div>
            <div className={`overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)}></div>
        </>
    )
}

export default Sidebar;