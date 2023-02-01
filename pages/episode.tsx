import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { AiOutlineClockCircle, AiOutlineSearch, AiFillPlayCircle } from "react-icons/ai";
import styles from "../styles/episode.module.css";
import episodes from "../utilities/episodes.json";
import Footer from "../components/Footer";

const episode = () => {
  // const [latest, setLatest] = useState([]);

  // useEffect(() => {
    
  // }, []);

  return (
    <div className={styles.episode}>
      <Nav />
      <section className={styles.header}>
        <button>Latest</button>

        <div className={styles.text}>
          <h2>Druid’s Podcasts, the mere feeling</h2>
          <p>
            It is a long established fact that a rea...
          </p>
          <div className={styles.time}>
            <AiOutlineClockCircle />
            <span>16 min</span>
          </div>
        </div>
      </section>
      <section className={styles.pod}>
        <h2>All podcasts are available on</h2>
        <div className={styles.podcast}>
          <img src="/dv06.png" alt="" />
          <img src="/dv05.png" alt="" />
          <img src="/dv04.png" alt="" />
          <img src="/dv03.png" alt="" />
          <img src="/dv02.png" alt="" />
          <img src="/dv01.png" alt="" />
        </div>
      </section>

      <section className={styles.episodeMap}>
        <div className={styles.top}>
          <p>
            Sort by :
            <select name="p" id="">
              <option value="latest">Latest</option>
              <option value="recommended">Recommended</option>
              <option value="discover">Discover</option>
            </select>
          </p>

          <div className={styles.input}>
            <AiOutlineSearch />
            <input type="text" placeholder="Search Podcast" id="" />
          </div>
        </div>
      </section>
      <section className={styles.episodesSec}>
        <h1>Episodes</h1>
        <div className={styles.epiSecOption}>
           <div className={styles.epiCont}>
              <img src="/dv13.png" alt="" />
              <div className={styles.epiText}>
                <h3>Bringing back the tradition</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv14.png" alt="" />
              <div className={styles.epiText}>
                <h3>Good Music: The myth and legend</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv15.png" alt="" />
              <div className={styles.epiText}>
                <h3>Druid’s Podcasts, the mere feeling</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv13.png" alt="" />
              <div className={styles.epiText}>
                <h3>Bringing back the tradition</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv14.png" alt="" />
              <div className={styles.epiText}>
                <h3>Good Music: The myth and legend</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv15.png" alt="" />
              <div className={styles.epiText}>
                <h3>Druid’s Podcasts, the mere feeling</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv13.png" alt="" />
              <div className={styles.epiText}>
                <h3>Bringing back the tradition</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv14.png" alt="" />
              <div className={styles.epiText}>
                <h3>Good Music: The myth and legend</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv15.png" alt="" />
              <div className={styles.epiText}>
                <h3>Druid’s Podcasts, the mere feeling</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv13.png" alt="" />
              <div className={styles.epiText}>
                <h3>Bringing back the tradition</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv14.png" alt="" />
              <div className={styles.epiText}>
                <h3>Good Music: The myth and legend</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv15.png" alt="" />
              <div className={styles.epiText}>
                <h3>Druid’s Podcasts, the mere feeling</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv13.png" alt="" />
              <div className={styles.epiText}>
                <h3>Bringing back the tradition</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv14.png" alt="" />
              <div className={styles.epiText}>
                <h3>Good Music: The myth and legend</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv15.png" alt="" />
              <div className={styles.epiText}>
                <h3>Druid’s Podcasts, the mere feeling</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv13.png" alt="" />
              <div className={styles.epiText}>
                <h3>Bringing back the tradition</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv14.png" alt="" />
              <div className={styles.epiText}>
                <h3>Good Music: The myth and legend</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
           <div className={styles.epiCont}>
              <img src="/dv15.png" alt="" />
              <div className={styles.epiText}>
                <h3>Druid’s Podcasts, the mere feeling</h3>
                <p>
                  It is a long established fact that a reader...
                </p>
                <button>
                  <AiFillPlayCircle />
                  Play
                </button>
              </div>
            </div>
        </div>
      </section>
      <section className={styles.pageNav}>
        <p>Prev</p>
        <p className={styles.pageNavNum}>1</p>
        <p className={styles.pageNavNum}>2</p>
        <p className={styles.pageNavNum}>3</p>
        <p className={styles.pageNavNum}>4</p>
        <p className={styles.pageNavNum}>...</p>
        <p className={styles.next}>Next</p>
      </section>
      <Footer/>
    </div>
  );
};

export default episode;
