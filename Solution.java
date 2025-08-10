
public class Solution {

    public int earliestFinishTime(int[] landStartTime, int[] landDuration, int[] waterStartTime, int[] waterDuration) {
        int minEndTimeForLandEvent = findMinEndTimeForSingleEvent(landStartTime, landDuration);
        int minEndTimeForWaterEvent = findMinEndTimeForSingleEvent(waterStartTime, waterDuration);

        return Math.min(
                findMinEndTimeForTwoDifferentConsecutiveEvents(minEndTimeForLandEvent, waterStartTime, waterDuration),
                findMinEndTimeForTwoDifferentConsecutiveEvents(minEndTimeForWaterEvent, landStartTime, landDuration));
    }

    private int findMinEndTimeForSingleEvent(int[] startTime, int[] duration) {
        int minEndTime = Integer.MAX_VALUE;
        for (int i = 0; i < startTime.length; ++i) {
            minEndTime = Math.min(minEndTime, startTime[i] + duration[i]);
        }
        return minEndTime;
    }

    private int findMinEndTimeForTwoDifferentConsecutiveEvents(int endTimeFirst, int[] startTimeSecond, int[] durationSecond) {
        int minEndTime = Integer.MAX_VALUE;
        for (int i = 0; i < startTimeSecond.length; ++i) {
            minEndTime = Math.min(minEndTime, Math.max(endTimeFirst, startTimeSecond[i]) + durationSecond[i]);
        }
        return minEndTime;
    }
}
