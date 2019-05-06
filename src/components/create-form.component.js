import React, {Component} from 'react';
import axios from 'axios';

export default class Createform extends Component {

    constructor(props) {
        super(props);

        this.onChangeformEmail = this.onChangeformEmail.bind(this);
        this.onChangeformDescription = this.onChangeformDescription.bind(this);
        this.onChangeformPriority = this.onChangeformPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            form_Email: '',
            form_Description: '',
            form_priority: '',
            form_completed: false
        }
    }

    onChangeformEmail(e) {
        this.setState({
            form_Email: e.target.value
        });
    }

    onChangeformDescription(e) {
        this.setState({
            form_Description: e.target.value
        });
    }

    onChangeformPriority(e) {
        this.setState({
            form_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`form Email: ${this.state.form_Email}`);
        console.log(`form Description: ${this.state.form_Description}`);
        console.log(`form Priority: ${this.state.form_priority}`);
        console.log(`form Completed: ${this.state.form_completed}`);

        const newform = {
            form_Email: this.state.form_Email,
            form_Description: this.state.form_Description,
            form_priority: this.state.form_priority,
            form_completed: this.state.form_completed
        }

        axios.post('http://localhost:4000/forms/add', newform)
            .then(res => console.log(res.data));

        this.setState({
            form_Email: '',
            form_Description: '',
            form_priority: '',
            form_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New form</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.form_Email}
                                onChange={this.onChangeformEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.form_Description}
                                onChange={this.onChangeformDescription}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityUser"
                                    value="User"
                                    checked={this.state.form_priority==='User'}
                                    onChange={this.onChangeformPriority}
                                    />
                            <label className="form-check-label">User</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityEmploye"
                                    value="Employe"
                                    checked={this.state.form_priority==='Employe'}
                                    onChange={this.onChangeformPriority}
                                    />
                            <label className="form-check-label">Employe</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityGuest"
                                    value="Guest"
                                    checked={this.state.form_priority==='Guest'}
                                    onChange={this.onChangeformPriority}
                                    />
                            <label className="form-check-label">Guest</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}