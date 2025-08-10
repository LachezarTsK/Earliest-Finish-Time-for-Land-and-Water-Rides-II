
import kotlin.math.min
import kotlin.math.max

class Solution {

    fun earliestFinishTime(landStartTime: IntArray, landDuration: IntArray, waterStartTime: IntArray, waterDuration: IntArray): Int {
        val minEndTimeForLandEvent = findMinEndTimeForSingleEvent(landStartTime, landDuration)
        val minEndTimeForWaterEvent = findMinEndTimeForSingleEvent(waterStartTime, waterDuration)

        return min(
            findMinEndTimeForTwoDifferentConsecutiveEvents(minEndTimeForLandEvent, waterStartTime, waterDuration),
            findMinEndTimeForTwoDifferentConsecutiveEvents(minEndTimeForWaterEvent, landStartTime, landDuration)
        )
    }

    private fun findMinEndTimeForSingleEvent(startTime: IntArray, duration: IntArray): Int {
        var minEndTime = Int.MAX_VALUE
        for (i in startTime.indices) {
            minEndTime = min(minEndTime, startTime[i] + duration[i])
        }
        return minEndTime
    }

    private fun findMinEndTimeForTwoDifferentConsecutiveEvents(endTimeFirst: Int, startTimeSecond: IntArray, durationSecond: IntArray): Int {
        var minEndTime = Int.MAX_VALUE
        for (i in startTimeSecond.indices) {
            minEndTime = min(minEndTime, max(endTimeFirst, startTimeSecond[i]) + durationSecond[i])
        }
        return minEndTime
    }
}
