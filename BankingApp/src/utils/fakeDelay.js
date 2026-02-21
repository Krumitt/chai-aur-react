

async function fakeDelay() {
    return new Promise((res, rej) => {
        setTimeout(res, 1000);
    })
}

export default fakeDelay;
