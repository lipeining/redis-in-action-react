import React, { Component } from 'react';
import { showNotification, UPDATE, withDataProvider, } from 'react-admin';
import Button from '@material-ui/core/Button';

class VoteButton extends Component {
    handleClick = () => {
        const { dataProvider, dispatch, record, push, type, resource } = this.props;
        const updatedRecord = { action: 'vote', type: { "plus": 1, "decr": 0 }[type], userId: 1 };
        // dataProvider(UPDATE, 'articles', { id: record.id, data: updatedRecord })
        //     .then(() => {
        //     //    dispatch(showNotification('article voted'));
        //     //    dispatch(push('/articles'));
        //        showNotification('article voted');
        //        push('/articles');
        //     })
        //     .catch((e) => {
        //     //    dispatch(showNotification('Error: article voted error', 'warning'))
        //        showNotification('Error: article voted error', 'warning');
        //     });
        dataProvider(UPDATE, resource, { id: record.id, data: updatedRecord }, {
            onSuccess: {
                notification: { body: `${resource} voted `, level: 'info' },
                redirectTo: `/${resource}`,
            },
            onFailure: {
                notification: { body: `Error: ${resource} not voted`, level: 'warning' },
            },
        })
    }

    render() {
        return <Button onClick={this.handleClick}>{this.props.children || 'button'}</Button>;
    }
}
export default withDataProvider(VoteButton);