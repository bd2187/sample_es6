const name = 'brandon';

const helloWorld = () => {
    console.log(`Hello ${name}`);
}

var arr1 = [1, 2, 3];
var arr2 = [3, 4, 5];

var combinedArrs = [...arr1, ...arr2];

helloWorld();

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function something() {
    console.log("this might take some time....");
    await delay(3000);
    console.log("done!")
}

something();