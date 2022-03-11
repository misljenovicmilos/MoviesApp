import { Header } from "components";
import React from "react";

export const Skeletons: React.FC = () => {
  return (
    <div className="flex justify-content-center wrapper">
      <main className="main">
        <Header />
        <section className="section--movieDetail">
          <div className="flex flex--direction--column">
            <div className="skel__item--title" />
            <div className="skel__item--img">
              <span></span>
            </div>
            <div className="flex justify-content-space-between column">
              <div className="skel__info">
                <div className="skel__info--rating" />
                <div className="skel__info--language" />
                <div className="skel__info--popularity" />
                <div className="skel__info--companies" />
              </div>
              <div className="skel__info">
                <div className="skel__info--rating-star" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
