
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds two number',
    // builder: {
    //     firstNumber: {
    //         describe: 'First Number',
    //         demandOption: true,  // Required
    //         type: 'number'
    //     },
    //     secondNumber: {
    //         describe: 'Second Number',
    //         demandOption: true,
    //         type: 'number'
    //     }
    // },

    // Function for your command
    handler(argv) {
        console.log('ff')
        // console.log("Result:",
        //     (argv.firstNumber + argv.secondNumber))
    }
})
// console.log(yargs.argv);
yargs.parse() // To set above changes