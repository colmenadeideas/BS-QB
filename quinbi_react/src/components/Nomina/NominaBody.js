import React, { Component } from 'react';
import NominaRow from './NominaRow';

class NominaBody  extends Component {
    state = {  }
    editRow = (row) => {
        this.props.editRow(row)
    }
    verRow = (row) => {
        this.props.verRow(row)
    }
    render() { 
        return (  
            <React.Fragment>
                {
                    this.props.rows.map((value, key) => (
                        <tr key={key}>
                            <NominaRow 
                                row={value}
                                edit={this.editRow}
                                ver={this.verRow}
                            />   
                        </tr>
                    ))
                }
            </React.Fragment>  
        );
    }
}
 
export default NominaBody;