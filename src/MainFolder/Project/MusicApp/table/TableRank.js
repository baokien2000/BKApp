import Table from 'react-bootstrap/Table';

export default function TableRank(props) {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Top</th>
                    <th>Name</th>
                    <th>Singer</th>
                    <th>Category</th>
                    <th style={{ width: "10%" }}>Listens</th>

                </tr>
            </thead>
            <tbody>
                {props.Data.map((value, index) => {
                    return (
                        (index >= (props.currentPage == 1 ? 0 : 6 * (props.currentPage - 1))
                            && index < 6 * props.currentPage)
                            ? (
                                <tr key={value.id}>
                                    <td>{index + 1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.singer}</td>
                                    <td>{value.category}</td>
                                    <td>{value.listens}</td>

                                </tr>
                            ) : null
                    )
                })}
            </tbody>
        </Table>
    )
}