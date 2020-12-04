import React, { useState } from 'react';

import { NavMenu } from './components/sections/NavMenu';
import { Sidebar } from './components/utilities/Sidebar';
import { Home } from './components/sections/Home';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { MdTest } from './components/sections/MdTest';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import './css/App.scss';
import './css/Carousel.scss';
import './css/Home.scss';
import './css/Skills.scss';
import './css/About.scss';
import './css/NavMenu.scss';
import './css/Section.scss';
import './css/TimeLine.scss';
import './css/Contact.scss';
import { Contact } from './components/sections/Contact';

export const App = () => {
    const sections = ['Home', 'Markdown', 'Projects', 'Skills', 'About', 'Contact']

    return (
        <div className="p-0">
            <Sidebar sections={sections} />
            <NavMenu sections={sections} />
            <Home nextSectionName={sections[1]} />
            <div>
                <MdTest nextSectionName={sections[2]} />
                <hr className="m-0" />
                <Projects nextSectionName={sections[3]} />
                <hr className="m-0" />
                <Skills nextSectionName={sections[4]} />
                <hr className="m-0" />
                <About nextSectionName={sections[5]} />
                <hr className="m-0" />
                <Contact nextSectionName={null} />
            </div>
        </div>
    );
}
