import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const form = props => (
    <tr>
        <td className={props.form.form_completed ? 'completed' : ''}>{props.form.form_Email}</td>
        <td className={props.form.form_completed ? 'completed' : ''}>{props.form.form_Description}</td>
        <td className={props.form.form_completed ? 'completed' : ''}>{props.form.form_Type}</td>
        <td>
            <Link to={"/edit/"+props.form._id}>Edit</Link>
        </td>
    </tr>
)

export default class formsList extends Component {

    constructor(props) {
        super(props);
        this.state = {forms: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/forms/')
            .then(response => {
                this.setState({forms: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/forms/')
        .then(response => {
            this.setState({forms: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }

    formList() {
        return this.state.forms.map(function(currentform, i) {
            return <form form={currentform} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>forms List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.formList() }
                    </tbody>
                </table>
            </div>
        )
    }
}