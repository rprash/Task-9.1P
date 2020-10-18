import React, { useState } from 'react';
import slider2 from './img/slider.jpeg';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([
    {
      heading: `Requester's Name`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
      nesciunt dolor minus quae perferendis velit natus, accusamus
      earum, fugit officia placeat dolorum voluptas.`,
      imgSrc: slider2,
    },
    {
      heading: `Requester's Name`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
      nesciunt dolor minus quae perferendis velit natus, accusamus
      earum, fugit officia placeat dolorum voluptas.`,
      imgSrc: slider2,
    },
    {
      heading: `Requester's Name`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
      nesciunt dolor minus quae perferendis velit natus, accusamus
      earum, fugit officia placeat dolorum voluptas.`,
      imgSrc: slider2,
    },
    {
      heading: `Requester's Name`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
      nesciunt dolor minus quae perferendis velit natus, accusamus
      earum, fugit officia placeat dolorum voluptas.`,
      imgSrc: slider2,
    },
    {
      heading: `Requester's Name`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
      nesciunt dolor minus quae perferendis velit natus, accusamus
      earum, fugit officia placeat dolorum voluptas.`,
      imgSrc: slider2,
    },
    {
      heading: `Requester's Name`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
      nesciunt dolor minus quae perferendis velit natus, accusamus
      earum, fugit officia placeat dolorum voluptas.`,
      imgSrc: slider2,
    },
  ])
  return (
    <>
      <Header heading={'ICrowdTask'} />
      <main>
        <section className="detail-section">
          <h1 className="detail-section-heading">Featured Requesters</h1>
          <div className="cards-div">
            {
              cards.length && cards.map(card => (
                <div className="single-card">
                  <img src={card.imgSrc} alt="" className="card-img" />
                  <div className="card-detail">
                    <h3 className="card-heading">{card.heading}</h3>
                    <p className="card-description">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
