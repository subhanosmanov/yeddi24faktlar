import React, { useEffect } from 'react';
import "./about.css";

function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("first");
    }, []);
    return (
        <div className='about'>
            <h2>HAQQIMIZDA</h2>
            <hr style={{ margin: "10px 0" }} />
            <p className="about-text">
                Yeddi 24 Faktlar dünyanın dörd bir yanından maraqlı, düşündürücü və ilhamverici faktları sizə 24 saat, 7 gün ərzində çatdırmağı qarşısına məqsəd qoymuş onlayn platformadır. Elmdən tarixə, təbiətdən mədəniyyətə, unudulmuş hadisələrdən ən son kəşflərə qədər hər mövzu bizim üçün dəyərlidir. Məqsədimiz oxucuların maraq hissini oyatmaq və öyrənmə həvəsini artırmaqdır.
                Biz inanırıq ki, bilik həm əlçatan, həm də maraqlı olmalıdır. Buna görə də təqdim etdiyimiz hər bir məlumat diqqətlə araşdırılır, dəqiqliyi yoxlanılır və oxucuya sadə, anlaşıqlı dildə çatdırılır. Peşəkar yazar, tədqiqatçı və redaktor komandamız sizə etibarlı, keyfiyyətli və vaxtınıza dəyəcək məzmun təqdim etmək üçün gecə-gündüz çalışır.
                Yeddi 24 Faktlar-da mövzular çox genişdir — kainatın sirləri, təbiətin möcüzələri, insan nailiyyətləri, ilhamverici şəxsi hekayələr və gündəlik həyatın maraqlı detallarına qədər. Mövzu fərqi yoxdur, məqsədimiz həmişə eynidir: sizin dünyagörüşünüzü genişləndirmək, təsəvvürünüzü oyatmaq və hər gün sizə yeni bir fikir vermək.
                Biz həm də icmaya dəyər veririk. Öyrənmənin ən güclü tərəfi paylaşmaqdır. Bu səbəbdən oxucularımızı məzmunlarımızla qarşılıqlı əlaqədə olmağa, sevdikləri faktları paylaşmağa və hətta öz kəşflərini təqdim etməyə təşviq edirik. Birlikdə öyrənmə həvəsini və bilik mədəniyyətini böyüdə bilərik.
                İstər 5 dəqiqəlik boş vaxtınız olsun, istərsə də uzun bir axşam, Yeddi 24 Faktlar hər zaman sizin yanınızdadır. Burada həmişə yeni, maraqlı və düşündürücü məlumat tapacaqsınız. Çünki bilik ən yaxşı şəkildə paylaşılaraq çoxalır və biz inanırıq ki, o, heç vaxt yatmamalıdır.
            </p>
            <p className="about-text">
                Yeddi 24 Facts is a digital platform committed to bringing you captivating facts from around the globe — 24 hours a day, 7 days a week. Whether it’s a groundbreaking scientific discovery, a forgotten piece of history, an extraordinary event in nature, or a cultural tradition you’ve never heard of, our mission is to spark curiosity and inspire lifelong learning.
                We believe that knowledge should be both accessible and enjoyable. That’s why every piece of content we share is carefully researched, fact-checked, and presented in a simple, engaging way. Our dedicated team of writers, researchers, and editors works tirelessly to ensure that the information you read here is accurate, reliable, and worth your time.
                At Yeddi 24 Facts, we cover a wide range of topics — from the mysteries of the universe and the wonders of wildlife to human achievements and inspiring personal stories. No matter the subject, our goal is always the same: to expand your perspective, ignite your imagination, and give you something new to think about each day.
                We also value community and believe that learning is most powerful when shared. That’s why we encourage our readers to engage with our content, share their favorite facts, and even contribute their own discoveries. Together, we can build a community that celebrates curiosity and the joy of learning.
                So whether you have just five spare minutes or an entire evening, Yeddi 24 Facts is your trusted source for fascinating, thought-provoking, and inspiring information — anytime, anywhere. Because knowledge grows best when it never sleeps.
            </p>
        </div>
    )
}

export default About;