const form = document.getElementById("activityForm");
const log = document.getElementById("activityLog");
const filterType = document.getElementById("filterType");
const filterImpact = document.getElementById("filterImpact");
const successMsg = document.getElementById("successMsg"); // ✅ Add this in HTML if missing

let activities = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const entry = {
    date: document.getElementById("date").value,
    type: document.getElementById("type").value,
    description: document.getElementById("description").value,
    impact: document.getElementById("impact").value,
  };

  activities.push(entry);
  form.reset();

  if (successMsg) {
    successMsg.textContent = "Logged";
    setTimeout(() => {
      successMsg.textContent = "";
    }, 3000);
  }

  renderLog();
});

filterType.addEventListener("change", renderLog);
filterImpact.addEventListener("change", renderLog);

function renderLog() {
  log.innerHTML = "";

  const filtered = activities.filter((a) => {
    const typeMatch = filterType.value === "" || a.type === filterType.value;
    const impactMatch = filterImpact.value === "" || a.impact === filterImpact.value;
    return typeMatch && impactMatch;
  });

  if (filtered.length === 0) {
    log.innerHTML = "<p>No activities logged yet.</p>";
    return;
  }

  filtered.forEach((a) => {
    const div = document.createElement("div");
    div.className = "activity-entry"; // consider changing to "activity-card" if using that style
    div.innerHTML = `
      <strong>${a.date} — ${a.type}</strong><br/>
      <em>${a.impact}</em><br/>
      <p>${a.description || "No description provided."}</p>
    `;
    log.appendChild(div);
  });
}
