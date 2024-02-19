function NoResults({searchQuery}) {

    // console.log('hello: ', termSearched)

    return (
        <div className='no-results'>
            <div className='no-results__text'>Sorry, we couldn't find any results for&nbsp;
                 
                <span className='no-results__search-term'>"{searchQuery}"</span>
                &nbsp;at this time. Please check again in the near future as new products are routinely added to our site. </div>

            <img className='no-results__img' src='https://i.imgur.com/AS1JdTG.png' alt='Cute and Otterly' />
        </div>
    )
}

export default NoResults;