import React from "react";
import "./Container.css";

export const Container = () => {
  return (
    <>
      <h2>API Blog</h2>
      <p className="first-para">
        Learn how to build applications using Generative AI model APIs
      </p>
      <div className="container-box">
        <div className="child-box">
          <img
            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="img1"
          />
          <div className="date">
            <p>Mar 16,2020</p>
            <p>Marketing</p>
          </div>
          <h3>Boost your conversion rate</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            nulla quod nam, officia laudantium saepe, inventore consequatur
            eligendi iure mollitia quasi non eius. Voluptates atque, laboriosam
            cum maiores molestiae fuga.
          </p>
        </div>
        <div className="child-box">
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="img2"
          />
          <div className="date">
            <p>Mar 10,2020</p>
            <p>Sales</p>
          </div>
          <h3>How to use search engine optimization to drive sales</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            nulla quod nam, officia laudantium saepe, inventore consequatur
            eligendi iure mollitia quasi non eius. Voluptates atque, laboriosam
            cum maiores molestiae fuga.
          </p>
        </div>
        <div className="child-box">
          <img
            src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1196&q=80"
            alt="img1"
          />
          <div className="date">
            <p>Feb 12,2020</p>
            <p>Business</p>
          </div>
          <h3>Improve your customer experience</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            nulla quod nam, officia laudantium saepe, inventore consequatur
            eligendi iure mollitia quasi non eius. Voluptates atque, laboriosam
            cum maiores molestiae fuga.
          </p>
        </div>
      </div>
    </>
  );
};
