import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import '../styles/Resume.css';

const items = [
  {
    id: 'bright-health',
    src: 'https://i.maga.host/W0BLUlh.png',
  },
  {
    id: 'chrono',
    src: 'https://i.maga.host/xd2Vwug.png',
  },
  {
    id: 'headspring',
    src: 'https://i.maga.host/2aX232r.png',
  },
  {
    id: 'musx',
    src: 'https://i.maga.host/SqSTzuu.png'
  },
];

const Resume = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [itemId, setItemId] = useState(items[0].id);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setItemId(items[nextIndex].id);
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setItemId(items[prevIndex].id);
    setActiveIndex(prevIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        key={item.id}
      >
        <img src={item.src} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="resumeContainer">
      <div className="companyCarousel">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          interval={false}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </div>
      {
        (itemId === 'bright-health') && (
          <div className="workExperience brightHealthInfo">
            <h1>Software Engineer - <span className="highlights">Bright Health, Austin TX</span></h1>
            <h3 className="timeWorked">March 2020 - Present</h3>
            <hr />
            <ul>
              <li className="item">Created an Accordion component in React to be used with Contentful API</li>
              <li className="item">Added changes for a bootstrap like library to be used across all company repositories</li>
              <li className="item">Added connections to Contentful API in C# backend for connecting contentful models to backend API</li>
              <li className="item">Implemented footer redesign based on design mockups from the design team</li>
              <li className="item">Implemented sign in/sign up page with Azure AD B2C</li>
            </ul>
          </div>
        )
      }
      {
        (itemId === 'chrono') && (
          <div className="workExperience chronoInfo">
            <h1>Software Engineer - <span className="highlights">Chrono.gg, Austin TX</span></h1>
            <h3 className="timeWorked">March 2019 - February 2020</h3>
            <hr />
            <ul>
              <li className="item">Created the architecture behind the schema for the new platform using Typeorm and TypeScript</li>
              <li className="item">Created documentation and best practices to set up success for new hires</li>
              <li className="item">Created major bug fixes across the board for all the products using React, Node, and Koa</li>
              <li className="item">Created a script using node for entering steam keys for the daily deal games and the creator store games</li>
              <li className="item">Created proof of concept for implementing custom authentication with Firebase</li>
              <li className="item">Used Jenkins to deploy pull requests</li>
            </ul>
          </div>
        )
      }
      {
        (itemId === 'headspring') && (
          <div className="workExperience headspringInfo">
            <h1>Software Engineer - <span className="highlights">Headspring, Austin TX</span></h1>
            <h3 className="timeWorked">June 2018 - March 2019</h3>
            <hr />
            <ul>
              <li className="item">Worked on a project for SKF Bearings, a client of HeadSpring at the time</li>
              <li className="item">Used Xamarin and C# to create an app for managing SKF bearing devices and checking their status</li>
              <li className="item">Created bug fixes for internal company dashboard using .NET, AutoMapper, and Shouldly</li>
            </ul>
          </div>
        )
      }
      {
        (itemId === 'musx') && (
          <div className="workExperience musxInfo">
            <h1>Software Engineer - <span className="highlights">Musx, Austin TX</span></h1>
            <h3 className="timeWorked">February 2018 - June 2018</h3>
            <hr />
            <ul>
              <li className="item">Worked on a react native application for sending music to friends</li>
              <li className="item">Added the no connection banner for when a user is not connected to a network or WiFi</li>
              <li className="item">Used Android Studio for coding solutions for Android applications</li>
              <li className="item">Used XCode for coding solutions for iOS applications</li>
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default Resume;