
#include <span>
#include <limits>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {

public:
    int earliestFinishTime(vector<int>& landStartTime, vector<int>& landDuration, vector<int>& waterStartTime, vector<int>& waterDuration) const {
        int minEndTimeForLandEvent = findMinEndTimeForSingleEvent(landStartTime, landDuration);
        int minEndTimeForWaterEvent = findMinEndTimeForSingleEvent(waterStartTime, waterDuration);

        return min(
            findMinEndTimeForTwoDifferentConsecutiveEvents(minEndTimeForLandEvent, waterStartTime, waterDuration),
            findMinEndTimeForTwoDifferentConsecutiveEvents(minEndTimeForWaterEvent, landStartTime, landDuration));
    }

private:
    int findMinEndTimeForSingleEvent(span<int  const> startTime, span<const int> duration) const {
        int minEndTime = numeric_limits<int>::max();
        for (int i = 0; i < startTime.size(); ++i) {
            minEndTime = min(minEndTime, startTime[i] + duration[i]);
        }
        return minEndTime;
    }

    int findMinEndTimeForTwoDifferentConsecutiveEvents(int endTimeFirst, span<const int> startTimeSecond, span<const int> durationSecond) const {
        int minEndTime = numeric_limits<int>::max();
        for (int i = 0; i < startTimeSecond.size(); ++i) {
            minEndTime = min(minEndTime, max(endTimeFirst, startTimeSecond[i]) + durationSecond[i]);
        }
        return minEndTime;
    }
};
