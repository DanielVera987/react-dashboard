import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import ChartBar from '@components/Chart/ChartBar';

const Dashboard = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Dashboard</Card.Title>
                    <hr />

                    {/* ChartBar */}
                    <Card>
                        <ChartBar />
                    </Card>

                    {/* List Users */}
                    <Card className="mt-4">
                        <Card.Header>Users</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            {Array.from({ length: 5 }).map(
                                                (_, index) => (
                                                    <th key={index}>
                                                        Table heading
                                                    </th>
                                                ),
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            {Array.from({ length: 5 }).map(
                                                (_, index) => (
                                                    <td key={index}>
                                                        Table cell {index}
                                                    </td>
                                                ),
                                            )}
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            {Array.from({ length: 5 }).map(
                                                (_, index) => (
                                                    <td key={index}>
                                                        Table cell {index}
                                                    </td>
                                                ),
                                            )}
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            {Array.from({ length: 5 }).map(
                                                (_, index) => (
                                                    <td key={index}>
                                                        Table cell {index}
                                                    </td>
                                                ),
                                            )}
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </>
    );
};

export default Dashboard;
