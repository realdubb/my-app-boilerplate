import React, { Component } from 'react'
import { Grid, Column } from '@extjs/ext-react';

export default class MyExample extends Component {

    store = new Ext.data.Store({
        data: [
            { "name": "Lisa", "email": "lisa@simpsons.com", "phone": "555-111-1224" },
            { "name": "Bart", "email": "bart@simpsons.com", "phone": "555-222-1234" },
            { "name": "Homer", "email": "home@simpsons.com", "phone": "555-222-1244" },
            { "name": "Marge", "email": "marge@simpsons.com", "phone": "555-222-1254" }
        ]
    });

    render() {
        return (
            <Grid store={this.store}>
                <Column text="Name" dataIndex="name" flex="1"/>
                <Column text="Email" dataIndex="email" flex="1"/>
                <Column text="Phone" dataIndex="phone" flex="1"/>
            </Grid>
        )
    }
}
