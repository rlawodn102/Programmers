public class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        if (b >= a) for (int i=a;i<=b;i++) answer += i;
        else for (int i=b;i<=a;i++) answer += i;
        return answer;
    }

    public static void main(String[] args) {
        Solution s = new Solution();

        System.out.println(s.solution(3, 5));
    }
}