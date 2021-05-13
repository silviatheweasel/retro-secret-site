
const endpoint = "https://609d4c8e04bffa001792e69a.mockapi.io/products";
export const getProductData = () => {
    return fetch(endpoint).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("request failed");
    }, networkError => {
        console.log("network error")
    }).then(jsonresponse => {
        return jsonresponse;
    })
}

