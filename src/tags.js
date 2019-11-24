import React, { Component } from 'react';
import {
    List, Datagrid, Edit, showNotification,
    UPDATE, Create, SimpleForm, ReferenceInput, ReferenceField, CreateButton, SelectInput, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput
} from 'react-admin';
import { Typography } from "@material-ui/core";

import icon from '@material-ui/icons/Book';
import VoteButton from './VoteButton';
export const TagIcon = icon;


export const TagList = (props) => (
    <List {...props} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="vote_up" />
            <TextField source="vote_down" />
            <VoteButton {...props} type={"plus"}>plus</VoteButton>
            <VoteButton {...props} type={"decr"}>decr</VoteButton>
        </Datagrid>
    </List>
);

const TagTitle = ({ record }) => {
    return <span>Tag {record ? `"${record.name}"` : ''}</span>;
};
const Aside = ({ record }) => (
    <div style={{ width: 200, margin: '1em' }}>
        <Typography variant="title">Tag details</Typography>
        {record &&
            (<Typography variant="body1">
                Tags will only be published one an editor approves them
        </Typography>)
        }
    </div>
);

export const TagEdit = (props) => (
    <Edit title={<TagTitle />} aside={<Aside />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput label="name" source="name" />
        </SimpleForm>
    </Edit>
);
const validateTagCreation = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = ['The name is required'];
    }
    return errors;
};

export const TagCreate = (props) => (
    <Create title="Create a Tag" {...props}>
        <SimpleForm validate={validateTagCreation}>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="nickName" />
            </ReferenceInput>
            <TextInput label="name" source="name" />
        </SimpleForm>
    </Create>
);