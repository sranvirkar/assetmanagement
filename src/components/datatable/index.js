import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';

class DatatablePage extends Component {

    constructor(props) {
        super(props); 
    }

    render() {
        const { data } = this.props;        
        return (
            <div className="data-table-wrapper">
                <MDBDataTable
                    striped
                    bordered
                    small
                    data={data || {}}
                    entries={20}
                />
            </div>
            
        );
    };
  
}

export default DatatablePage;