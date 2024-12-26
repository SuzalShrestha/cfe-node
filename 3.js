function fetchData(callback) {
    setTimeout(() => {
        const data = 'Hello from the async world!';
        callback(data);
    }, 2000);
}
