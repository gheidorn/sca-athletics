import React, { Component } from 'react';

export default () => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Grade</th>
                    <th>Sports</th>
                </tr>        
            </thead>
            <tbody>
                <tr>
                    <td>Sarah</td>
                    <td>Doe</td>
                    <td>8</td>
                    <td>Girls Volleyball, Soccer</td>
                </tr>
                <tr>
                    <td>Dominick</td>
                    <td>Doe</td>
                    <td>7</td>
                    <td>Football, Basketball, Volleyball, Soccer</td>
                </tr>
            </tbody>
        </table>
    )

};