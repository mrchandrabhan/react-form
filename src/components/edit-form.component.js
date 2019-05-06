import React, {Component} from 'react';
import axios from 'axios';

export default class Editform extends Component {

    constructor(props) {
        super(props);

        this.onChangeformDescription = this.onChangeformDescription.bind(this);
        this.onChangeformResponsible = this.onChangeformResponsible.bind(this);
        this.onChangeformPriority = this.onChangeformPriority.bind(this);
        this.onChangeformCompleted = this.onChangeformCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            form_description: '',
            form_responsible: '',
            form_priority: '',
            form_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/forms/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    form_description: response.data.form_description,
                    form_responsible: response.data.form_responsible,
                    form_priority: response.data.form_priority,
                    form_completed: response.data.form_completed
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeformDescription(e) {
        this.setState({
            form_description: e.target.value
        });
    }

    onChangeformResponsible(e) {
        this.setState({
            form_responsible: e.target.value
        });
    }

    onChangeformPriority(e) {
        this.setState({
            form_priority: e.target.value
        });
    }

    onChangeformCompleted(e) {
        this.setState({
            form_completed: !this.state.form_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            form_description: this.state.form_description,
            form_responsible: this.state.form_responsible,
            form_priority: this.state.form_priority,
            form_completed: this.state.form_completed
        };
        axios.post('http://localhost:4000/forms/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update form</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.form_description}
                                onChange={this.onChangeformDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.form_responsible}
                                onChange={this.onChangeformResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.form_priority==='Low'}
                                    onChange={this.onChangeformPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.form_priority==='Medium'}
                                    onChange={this.onChangeformPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.form_priority==='High'}
                                    onChange={this.onChangeformPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                        <div className="form-check">
                            <input  type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckbox"
                                    name="completedCheckbox"
                                    onChange={this.onChangeformCompleted}
                                    checked={this.state.form_completed}
                                    value={this.state.form_completed}
                                    />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Completed
                            </label>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update form" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}