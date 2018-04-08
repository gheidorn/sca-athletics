import React, {Component} from 'react';

class NewAthleteForm extends Component {
    render() {
        return (
            <form name="newAthleteForm">
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputFirstName4">First Name</label>
                    <input type="text" className="form-control" id="inputFistName4" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="inputLastName4">Last Name</label>
                    <input type="text" className="form-control" id="inputLastName4" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control" value="">
                        <option>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Grade" />
                    </div>
                    <div className="col">
                        <select name="sport" className="form-control">
                            <option>Football</option>
                            <option>Cheerleading</option>
                            <option>Girls Basketball</option>
                            <option>Boys Basketball</option>
                            <option>Girls Volleyball</option>
                            <option>Boys Volleyball</option>
                            <option>Soccer</option>
                        </select>
                    </div>
                </div>

            </form>
        );
    }
}

export default NewAthleteForm;