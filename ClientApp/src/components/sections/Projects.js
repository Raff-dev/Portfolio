﻿import React, { Component } from 'react';
import { Carousel } from '../utilities/Carousel';
import { Section } from '../utilities/Section';

export class Projects extends Component {
    displayName = Projects.name

    constructor(props) {
        super(props);
        this.state = {
            nextSectionName: props.nextSectionName,
            projects: [
                {
                    image: "images/watplan.png",
                    title: 'WatPlan',
                    description:
                        <p>Military University of Technology schedule android app,
                        written in <span>Java</span>, implementing local <span>SQL </span>
                        database, with my own REST API built using
                        <span> Django REST Framework</span>, <span>Python</span>.</p>,
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },
                {
                    image: "images/toster.gif",
                    title: 'Toster',
                    description: <p>Toster is a copy of Twitter, which back-end i have
                    written in <span>Python</span> using <span>Django framework</span>,
                    whereas front-end in <span>JavaScript</span>, using <span>JQuery</span>.
                    Includes various activities such as posting, commenting, liking,
                    editing profile and more.</p>,
                    links: [
                        'https://github.com/Raff-dev/Toster']
                },
                {
                    image: "images/lz77.png",
                    title: 'LZ77',
                    description: <p>Theory of information and encoding class project,
                    which is an implementation of LZ77 losseless text data compression algorithm.
                    Written in <span>C#</span> using <span>ASP.NET</span>.</p>,
                    links: [
                        'https://github.com/Raff-dev/Dictionary-Coder']
                },
                {
                    image: "images/tetris.gif",
                    title: 'Tetris',
                    description: <p>My interpretation of classic Tetris game,
                    written in <span>Java</span> and displayed with the help
                    of JavaFX graphical library.</p>,
                    links: [
                        'https://github.com/Raff-dev/Tetris',]
                },
                {
                    image: "images/portfolio.png",
                    title: 'Portfolio',
                    description: <p>This portfolio of mine was created in
                    <span> JavaScript </span>using<span> ReactJS </span>framework
                     to display my skills and experience.</p>,
                    links: [
                        'https://github.com/Raff-dev/Portfolio',
                        'https://raff-dev.github.io/Portfolio']
                },
                {
                    image: "images/boids.gif",
                    title: 'Boids',
                    description: <p>Boids is an artificial life simulation,
                    which aims to replicate behaviour of flocks of birds.
                    Written in <span>C#</span> language within <span>Unity</span> game engine.</p>,
                    links: [
                        'https://github.com/Raff-dev/Boids',]
                },
            ],

            loading: true,
        };

        fetch('api/Projects/?highlighted=true')
            .then(response => response.json())
            .then(data => {
                this.setState({ loading: false });
            })
    }

    render() {
        let content = <Carousel cards={this.state.projects}></Carousel>;

        return (
            <Section
                content={content}
                sectionName={"Projects"}
                nextSectionName={this.state.nextSectionName}
            />
        );
    }
}

