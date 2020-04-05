/* eslint-disable react/no-danger */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Exam.css';
import Link from '../../components/Link/Link';

export default function Exam({ title, id, exam }) {
  useStyles(s);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>
          {title}: {exam.title}
        </h1>
        <h3>Duration: {exam.exam_duration}</h3>
        <h4>Number of Questions: {exam.question_count}</h4>
        <div dangerouslySetInnerHTML={{ __html: exam.description }} />
        <br />
        <Link className={s.takeExamButton} to={`/exam/${id}/take-exam`}>
          Take the exam
        </Link>
      </div>
    </div>
  );
}

Exam.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  exam: PropTypes.object.isRequired,
};
