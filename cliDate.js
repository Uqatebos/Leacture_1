const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const argvArray = Object.keys(argv);
const currentDate = new Date();
// console.log(argv)
// console.log(argv)
// console.log(argv)
// console.log(argv)

const getCurrentDate = () => {
  if (argv["_"].length === 1 && argvArray.length === 2) {
    console.log(currentDate.toISOString());
  }
};

const getcurrentYear = () => {
  if (argvArray.includes("year") || argvArray.includes("y")) {
    console.log(currentDate.getFullYear());
  }
};

const getcurrentMonth = () => {
  if ((argvArray.includes("month") || argvArray.includes("m")) && argv["_"].length === 1) {
    console.log(currentDate.getMonth() + 1);
  }
};

const getcurrentDay = () => {
  if ((argvArray.includes("date") || argvArray.includes("d")) && argv["_"].length === 1)  {
    console.log(currentDate.getDate());
  }
};

const predicateTwoArgs = () => {
  return argvArray.length === 3 && argv["_"].length <= 2 ? true : false;
};

const predicateOneCurrent = () => {
    return argv["_"].length === 1 ? true : false;
  };

const getNextDate = () => {
  if (argv["_"][1] === "add" && argvArray.includes("d")) {
    const millisecondsDay = Date.now() + 86400000 * argv["d"];
    const isoString = new Date(millisecondsDay).toISOString();
    console.log(isoString);
  }
};

const getPrevDate = () => {
  if (argv["_"][1] === "sub" && argvArray.includes("month")) {
    const millisecondsDay = Date.now() - 86400000 * 30 * argv["month"];
    const isoString = new Date(millisecondsDay).toISOString();
    console.log(isoString);
  }
};

const mainGetDate = () => {
  if (argv && argv["_"][0] === "current") {
    getCurrentDate();
    if (predicateTwoArgs()) {
        if (predicateOneCurrent()) {
            getcurrentYear();
            getcurrentMonth();
            getcurrentDay();
        }
      getNextDate();
      getPrevDate();
    }
  }
};

mainGetDate();
