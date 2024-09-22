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
 displayEmployeeShifts(employees[1]);

 // Task 3. Create a Function to Assign a New Shift

 function assignShift(employeeName, day, hours) {
    let employee = employees.find((employee) => employee.name === employeeName);
    if (!employee) {
        console.log(`Employee unavaiable: ${employeeName}`);
        
      };
      if (employee.shifts.some((shift) => shift.day === day)) {
        console.log(`Employee unavaiable on ${day}`);
        
      }
     else employee.shifts.push({ day, hours });
      console.log(`Shift assigned to ${employeeName} on ${day} for ${hours} hours`);
    };
assignShift("John", "Tuesday", 5);

// Task 4. Create a Function to Calculate Total Hours Worked

function calculateTotalHours(employeeName, employees) {
    let totalHours = 0; 
    for (let i = 0; i < employees.length; i++) {
      const element = employees[i];
      if (element.employee === employeeName) {
        const employee = employees[i]; {
          for (let j = 0; j < employee.shifts.length; j++) {
            totalHours += employee.shifts[j].hours;}
    }return totalHours
        }  
    }   
        }
let shift = [

    { employee: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { employee: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { employee: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { employee: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }]

console.log(calculateTotalHours('John',shift));