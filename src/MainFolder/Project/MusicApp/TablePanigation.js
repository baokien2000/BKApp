import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Pagination from '@mui/material/Pagination';

export default function TablePanigation(props) {

    return (
        <div className='TablePanigation'>
            <Pagination
                count={Math.round(props.length / 6)}
                variant="outlined"
                color="primary"
                onChange={(event) => props.setCurrentPage(event.target.textContent)}
                hideNextButton={true}
                hidePrevButton={true}
                page={parseInt(props.currentPage) ? parseInt(props.currentPage) : 1}
            />
        </div>
    )
}