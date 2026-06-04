// ✅ Dummy KPI Data
const kpiData = {
    totalCost: 10.47,
    technologies: 28,
    processorLicenses: 7987,
    namedUsers: 4024,
    risk: "Medium",
    savings: 1.35
};

// ✅ Dummy Department Data (MoJ ecosystem)
const departmentData = [
    { name: "MoJ", cost: 0.095 },
    { name: "LAA", cost: 3.0 },
    { name: "HMCTS", cost: 3.6 },
    { name: "HMPPS", cost: 0.078 },
    { name: "CICA", cost: 1.2 },
    { name: "DCA", cost: 4.6 }
];

// ✅ Dummy Gap Data
const gapData = [
    { category: "Processor", required: 7987, entitled: 6800, gap: -1187 },
    { category: "Named User", required: 4024, entitled: 4500, gap: 476 }
];

// ✅ INIT
function loadDashboard() {
    renderKPIs(kpiData);
    renderBarChart(departmentData);
    renderPieChart();
    renderTable(gapData);
}

// ✅ KPI RENDER
function renderKPIs(data) {
    const container = document.getElementById("kpiContainer");

    const items = [
        ["Total Cost", "£" + data.totalCost + "M"],
        ["Technologies", data.technologies],
        ["Processors", data.processorLicenses],
        ["Named Users", data.namedUsers],
        ["Risk", data.risk],
        ["Savings", "£" + data.savings + "M"]
    ];

    container.innerHTML = items.map(i => `
        <div class="kpi">
            <div>${i[0]}</div>
            <h2>${i[1]}</h2>
        </div>
    `).join("");
}

// ✅ BAR CHART (MoJ labels)
function renderBarChart(data) {
    new Chart(document.getElementById("barChart"), {
        type: 'bar',
        data: {
            labels: data.map(d => d.name),
            datasets: [{
                label: "Cost (£M)",
                data: data.map(d => d.cost),
                backgroundColor: "#1e6fff",
                borderRadius: 6
            }]
        },
        options: {
            plugins: { legend: { display: false }},
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: v => "£" + v + "M" }
                }
            }
        }
    });
}

// ✅ PIE CHART
function renderPieChart() {
    new Chart(document.getElementById("pieChart"), {
        type: 'doughnut',
        data: {
            labels: ["Database", "Middleware", "Applications", "Infrastructure"],
            datasets: [{
                data: [51, 24, 15, 10],
                backgroundColor: [
                    "#1b4db1",
                    "#28a745",
                    "#ff8c00",
                    "#7b3fbf"
                ]
            }]
        },
        options: {
            plugins: {
                legend: { position: 'right' }
            }
        }
    });
}

// ✅ TABLE
function renderTable(data) {
    const table = document.getElementById("gapTable");

    table.innerHTML = `
        <tr>
            <th>Category</th>
            <th>Required</th>
            <th>Entitled</th>
            <th>Gap</th>
        </tr>
        ${data.map(g => `
        <tr>
            <td>${g.category}</td>
            <td>${g.required.toLocaleString()}</td>
            <td>${g.entitled.toLocaleString()}</td>
            <td class="${g.gap < 0 ? 'neg':'pos'}">
                ${g.gap > 0 ? '+' : ''}${g.gap.toLocaleString()}
            </td>
        </tr>`).join('')}
    `;
}

// ✅ RUN APP
loadDashboard();
