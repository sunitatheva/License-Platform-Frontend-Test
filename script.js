// Bar Chart
new Chart(document.getElementById("barChart"), {
    type: 'bar',
    data: {
        labels: ["MoJ", "LAA", "HMCTS", "HMPPS", "CICA", "DCA"],
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
    {name: "MoJ", cost: "£4.60M"},
    {name: "LAA", cost: "£3.60M"},
    {name: "HMCTS", cost: "£3.00M"}
];

const list = document.getElementById("deptList");

departments.forEach(d => {
    const li = document.createElement("li");
    li.textContent = `${d.name} - ${d.cost}`;
    list.appendChild(li);
});
