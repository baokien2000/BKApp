import Table from 'react-bootstrap/Table';

export default function TableUser(props) {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th style={{ width: "10%" }}>Age</th>
                    <th style={{ width: "10%" }}>Gender</th>
                    {/* <th>Action</th> */}
                </tr>
            </thead>
            <tbody>
                {props.Data.map((value, index) => {
                    return (
                        (index >= (props.currentPage == 1 ? 0 : 6 * (props.currentPage - 1))
                            && index < 6 * props.currentPage)
                            ? (
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.username}</td>
                                    <td>{value.email}</td>
                                    <td>{value.age}</td>
                                    <td>{value.gender}</td>
                                    {/* <td>EDIT | REMOVE | VIEW </td> */}
                                </tr>
                            )
                            : null
                    )
                })}
            </tbody>
        </Table>
    )
}