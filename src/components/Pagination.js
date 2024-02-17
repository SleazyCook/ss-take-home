function Pagination({pageNumber, setPageNumber, lastPage}) {

    function handlePageLast() {
        setPageNumber(pageNumber-1)
    }

    function handlePageNext() {
        setPageNumber(pageNumber+1)
    }

    return (
        <div className='pagination'>

            {pageNumber > 1 && <button onClick={handlePageLast}>Last</button>}

                <div>
                    Page {pageNumber} of {lastPage}
                </div>

            <button onClick={handlePageNext}>Next</button>
        </div>
    )
}

export default Pagination;