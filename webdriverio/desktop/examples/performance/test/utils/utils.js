const {existsSync, mkdirSync, readFileSync, writeFileSync} = require('fs');
const {join} = require('path');
const tmpFolder = join(__dirname, '../../', '.tmp');
const sessionIdsFile = join(tmpFolder, 'sessionIds.json');
const performanceReportFolder = join(tmpFolder, 'performanceReport');

/**
 * Write the sessionId to a file
 *
 * @param {string} sessionId
 */
const writeToSessionIdsFile = (sessionId = '') => {
  let newSessionIdsData = [];
  // Verify if the folder is already created
  if (!existsSync(tmpFolder)) {
    mkdirSync(
      tmpFolder,
      {
        recursive: true,
      }
    );
  }
  // When the file exists collect the existing data and the new sessionId to the array
  if (existsSync(sessionIdsFile)) {
    newSessionIdsData = getSessionIdsFromFile();
    newSessionIdsData.push(sessionId);
  }

  writeFileSync(sessionIdsFile, JSON.stringify(newSessionIdsData, null, 2));
};

/**
 * Get the sessionIds
 *
 * @returns {string[]}
 */
const getSessionIdsFromFile = () => {
  return JSON.parse(readFileSync(sessionIdsFile, {encoding: 'utf8'}));
};

/**
 *
 * @param {object} api
 * @param {function} api.getPerformanceMetricsByJobId
 * @param {string} sessionId
 * @param {number} retriesLeft
 *
 * @returns {Promise<({items?: Array<PerformanceMetricsListViewItems>} & {[p: string]: any})|*|*|undefined>}
 */
const getPerformanceMetrics = async (api, sessionId, retriesLeft = 30,) => {
  try {
    return await api.getPerformanceMetricsByJobId(sessionId);
  } catch (error) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (retriesLeft === 0) {
      throw new Error(`Couldn't get performance metrics for sessionId='${sessionId}'`);
    }

    return await getPerformanceMetrics(api, sessionId, --retriesLeft);
  }
};

/**
 * Write the performance data to a file
 *
 * @param {{items?: Array<PerformanceMetricsListViewItems>}}  performanceData
 * @param {string}  sessionId
 */
const writePerformanceMetricsToFile = (performanceData, sessionId) => {
  try {
    // Create the folder if it doesn't exists
    if (!existsSync(performanceReportFolder)) {
      mkdirSync(
        performanceReportFolder,
        {
          recursive: true,
        }
      );
    }
    // Write the data to the file
    writeFileSync(
      join(performanceReportFolder, `performance-data-${sessionId}.json`),
      JSON.stringify(performanceData, null, 2),
    );
  } catch (error) {
    throw new Error(
      `Failed writing data to a json file for sessionId:'${error}' with the following error:` + error
    );
  }
};

module.exports = {
  writeToSessionIdsFile,
  getSessionIdsFromFile,
  getPerformanceMetrics,
  writePerformanceMetricsToFile,
}
