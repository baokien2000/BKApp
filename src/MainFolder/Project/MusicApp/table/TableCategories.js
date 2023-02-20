import Table from 'react-bootstrap/Table';

export default function TableCategories(props) {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Topic</th>
                    <th style={{ width: "10%" }}>Like</th>
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
                                    <td>{value.name}</td>
                                    <td>{value.topic}</td>
                                    <td>{value.follow}</td>
                                    {/* <td>EDIT | REMOVE | VIEW</td> */}
                                </tr>
                            ) : null
                    )
                })}
            </tbody>
        </Table>
    )
}