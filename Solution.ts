
function earliestFinishTime(landStartTime: number[], landDuration: number[], waterStartTime: number[], waterDuration: number[]): number {
    const minEndTimeForLandEvent: number = findMinEndTimeForSingleEvent(landStartTime, landDuration);
    const minEndTimeForWaterEvent: number = findMinEndTimeForSingleEvent(waterStartTime, waterDuration);

    return Math.min(
        findMinEndTimeForTwoDifferentConsecutiveEvents(minEndTimeForLandEvent, waterStartTime, waterDuration),
        findMinEndTimeForTwoDifferentConsecutiveEvents(minEndTimeForWaterEvent, landStartTime, landDuration));

};

function findMinEndTimeForSingleEvent(startTime: number[], duration: number[]): number {
    let minEndTime = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < startTime.length; ++i) {
        minEndTime = Math.min(minEndTime, startTime[i] + duration[i]);
    }
    return minEndTime;
}

function findMinEndTimeForTwoDifferentConsecutiveEvents(endTimeFirst: number, startTimeSecond: number[], durationSecond: number[]): number {
    let minEndTime = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < startTimeSecond.length; ++i) {
        minEndTime = Math.min(minEndTime, Math.max(endTimeFirst, startTimeSecond[i]) + durationSecond[i]);
    }
    return minEndTime;
}
