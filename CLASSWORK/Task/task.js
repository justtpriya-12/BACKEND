/*
========================================
🧠 15-Minute Core JavaScript Practice
========================================

TASK: Mini "Student Score Analyzer"

Rules:
- Use plain JavaScript only
- No libraries
- Use console.log for testing
- Focus on fundamentals, not shortcuts

----------------------------------------
INPUT DATA
----------------------------------------

const scores = ["85", 92, "67", 40, 100, "30", 76, "90"];

(Note: scores are intentionally mixed types)

----------------------------------------
YOUR TASKS (FOLLOW IN ORDER)
----------------------------------------

1️⃣ Create a function named:
   analyzeScores(scoresArray)

----------------------------------------

2️⃣ Inside the function:

- Loop through the scoresArray
- Convert each value to a number
- Ignore values that become NaN after conversion

(Hint: use Number() and isNaN())

----------------------------------------

3️⃣ Categorize each valid score:

Use if / else conditions:

- score >= 90  → "Excellent"
- score >= 60  → "Pass"
- score < 60   → "Fail"

⚠️ You MUST use:
- if / else
- ternary operator (at least once)

----------------------------------------

4️⃣ Maintain counters:

- excellentCount
- passCount
- failCount

----------------------------------------

5️⃣ Calculate:

- Total number of valid students
- Average score
- Round average to 2 decimal places

----------------------------------------

6️⃣ Return an object from the function:

{
  totalStudents: number,
  excellent: number,
  pass: number,
  fail: number,
  averageScore: number
}

----------------------------------------
EXPECTED USAGE
----------------------------------------

const result = analyzeScores(scores);
console.log(result);
----------------------------------------

*/

const scores = ["85", 92, "67", 40, 100, "30", 76, "90"];
const excellentCount = 0;
const passCount = 0;
const failCount = 0;
const totalStudents = 0;
const sumScores = 0;
function analyzeScores(scoresArray) {
    

    for (let i = 0; i < scoresArray.length; i++) {
        const score = Number(scoresArray[i]);

        if (score != NaN) {
            totalStudents++;
            sumScores += score;

            
            if (score >= 90) {
                excellentCount++;
            } else if (score >= 60) {
                passCount++;
            } else {
                failCount++;
            }

            
            
        }
    }

    score = sumScores/totalStudents;

    return {
        totalStudent: totalStudents,
        excellent: excellentCount,
        pass: passCount,
        fail: failCount,
        averageScore: score,
    };
}

const result = analyzeScores(scores);
console.log(result);