function NoResults() {

    // console.log('hello: ', termSearched)

    return (
        <div className='no-results'>
            <div className='no-results__text'>We don't have results for your search at this time. Please check again in the near-future. </div>

            <img className='no-results__img' src='https://i.imgur.com/AS1JdTG.png' alt='Cute and Otterly' />
        </div>
    )
}

export default NoResults;