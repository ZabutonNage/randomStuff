
test(result => {
    if (result === undefined) {
        console.log(`GOOD!`);
    }
    else {
        console.log(`BAD!`);
    }
});


function test(done) {
    const success = monkeyPatch({
        obj: console,
        toPatch: `warn`,
        patchFn: (patched, msg) => {
            console.log(`patchFn`, msg);
            patched(msg);
            return msg === `warn testMe`;
        },
        run: testMe
    });

    console.warn(`this must not be followed by patched fn`);

    done(success === true ? undefined : false);
}


function testMe() {
    console.log(`log testMe`);
    console.warn(`warn testMe`);
}


function monkeyPatch({ obj, toPatch, patchFn, run }) {
    let patchedResult = undefined;
    const patched = obj[toPatch];

    obj[toPatch] = (...args) => patchedResult = patchFn(patched, ...args);
    run();
    obj[toPatch] = patched;

    return patchedResult;
}
