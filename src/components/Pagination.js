import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Pagination({pageNumber, setPageNumber, lastPage}) {

    function handlePageLast() {
        setPageNumber(pageNumber-1)
    }

    function handlePageNext() {
        setPageNumber(pageNumber+1)
    }

    return (
        <div className='pagination'>

            {pageNumber > 1 ? 
                <button onClick={handlePageLast} className='page-button'><FaArrowLeft />&nbsp;Last</button> 
                : <span className='page-button--placeholder'>&nbsp;</span>}

                <div>
                    Page {pageNumber} of {lastPage}
                </div>

            {pageNumber !== lastPage ? 
                <button onClick={handlePageNext} className='page-button'>Next&nbsp;<FaArrowRight /></button>
                :<span className='page-button--placeholder'>&nbsp;</span>}

        </div>
    )
}

export default Pagination;