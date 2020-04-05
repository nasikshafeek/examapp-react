/* eslint-disable jsx-a11y/anchor-has-content */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../components/Link';
import s from './Home.css';

export default function Home({ exams }) {
  useStyles(s);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>Exams</h1>
        {exams.map(item => (
          <article className={s.examItem}>
            <h1 className={s.examTitle}> {item.title} </h1>
            <h2 className={s.examDuration}>Duration: {item.exam_duration}</h2>
            <p>
              Published Date:{' '}
              {new Date(item.pub_date).toISOString().split('T')[0]}{' '}
            </p>
            <Link className={s.hiddenLink} href={`/exam-wall/${item.id}`} />
          </article>
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {
  exams: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      pub_date: PropTypes.string.isRequired,
      exam_duration: PropTypes.string,
    }),
  ).isRequired,
};
