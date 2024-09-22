// Task 1. Create an Employees Array of Employee Objects

let employees = [

    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
 ]; // You need to click the array to see the data

 console.log(employees);

 // Task 2. Create a Function to Display Employee Shift Details

 function displayEmployeeShifts(employee) {
for (let i = 0; i < employees.length; i++) {
    const element = employees[i];
    console.log(employee);
};
 };
 displayEmployeeShifts(employees[0]);