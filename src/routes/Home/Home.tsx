import * as React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <section className='Home'>
    <h1>DnD 5th Edition Class Quiz</h1>

    <Link className='Button' to='/quiz'>
      Start quiz
    </Link>
  </section>
);
