/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import ExamWall from './ExamWall';

const title = 'Take Exam';

async function action({ params, fetch }) {
  const examId = params.id;
  const examReq = await fetch(
    `http://0.0.0.0:8000/api/exams/${examId}/?format=json`,
    {
      mode: 'no-cors',
    },
  );
  const exam = await examReq.json();
  return {
    title,
    exam,
    component: (
      <Layout>
        <ExamWall exam={exam} id={params.id} title={title} />
      </Layout>
    ),
  };
}

export default action;
