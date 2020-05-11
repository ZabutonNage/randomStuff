/*
  Click counter app
  -----------------

  Create a simple web page with the following components:
  - an indicator of how many times a button has been clicked
  - the button whose clicks shall be counted

  Place both of them in the middle of the page. The button shall be below the number.

  Inside the app:
  The counter's state shall have two public members:
  - count
  - inc()

  See the provided test cases for behaviour.
  Note that calling .inc() may be the ONLY possibility to manipulate .count!

 */



const state = ;  // TODO




runTests();

function runTests() {
    console.log(`state has "count" property:`,
        state.hasOwnProperty(`count`));

    console.log(`"count" property is numeric:`,
        typeof state.count === `number`);

    console.log(`state has "inc" property:`,
        state.hasOwnProperty(`inc`));

    console.log(`"inc" property is function:`,
        typeof state.inc === `function`);

    console.log(`calling "inc" increments "count" by 1:`, function () {
        const countBefore = state.count;
        state.inc();
        const expected = countBefore + 1;
        const actual = state.count;

        return expected === actual;
    }());

    console.log(`"count" may only be manipulated by "inc()":`, function () {
        // additional constraint
        return false;
    }());
}
