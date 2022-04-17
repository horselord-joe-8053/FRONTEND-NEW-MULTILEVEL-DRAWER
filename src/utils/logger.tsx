const minLogLevel = 'INFO'; // jjw: this value we can adjust

const defaultLogLevel = 'INFO'; // jjw: we can adjust 'logLevel' to hide all default printout

const levelMap: any = {
  DEBUG: 1,
  INFO: 2,
  WARNING: 3,
  ERROR: 4,
};

// jjw: https://stackoverflow.com/a/53731154
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key: string, value: any) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

function logToConsole(logStr: string, level?: string) {
  let userLevel = level ? level : defaultLogLevel;

  let userLevelVal = levelMap[userLevel.toUpperCase()];
  let minLevelVal = levelMap[minLogLevel.toUpperCase()];

  if (userLevelVal >= minLevelVal) {
    // console.log("-----TRACE----\n" + console.trace());
    // jjw: TODO: possible way to find the caller function automatically:
    // jjw:   https://stackoverflow.com/questions/57685388/is-there-a-production-safe-version-of-function-caller-in-javascript
    console.log(logStr);
  }
}

// exports.logAsStr = (inFunction, objName, info, level) => {
//   logToConsole("in " + inFunction + "(), '" + objName + "': " + info, level)
// }

// exports.logAsJsonStr = (inFunction, objName, object, level) => {
//   logToConsole("in " + inFunction + "(), '" + objName + "':\n" + JSON.stringify(object, null, '\t'), level);
// }

export function logAsStr(inFunction: string, objName: string, info: string, level?: string) {
  // jjw: TODO: possible way to find the caller function automatically:
  // jjw:   https://stackoverflow.com/questions/57685388/is-there-a-production-safe-version-of-function-caller-in-javascript
  logToConsole('in ' + inFunction + "(), '" + objName + "': " + info, level);
}
export function logAsJsonStr(inFunction: string, objName: string, object: any, level?: string) {
  logToConsole(
    'in ' +
      inFunction +
      "(), '" +
      objName +
      "':\n" +
      JSON.stringify(object, getCircularReplacer(), '\t'),
    level
  );
}
