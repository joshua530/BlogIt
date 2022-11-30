import img from './img.jpeg';
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import parse from 'html-react-parser';

const About = () => {
  const [intro, setIntro] = useState(null);
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/about`)
      .then((response) => response.json())
      .then((data) => {
        setIntro(data.welcomeText);
        setAbout(data.aboutText);
      });
  };

  return (
    <>
      <div className="row">
        <img className="img-fluid col-md-8 mt-2 rounded" src={img} alt="" />
        <p className="col-md-4 mt-2 fs-5">{intro ? parse(intro) : ''}</p>
      </div>
      <div className="mt-md-3">
        <h4>Hi there 👋</h4>
        <p>{about ? parse(about) : <Spinner />}</p>
      </div>
    </>
  );
};

export default About;
