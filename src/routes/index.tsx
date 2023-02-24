import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { TodosContainer } from '../containers/todos';

interface IRoutesProps {}

export const Routess: React.FC<IRoutesProps> = () => (
  <Routes>
    <Route path="/" element={<TodosContainer/>} />
  </Routes>
);
