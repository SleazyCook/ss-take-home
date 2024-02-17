export async function fetchProductData(pageNumber, searchTerm) {
    try {
        const response = await fetch(
            `http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${searchTerm}&resultsFormat=native&page=${pageNumber}`,
            {
                headers: {
                    accept: "application/json"
                }
            }
        )
        const productData = await response.json()
        return productData
    } catch (error) {
        console.log(error)
    }
}