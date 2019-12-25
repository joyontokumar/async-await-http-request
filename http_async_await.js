class HttRequest {

    // create an http get request
    async get(url) {
        const responseData = await fetch(url);
        const getResData = await responseData.json();
        return getResData;
    }

    // create an http post request
    async post(url, data) {
        const responseData = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(data)
        });
        const getResData = await responseData.json();
        return getResData;
    }

    // create an http update request
    async put(url, data) {
        const responseData = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(data)
        });
        const getResData = await responseData.json();
        return getResData;
    }

    // create an http delete request
    async delete(url) {
        const responseData = await fetch(url, {
            method: "DELETE",
            headers: {
                'Content-type': 'Application/json'
            },
        });
        const getResData = await 'deleted data'
        return getResData;
    }
}