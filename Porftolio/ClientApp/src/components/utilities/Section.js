import React, { Component } from 'react';
import { NextArrow } from './Navigation'

export function Section(props) {
    const sectionName = props.sectionName;
    const nextSectionName = props.nextSectionName;
    const content = props.content;

    return (
        <section className="resume-section" id={sectionName}>
            <div className="next-arrow-wrapper">
                <span className="title-container">
                    <h2 className="section-name">{sectionName}</h2>
                </span>
                {content}
            </div>
            {nextSectionName && < NextArrow id={nextSectionName} />}
        </section>
    );
};

