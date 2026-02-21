

async function fakeDelay() {
    return new Promise((res) => {
        setTimeout(res, 1000);
    })
}

export default fakeDelay;
