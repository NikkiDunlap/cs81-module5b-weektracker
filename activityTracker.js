const myWeek = 
[
  { day: "Monday",    activity: "Morning Run",       category: "physical",  hoursSpent: 0.8, enjoyment: 9, timeOfDay: "morning"  },
  { day: "Tuesday",   activity: "Reading Novel",     category: "creative",  hoursSpent: 1.2, enjoyment: 7, timeOfDay: "evening"  },
  { day: "Wednesday", activity: "Coffee with Friend",category: "social",    hoursSpent: 1.5, enjoyment: 8, timeOfDay: "afternoon"},
  { day: "Thursday",  activity: "Coding Practice",   category: "creative",  hoursSpent: 2,   enjoyment: 10,timeOfDay: "evening"  },
  { day: "Friday",    activity: "Yoga Session",      category: "physical",  hoursSpent: 1,   enjoyment: 8, timeOfDay: "morning"  },
  { day: "Saturday",  activity: "Beach Hangout",     category: "social",    hoursSpent: 3,   enjoyment: 9, timeOfDay: "afternoon"},
  { day: "Sunday",    activity: "Digital Art",       category: "creative",  hoursSpent: 2.5, enjoyment: 9, timeOfDay: "evening"  }
];

function totalPhysicalHours(log) 
{
  return log
    .filter(entry => entry.category === "physical")
    .reduce((sum, entry) => sum + entry.hoursSpent, 0);
}

function averageEnjoymentByTime(log, targetTime) 
{
  const sessions = log.filter(e => e.timeOfDay === targetTime);
  const total = sessions.reduce((sum, e) => sum + e.enjoyment, 0);
  return sessions.length ? (total / sessions.length).toFixed(2) : 0;
}

function mostCommonCategory(log) 
{
  const freq = log.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0];
}

function shortHighJoy(log) 
{
  return log.filter(e => e.hoursSpent < 1 && e.enjoyment > 8);
}

function filterByCondition(testFn) 
{
  return myWeek.filter(testFn);
}

console.log("Total physical hours:", totalPhysicalHours(myWeek));
console.log("Avg evening enjoyment:", averageEnjoymentByTime(myWeek, "evening"));
console.log("Most common category:", mostCommonCategory(myWeek));
console.log("Low-hour / high-joy sessions:", shortHighJoy(myWeek));
console.log(
  "Custom filter – sessions <1 hr & joy >8:",
  filterByCondition(e => e.hoursSpent < 1 && e.enjoyment > 8)
);
