import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import '../../css/Sidebar.scss'

export const Sidebar = ({ sections }) => {
    const [currentSection, setCurrentSection] = useState(sections[0])
    const [show, setShow] = useState(false);

    useEffect(() => {
        let prevScroll = window.scrollY;
        window.addEventListener('scroll', event => {
            if (window.scrollY < window.innerHeight * 3 / 4) setShow(false)
            else setShow(true)


            let elems = sections.map(section => {
                let elem = document.getElementById(section);
                return ({ name: section, height: elem.clientHeight, offset: elem.offsetTop })
            })

            let dir = window.scrollY - prevScroll > 0;
            prevScroll = window.scrollY;

            for (let [index, el] of Object.entries(elems)) {
                if (dir & (window.scrollY + window.innerHeight / 2 > el.offset)) {
                    setCurrentSection(el.name);
                } else if (!dir & (el.offset + el.height > window.scrollY + window.innerHeight / 2)) {
                    setCurrentSection(el.name);
                    break;
                }
            }
        })

    }, [])

    const getDuration = (section) => {
        return 150 + 350 * Math.abs(sections.indexOf(section, sections.indexOf(currentSection)))
    }

    return (
        <nav className={show ? 'sidebar show' : 'sidebar'}>
            {sections.map(section =>
                <Link
                    key={section}
                    to={section}
                    smooth={true} duration={getDuration(section)}
                    className={section === currentSection ? 'selected' : undefined}>
                    <div className="dot"></div>
                    <span>{section}</span>
                </Link>
            )}
        </nav >
    );
}