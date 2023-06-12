const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const getCurrentDate = (currentDate, argvArray) => {
  if (argv["_"].length === 1 && argvArray.length === 2) {
    console.log(currentDate.toISOString());
  }
};

const getcurrentYear = (currentDate, argvArray) => {
  if (argvArray.includes("year") || argvArray.includes("y")) {
    console.log(currentDate.getFullYear());
  }
};

const getcurrentMonth = (currentDate, argvArray) => {
  if (argvArray.includes("month") || argvArray.includes("m")) {
    console.log(currentDate.getMonth() + 1);
  }
};

const getcurrentDay = (currentDate, argvArray) => {
  if (argvArray.includes("date") || argvArray.includes("d")) {
    console.log(currentDate.getDate());
  }
};

const predicateTwoArgs = (argvArray) => {
  return argvArray.length === 3 && argv["_"].length <= 2 ? true : false;
};

const getNextDate = (argvArray) => {
  if (argv["_"][1] === "add" && argvArray.includes("d")) {
    const millisecondsDay = Date.now() + 86400000 * argv["d"];
    const isoString = new Date(millisecondsDay).toISOString();
    console.log(isoString);
  }
};

const getPrevDate = (argvArray) => {
  if (argv["_"][1] === "sub" && argvArray.includes("month")) {
    const millisecondsDay = Date.now() - 86400000 * 30 * argv["month"];
    const isoString = new Date(millisecondsDay).toISOString();
    console.log(isoString);
  }
};

const mainGetDate = () => {
  const currentDate = new Date();
  const argvArray = Object.keys(argv);
  if (argv && argv["_"][0] === "current") {
    getCurrentDate(currentDate, argvArray);
    if (predicateTwoArgs(argvArray)) {
      getcurrentYear(currentDate, argvArray);
      getcurrentMonth(currentDate, argvArray);
      getcurrentDay(currentDate, argvArray);
      getNextDate(argvArray);
      getPrevDate(argvArray);
    }
  }
};

mainGetDate();
