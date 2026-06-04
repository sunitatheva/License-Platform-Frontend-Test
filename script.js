const API = "http://localhost:8080/api/dashboard";

// Load everything
async function loadDashboard() {
    const kpis = await fetch(API + "/kpis").then(r => r.json());
    renderKPIs(kpis);

    const dept = await fetch(API + "/departments").then(r => r.json());
    renderBarChart(dept);

    const gaps = await fetch(API + "/gaps").then(r => r.json());
    renderTable(gaps);
}

// KPI
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

// BAR CHART (MoJ Labels ✅)
function renderBarChart(data) {
    const labels = data.map(d => d.name);
    const values = data.map(d => d.cost);

    new Chart(document.getElementById("barChart"), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: "#1e6fff"
            }]
        }
    });
}

// TABLE
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
            <td>${g.required}</td>
            <td>${g.entitled}</td>
            <td class="${g.gap < 0 ? 'neg':'pos'}">${g.gap}</td>
        </tr>`).join('')}
    `;
}

loadDashboard();
