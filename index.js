// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title:  title,
    description:  description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed.`);
    },

    markComplete: function() {
      this.complete = true;
    }
  };
  return task;
};

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// const completeTask = function(taskIndex) {
//   taskComplete[taskIndex] = true;
// };
// const completeTask = function(task) {
//   task.complete = true;
// }

// // Print the state of a task to the console in a nice readable way
// const logTaskState = function(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// };

// const logTaskState = function(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed.`);
// };

// DRIVER CODE BELOW
const task0 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task1 = newTask("Do Laundry", "😨");
const tasks = [task0, task1];

// logTaskState(task0); // Clean Cat Litter has not been completed
// completeTask(task0);
// logTaskState(task0); // Clean Cat Litter has been completed

task0.logState();
task0.markComplete();
task0.logState();

console.log(tasks);
