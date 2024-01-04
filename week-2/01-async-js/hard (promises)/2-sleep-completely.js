/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    // This makes it an asynchronous function, thus does not fulfill the criterion to halt the thread
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve();
    //     }, milliseconds);
    // });
    const start = Date.now();
    while (Date.now() - start < milliseconds) {
        // Busy-waiting approach, consuming CPU resources
    }
    return Promise.resolve();

}
// Busy waiting is a synchronization technique 
// where a program or thread repeatedly checks a condition in a loop
// until that condition becomes true.
// It's a form of active waiting, where the program doesn't yield control to other tasks
// or the operating system during the waiting period.
// Instead, it continuously checks the condition in a tight loop, consuming CPU resources.

module.exports = sleep;
