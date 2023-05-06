import React from "react";
import ImageDetail from "../images/image_portofolio-1.jpg";
import CSS from "../images/CSS.png";
import HTML5 from "../images/HTML5.png";
import Js from "../images/Javascript.png";
import Github from "../images/Github.svg";

const ContentDetail = () => {
  return (
    <div>
      <div className="DetailContent">
        {/* image */}
        <img
          src={ImageDetail}
          className="DetailContent-image"
          alt="detailImage"
        />
        <div className="DetailContent-detail">
          {/* left side */}
          <div className="DetailContent-leftSide">
            {/* Description */}
            <div className="groupDesc">
              <p className="groupDesc-title">Description</p>
              <p className="groupDesc-textarea">
                Talk adalah aplikasi android yang memungkinkan pengguna untuk
                mendengarkan podcast, musik, dan radio di Indonesia. Aplikasi
                ini memiliki tampilan yang mudah digunakan dan memungkinkan
                pengguna untuk mencari dan menemukan konten yang diinginkan
                dengan mudah.
              </p>
            </div>

            {/* Date End */}
            <div className="groupDesc">
              <p className="groupDesc-title">Date End</p>
              <p className="groupDesc-textarea">03 January 2023</p>
            </div>

            {/* Ketegori */}
            <div className="groupDesc">
              <p className="groupDesc-title">Kategori</p>
              <p className="groupDesc-textarea">UI / UX</p>
            </div>

            {/* Author */}
            <div className="groupDesc">
              <p className="groupDesc-title">Author</p>
              <p className="groupDesc-textarea">NurPujie.com</p>
            </div>
          </div>

          {/* right side */}
          <div className="DetailContent-rightSide">
            {/* icon tools */}
            <div className="groupDesc">
              <p className="groupDesc-title">Tools</p>
              <p className="groupDesc-textarea">
                <img src={CSS} className="w-[32px]" alt="cssIcon" />
                <img src={HTML5} className="w-[32px]" alt="cssIcon" />
                <img src={Js} className="w-[32px]" alt="cssIcon" />
              </p>
            </div>

            {/* icon download */}
            <div className="groupDesc">
              <p className="groupDesc-title">Download</p>
              <p className="groupDesc-textarea">
                <button
                  href="#"
                  className="flex flex-col py-2 px-2 border border-primary-tints-400 rounded dark:text-primary-tints-500 dark:hover:text-primary-shades-500  hover:bg-primary-tones-300"
                >
                  <img
                    src={Github}
                    className="w-[32px] self-center mb-1 dark:bg-primary-tints-500"
                    alt="GithubIcon"
                  />
                  <span>Source Code</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
