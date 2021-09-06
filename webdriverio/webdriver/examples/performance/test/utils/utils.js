const {existsSync, mkdirSync, readFileSync, writeFileSync} = require('fs');
const {join} = require('path');

/**
 * Write the sessionId data to a file
 *
 * @param {string} fileName
 *
 * @param {string[]} data
 */
const writeToSessionIdsFile = (fileName, data) => {
  writeFileSync(fileName, JSON.stringify(data, null, 2));
};

/**
 * Get the sessionIds
 *
 * @param {string} fileName
 *
 * @returns {string[]}
 */
const getSessionIdsFromFile = (fileName,) => {
  return JSON.parse(readFileSync(fileName, {encoding: 'utf8'}));
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
    const performanceReportFolder = '.tmp/performanceReport';
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
      join(process.cwd(), performanceReportFolder, `performance-data-${sessionId}.json`),
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
