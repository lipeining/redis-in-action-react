import React from 'react';
import { render } from 'react-dom';
import { Admin, Resource, ListGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import {UserList, UserEdit, UserCreate}  from './users';
import {ArticleList, ArticleEdit, ArticleCreate}  from './articles';

const dataProvider = simpleRestProvider("http://localhost:7001");
const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
          <Resource name="articles" list={ArticleList} edit={ArticleEdit} create={ArticleCreate} />
      </Admin>
);
export default App;