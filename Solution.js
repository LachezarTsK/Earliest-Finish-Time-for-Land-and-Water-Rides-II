
/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (landStartTime, landDuration, waterStartTime, waterDuration) {
    const minEndTimeForLandEvent = findMinEndTimeForSingleEvent(landStartTime, landDuration);
    const minEndTimeForWaterEvent = findMinEndTimeForSingleEvent(waterStartTime, waterDuration);

    return Math.min(
            findMinEndTimeForTwoDifferentConsecutiveEvents(minEndTimeForLandEvent, waterStartTime, waterDuration),
            findMinEndTimeForTwoDifferentConsecutiveEvents(minEndTimeForWaterEvent, landStartTime, landDuration));

};

/**
 * @param {number[]} startTime
 * @param {number[]} duration
 * @return {number}
 */
function findMinEndTimeForSingleEvent(startTime, duration) {
    let minEndTime = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < startTime.length; ++i) {
        minEndTime = Math.min(minEndTime, startTime[i] + duration[i]);
    }
    return minEndTime;
}

/**
 * @param {number} endTimeFirst
 * @param {number[]} startTimeSecond
 * @param {number[]} durationSecond
 * @return {number}
 */
function  findMinEndTimeForTwoDifferentConsecutiveEvents(endTimeFirst, startTimeSecond, durationSecond) {
    let minEndTime = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < startTimeSecond.length; ++i) {
        minEndTime = Math.min(minEndTime, Math.max(endTimeFirst, startTimeSecond[i]) + durationSecond[i]);
    }
    return minEndTime;
}
