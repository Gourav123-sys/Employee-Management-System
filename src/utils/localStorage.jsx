localStorage.clear()

const employees = [
    {
      id: 1,
      firstName: "Amit",
      email: "employee1@example.com",
      password: "123",
      taskNumbers: {
        active: 2,
        new_task: 2,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          title: "Prepare Monthly Report",
          description: "Compile the monthly financial report for review.",
          date: "2025-02-10",
          category: "Finance",
          active: true,
          new_task: true,
          completed: false,
          failed: false,
        },
        {
          title: "Team Meeting",
          description: "Attend the weekly team meeting and provide updates.",
          date: "2025-02-08",
          category: "Meetings",
          active: false,
          new_task: false,
          completed: true,
          failed: false,
        },
        {
          title: "Client Presentation",
          description: "Prepare slides and present to the new client.",
          date: "2025-02-12",
          category: "Client Work",
          active: true,
          new_task: true,
          completed: false,
          failed: false,
        }
      ]
    },
    {
      id: 2,
      firstName: "Rajesh",
      email: "employee2@example.com",
      password: "123",
      taskNumbers: {
        active: 2,
        new_task: 1,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          title: "Bug Fixing",
          description: "Resolve critical issues reported in the last sprint.",
          date: "2025-02-07",
          category: "Development",
          active: true,
          new_task: false,
          completed: false,
          failed: false,
        },
        {
          title: "Code Review",
          description: "Review pull requests from the team.",
          date: "2025-02-08",
          category: "Development",
          active: false,
          new_task: false,
          completed: true,
          failed: false,
        },
        {
          title: "Documentation Update",
          description: "Update the API documentation for the new release.",
          date: "2025-02-09",
          category: "Documentation",
          active: true,
          new_task: true,
          completed: false,
          failed: false,
        }
      ]
    },
    {
      id: 3,
      firstName: "Suresh",
      email: "employee3@example.com",
      password: "123",
      taskNumbers: {
        active: 2,
        new_task: 1,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          title: "Marketing Strategy",
          description: "Develop a strategy for the upcoming campaign.",
          date: "2025-02-10",
          category: "Marketing",
          active: true,
          new_task: true,
          completed: false,
          failed: false,
        },
        {
          title: "Social Media Updates",
          description: "Schedule and post weekly updates.",
          date: "2025-02-07",
          category: "Marketing",
          active: false,
          new_task: false,
          completed: true,
          failed: false,
        },
        {
          title: "Competitor Analysis",
          description: "Analyze competitor strategies and compile insights.",
          date: "2025-02-12",
          category: "Research",
          active: true,
          new_task: false,
          completed: false,
          failed: false,
        }
      ]
    },
    {
      id: 4,
      firstName: "Manish",
      email: "employee4@example.com",
      password: "123",
      taskNumbers: {
        active: 1,
        new_task: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          title: "Server Maintenance",
          description: "Perform scheduled maintenance on production servers.",
          date: "2025-02-09",
          category: "IT Support",
          active: true,
          new_task: true,
          completed: false,
          failed: false,
        },
        {
          title: "Security Audit",
          description: "Conduct a security audit of internal systems.",
          date: "2025-02-10",
          category: "Security",
          active: false,
          new_task: false,
          completed: false,
          failed: true,
        },
        {
          title: "Help Desk Support",
          description: "Assist employees with IT issues.",
          date: "2025-02-07",
          category: "IT Support",
          active: false,
          new_task: false,
          completed: true,
          failed: false,
        }
      ]
    },
    {
      id: 5,
      firstName: "Priya",
      email: "employee5@example.com",
      password: "123",
      taskNumbers: {
        active: 2,
        new_task: 1,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          title: "HR Training Session",
          description: "Conduct an onboarding session for new employees.",
          date: "2025-02-11",
          category: "HR",
          active: true,
          new_task: true,
          completed: false,
          failed: false,
        },
        {
          title: "Employee Feedback",
          description: "Gather feedback from employees regarding workplace policies.",
          date: "2025-02-07",
          category: "HR",
          active: false,
          new_task: false,
          completed: true,
          failed: false,
        },
        {
          title: "Policy Review",
          description: "Review and update company policies.",
          date: "2025-02-10",
          category: "HR",
          active: true,
          new_task: false,
          completed: false,
          failed: false,
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 100,
      firstName: "Vikram",
      email: "admin@example.com",
      password: "123"
    }
  ];
  

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin};
    
    
}
