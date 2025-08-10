
package main
import "math"

func earliestFinishTime(landStartTime []int, landDuration []int, waterStartTime []int, waterDuration []int) int {
    var minEndTimeForLandEvent int = findMinEndTimeForSingleEvent(landStartTime, landDuration)
    var minEndTimeForWaterEvent int = findMinEndTimeForSingleEvent(waterStartTime, waterDuration)

    return min(
        findMinEndTimeForTwoDifferentConsecutiveEvents(minEndTimeForLandEvent, waterStartTime, waterDuration),
        findMinEndTimeForTwoDifferentConsecutiveEvents(minEndTimeForWaterEvent, landStartTime, landDuration))
}

func findMinEndTimeForSingleEvent(startTime []int, duration []int) int {
    minEndTime := math.MaxInt
    for i := range startTime {
        minEndTime = min(minEndTime, startTime[i] + duration[i])
    }
    return minEndTime
}

func findMinEndTimeForTwoDifferentConsecutiveEvents(endTimeFirst int, startTimeSecond []int, durationSecond []int) int {
    minEndTime := math.MaxInt
    for i := range startTimeSecond {
        minEndTime = min(minEndTime, max(endTimeFirst, startTimeSecond[i]) + durationSecond[i])
    }
    return minEndTime
}
