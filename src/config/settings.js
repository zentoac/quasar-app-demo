const settings = {
    dev: {
        // apiUrl: 'http://10.0.2.2:8082/api',
        apiUrl: 'http://80.211.111.156:8084/api',
    },
    prod: {
        apiUrl: 'http://80.211.111.156:8084/api',
    }
}

const getSettings = () => {
    if(process.env.DEV) return settings.dev;
    return settings.prod;
}

export default getSettings();
