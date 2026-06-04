// Bar Chart
new Chart(document.getElementById("barChart"), {
    type: 'bar',
    data: {
        labels: ["A", "B", "C", "D", "E", "F"],
        datasets: [{
            label: "Cost (£M)",
            data: [0.1, 3, 3.6, 0.07, 1.2, 4.6],
            backgroundColor: "#1976d2"
        }]
    }
});

// Pie Chart
new Chart(document.getElementById("pieChart"), {
    type: 'doughnut',
    data: {
        labels: ["Database", "Middleware", "Apps", "Infra"],
        datasets: [{
            data: [51, 24, 15, 9],
            backgroundColor: ["#0d47a1", "#388e3c", "#f57c00", "#7b1fa2"]
        }]
    }
});

// Department List
const departments = [
    {name: "F", cost: "£4.60M"},
    {name: "C", cost: "£3.60M"},
    {name: "B", cost: "£3.00M"}
];

const list = document.getElementById("deptList");

departments.forEach(d => {
    const li = document.createElement("li");
    li.textContent = `${d.name} - ${d.cost}`;
    list.appendChild(li);
});