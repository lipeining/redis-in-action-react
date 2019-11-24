import React, { Component } from 'react';
import {
    List, Datagrid, Edit, showNotification,
    UPDATE, Create, SimpleForm, ReferenceInput, ReferenceField, CreateButton, SelectInput, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { Typography } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import icon from '@material-ui/icons/Book';
import VoteButton from './VoteButton';
export const ArticleIcon = icon;

// const ArticleActions = ({
//     basePath,
//     data,
//     currentSort,
//     displayedFilters,
//     exporter,
//     filters,
//     filterValues,
//     onUnselectItems,
//     resource,
//     selectedIds,
//     showFilter,
//     total
// }) => (
//     <Toolbar>
//         {/* {filters && React.cloneElement(filters, {
//             resource,
//             showFilter,
//             displayedFilters,
//             filterValues,
//             context: 'button',
//         })} */}
//         {/* <CreateButton basePath={basePath} /> */}
//         {/* Add your custom actions */}
//         <VoteButton record={data} type={"plus"}>plus</VoteButton>
//         <VoteButton record={data} type={"decr"}>decr</VoteButton>
//     </Toolbar>
// );


export const ArticleList = (props) => (
    <List {...props} >
        <Datagrid>
            <TextField source="id" />
            <DateField source="createTime" />
            <TextField source="title" />
            <TextField source="link" />
            <TextField source="CreateUser.nickName" />
            <TextField source="content" />
            <VoteButton {...props} type={"plus"}>plus</VoteButton>
            <VoteButton {...props} type={"decr"}>decr</VoteButton>
            {/* <EditButton basePath="/articles" /> */}
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