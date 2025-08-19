import React, { useEffect, useState } from 'react';
import "./hero.css";

import foto1 from "../../photos/foto1.jpg";
import foto2 from "../../photos/foto2.jpg";
import foto3 from "../../photos/foto3.jpg";
import foto4 from "../../photos/foto4.jpg";
import foto5 from "../../photos/foto5.jpg";

function Hero() {

    const slides = [
        {
            title: "Zamanın dəyəri",
            subtitle: "Hər gün 24 saatdır, amma onu necə istifadə etdiyiniz sizin uğurunuzu müəyyən edir. Effektiv planlama hər şeydir.",
            photo: foto1
        },
        {
            title: "Kiçik addımlar",
            subtitle: "Hər böyük nailiyyət kiçik addımlarla başlayır. Hər gün bir addım irəliləmək sizi məqsədinizə yaxınlaşdırır.",
            photo: foto2
        },
        {
            title: "Daim öyrənin",
            subtitle: "Hər gün yeni bir şey öyrənmək, biliyinizi artırmaq və bacarıqlarınızı inkişaf etdirmək sizə üstünlük verir.",
            photo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Spring_Lake%2C_New_Jersey_Beach_at_Sunrise.jpg"
        },
        {
            title: "Sağlam bədən, sağlam zehin",
            subtitle: "Fiziki sağlamlıq mental sağlamlığı dəstəkləyir. Hərəkət edin, düzgün qidalanın, ruhunuz da güclənsin.",
            photo: foto4
        },
        {
            title: "Yaradıcı olun",
            subtitle: "Problemləri həll edərkən fərqli düşünmək uğurun açarıdır. Yaradıcı yanaşmalar sizi rəqiblərinizdən fərqləndirir.",
            photo: foto5
        }
    ];

    const [current, setCurrent] = useState(0);

    // Avtomatik slide dəyişməsi
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000); // hər 5 saniyədə dəyişir
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='hero-container'>
            <section
                className="hero-carousel"
                style={{
                    backgroundImage: `url(${slides[current].photo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "background-image 1s ease",
                }}
            >
                {/* Overlay Hero*/}
                <div className="overlayHero"></div>

                <div className="hero-content">
                    <h1>{slides[current].title}</h1>
                    <p>{slides[current].subtitle}</p>
                </div>

                {/* Dots */}
                <div className="dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={index === current ? "dot active" : "dot"}
                            onClick={() => setCurrent(index)}
                        ></span>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Hero;