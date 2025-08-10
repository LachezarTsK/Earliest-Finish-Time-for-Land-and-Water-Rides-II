
using System;

public class Solution
{
    public int EarliestFinishTime(int[] landStartTime, int[] landDuration, int[] waterStartTime, int[] waterDuration)
    {
        int minEndTimeForLandEvent = FindMinEndTimeForSingleEvent(landStartTime, landDuration);
        int minEndTimeForWaterEvent = FindMinEndTimeForSingleEvent(waterStartTime, waterDuration);

        return Math.Min(
                FindMinEndTimeForTwoDifferentConsecutiveEvents(minEndTimeForLandEvent, waterStartTime, waterDuration),
                FindMinEndTimeForTwoDifferentConsecutiveEvents(minEndTimeForWaterEvent, landStartTime, landDuration));
    }

    private int FindMinEndTimeForSingleEvent(int[] startTime, int[] duration)
    {
        int minEndTime = int.MaxValue;
        for (int i = 0; i < startTime.Length; ++i)
        {
            minEndTime = Math.Min(minEndTime, startTime[i] + duration[i]);
        }
        return minEndTime;
    }

    private int FindMinEndTimeForTwoDifferentConsecutiveEvents(int endTimeFirst, int[] startTimeSecond, int[] durationSecond)
    {
        int minEndTime = int.MaxValue;
        for (int i = 0; i < startTimeSecond.Length; ++i)
        {
            minEndTime = Math.Min(minEndTime, Math.Max(endTimeFirst, startTimeSecond[i]) + durationSecond[i]);
        }
        return minEndTime;
    }
}
