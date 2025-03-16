const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    firstname: "Amit",
    "taskcount":{
      "active":2,
      "newTask":1,
      "completed":1,
      "failed":0

    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Complete onboarding",
        description: "Finish the employee onboarding module.",
        date: "2024-11-07",
        category: "Onboarding",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit report",
        description: "Submit the monthly report to the manager.",
        date: "2024-10-15",
        category: "Reporting",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Team meeting",
        description: "Attend the weekly team meeting.",
        date: "2024-11-10",
        category: "Meeting",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstname: "Rajesh",
    "taskcount":{
      "active":2,
      "newTask":3,
      "completed":2,
      "failed":1

    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        title: "Client follow-up",
        description: "Follow up with client about project feedback.",
        date: "2024-11-05",
        category: "Client Relations",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Prepare presentation",
        description: "Prepare slides for the quarterly review.",
        date: "2024-11-20",
        category: "Preparation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit timesheet",
        description: "Submit the timesheet for payroll processing.",
        date: "2024-10-31",
        category: "Administration",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstname: "Saanvi",
    "taskcount":{
      "active":1,
      "newTask":4,
      "completed":3,
      "failed":0

    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Code review",
        description: "Review the code changes in the latest commit.",
        date: "2024-11-08",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write documentation",
        description: "Update the project documentation.",
        date: "2024-10-28",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Server maintenance",
        description: "Ensure servers are updated and secure.",
        date: "2024-11-01",
        category: "IT",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design review",
        description: "Review the new design mockups.",
        date: "2024-11-12",
        category: "Design",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    firstname: "Priya",
    "taskcount":{
      "active":1,
      "newTask":3,
      "completed":0,
      "failed":0

    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Inventory check",
        description: "Perform a check on inventory levels.",
        date: "2024-11-09",
        category: "Logistics",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Product demo",
        description: "Demo the new product for the client.",
        date: "2024-11-11",
        category: "Sales",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Budget review",
        description: "Review the budget for Q4.",
        date: "2024-10-25",
        category: "Finance",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstname: "Anjali",
    "taskcount":{
      "active":3,
      "newTask":1,
      "completed":2,
      "failed":0

    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Customer support",
        description: "Respond to customer queries.",
        date: "2024-11-07",
        category: "Support",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Research report",
        description: "Compile research for project X.",
        date: "2024-11-13",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team building activity",
        description: "Organize team building activity.",
        date: "2024-10-22",
        category: "HR",
      },
    ],
  },
];
const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
  },
];

export const setLocalStrorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
