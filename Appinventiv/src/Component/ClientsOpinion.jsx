import React, { useState } from "react";


const testimonials = [
  {
    text: "We chose Appinventiv to build our financial literacy and money management app from start to finish. From the first call, we were very impressed with Appinventiv's professionalism, expertise, and commitment to delivering top-notch results.",
    name: "Simon Wing",
    role: "Co-Founder & CEO",
    company: "EdFundo",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "Appinventiv helped us scale our platform with clear vision and excellent execution. Their team understood our business needs and delivered outstanding results in a fast-paced environment.",
    name: "Alex Brown",
    role: "Product Head",
    company: "JobGet",
    img: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    text: "The Appinventiv team demonstrated strong technical expertise and deep business understanding. Their solution significantly improved our user engagement and overall growth strategy.",
    name: "Rahul Mehta",
    role: "Founder",
    company: "StartupX",
    img: "https://randomuser.me/api/portraits/men/12.jpg"
  }
];

const ClientsOpinion = () => {
  const [active, setActive] = useState(1);

  const prev = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonial-wrapper">
      {/* HEADER SECTION */}
      <div className="testimonial-header">
        <div className="header-content">
          <h1 className="heavy-title">
            First-Hand Opinions Of Clients On <br />
            Their Partnership Experience
          </h1>
          <p className="sub-description">
            We are a software and mobile application development company that ensures its expertise 
            extends to offer a seamlessly productive and growth-oriented partnership to its clients.
          </p>
        </div>

        <div className="arrows">
          <button className="nav-btn" onClick={prev}>←</button>
          <button className="nav-btn" onClick={next}>→</button>
        </div>
      </div>

      {/* CARDS SLIDER */}
      <div className="slider">
        {testimonials.map((item, index) => {
          let position = "card";

          if (index === active) position += " center";
          else if (
            index === (active - 1 + testimonials.length) % testimonials.length
          )
            position += " left";
          else if (
            index === (active + 1) % testimonials.length
          )
            position += " right";

          return (
            <div className={position} key={index}>
              <p className="card-text">"{item.text}"</p>

              <div className="card-footer">
                <div className="profile">
                  {/* Square-ish avatar with rounding to match the UI */}
                  <img src={item.img} alt={item.name} className="profile-img" />
                  <div className="profile-info">
                    <h4 className="user-name">{item.name}</h4>
                    <span className="user-role">
                      {item.role}, {item.company}
                    </span>
                  </div>
                </div>

                <div className="company-logo">
                  {item.company.toLowerCase()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientsOpinion;