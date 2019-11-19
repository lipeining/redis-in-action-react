import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, ReferenceInput,ReferenceField, SelectInput, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

import { Typography } from "@material-ui/core";

import icon from '@material-ui/icons/Book';
export const ArticleIcon = icon;


export const ArticleList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="createTime" />
            <TextField source="title" />
            <TextField source="link" />
            <TextField source="CreateUser.nickName" />
            <TextField source="content" />
            <EditButton basePath="/articles" />
        </Datagrid>
    </List>
);

const ArticleTitle = ({ record }) => {
    return <span>Article {record ? `"${record.title}"` : ''}</span>;
};
const Aside = ({ record }) => (
  <div style={{ width: 200, margin: '1em' }}>
      <Typography variant="title">Article details</Typography>
      {record &&
        (<Typography variant="body1">
          Articles will only be published one an editor approves them
        </Typography>)
      }
  </div>
);

export const ArticleEdit = (props) => (
    <Edit title={<ArticleTitle />} aside={<Aside />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput label="title" source="title" />
            <TextInput label="link" source="link" />
            <RichTextInput label="content" source="content" />
        </SimpleForm>
    </Edit>
);
const validateArticleCreation = (values) => {
  const errors = {};
  if (!values.title) {
      errors.title = ['The title is required'];
  }
  if (!values.link) {
      errors.link = ['The link is required'];
  }
  if (!values.content) {
      errors.content = ['The content is required'];
  }
  return errors;
};

export const ArticleCreate = (props) => (
    <Create title="Create a Article" {...props}>
        <SimpleForm validate={validateArticleCreation}>
            <ReferenceInput source="createUserId" reference="users">
              <SelectInput optionText="nickName" />
            </ReferenceInput>
            <TextInput label="title" source="title" />
            <TextInput label="link" source="link" />
            <RichTextInput label="content" source="content" />
        </SimpleForm>
    </Create>
);