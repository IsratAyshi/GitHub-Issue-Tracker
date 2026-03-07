
let allIssues = [];
let allIssuesCount = 0;
let openIssuesCount = 0;
let closedIssuesCount = 0;

// update issue count
const issueCountUpdate = (filter) => {
    const issueCount = document.getElementById("issue-count");

    if (filter === "all") {
        issueCount.innerText = allIssuesCount;
    }
    else if (filter === "open") {
        issueCount.innerText = openIssuesCount;
    }
    else if (filter === "closed") {
        issueCount.innerText = closedIssuesCount;
    }
}

// update active filter button color
const activeFilterBtn = (id) => {
    const activeBtn = document.getElementById(id);
    // console.log(activeBtn);

    const allBtn = document.getElementById("all-btn");
    const openBtn = document.getElementById("open-btn");
    const closedBtn = document.getElementById("closed-btn");

    allBtn.classList.remove("btn-primary", "text-white");
    openBtn.classList.remove("btn-primary", "text-white");
    closedBtn.classList.remove("btn-primary", "text-white");

    if (activeBtn === allBtn) {
        allBtn.classList.add("btn-primary", "text-white");
        issueCountUpdate("all");
        displayIssues(allIssues);
    }
    else if (activeBtn === openBtn) {
        openBtn.classList.add("btn-primary", "text-white");
        issueCountUpdate("open");

        displayIssues(allIssues.filter(issue => issue.status === "open"));
    }
    else if (activeBtn === closedBtn) {
        closedBtn.classList.add("btn-primary", "text-white");
        issueCountUpdate("closed");

        displayIssues(allIssues.filter(issue => issue.status === "closed"));
    }

}


// load and display issue cards
const loadIssues = async() => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const json = await res.json();
    allIssues = json.data;
    displayIssues(json.data);

    countFilteredIssues(allIssues);
    
}
loadIssues();

const displayIssues = (issues) => {
    const issueContainer = document.getElementById('issueContainer');
    issueContainer.innerHTML = "";

    issues.forEach(issue => {
        // allIssues.push(issue);

        const issueCard = document.createElement('div');
        issueCard.className = `card bg-white shadow-sm ${issue.status === 'open' ? "border-t-2 border-[#00a96eFF]" : "border-t-2 border-[#a855f7FF]"} `;

        // load Badges
        const badgesHTML = issue.labels.map(label => {
            if (!label) {
                return "";
            }
            else {
                return `
                    <div class="badge bg-[#FDE68A] badge- text-xs font-medium rounded-full">
                        ${label.toUpperCase()}
                    </div>
                `;
            }
        });

        // load issue card content
        issueCard.innerHTML = `
        <div onclick="showIssueModal(${issue.id})" class="card bg-base-100 w-full shadow-sm h-full">
            <div class="m-4 space-y-3">

                <div class="flex justify-between items-center">
                    <img class="w-6" src="${issue.status === 'open' ? "./assets/Open-Status.png" : "./assets/Closed- Status .png"}" alt="">
                    <div class="badge badge-soft ${issue.priority === 'high' ? "badge-error" : issue.priority === 'medium' ? "badge-warning" : "badge-[bg-[#eeeff2FF]]"} text-xs font-medium rounded-full">${issue.priority.toUpperCase()}</div>
                </div>

                <div>
                    <h2 class="card-title text-sm font-semibold mb-2">${issue.title}</h2>
                    <p class="text-xs text-[#64748bFF] line-clamp-2">${issue.description}</p>
                </div>

                <div class="border-b-1 border-gray-200 pb-4 flex gap-1 flex-wrap">
                    ${badgesHTML.join('')}
                </div>

                <div>
                    <p class="text-xs text-[#64748bFF] mb-2">#1 by ${issue.author}</p>
                    <p class="text-xs text-[#64748bFF]">${issue.createdAt.split('T')[0]}</p>
                </div>
            </div>
        </div>
        `;

        issueContainer.appendChild(issueCard);
    })
}

// count issues category wise when a filter button is clicked
const countFilteredIssues = (allIssues) => {
    // console.log(allIssues);

    const openIssues = allIssues.filter(issue => issue.status === "open");
    const closedIssues = allIssues.filter(issue => issue.status === "closed");

    allIssuesCount = allIssues.length;
    openIssuesCount = openIssues.length;
    closedIssuesCount = closedIssues.length;

    issueCountUpdate("all");
}


//Search Functionality with count update
document.getElementById('input-search').addEventListener("input", async(event) => {
    const searchText = event.target.value.trim();
    // console.log(searchText);

    if (searchText === "") {
        issueCountUpdate("all");
        displayIssues(allIssues);
        return;
    }

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`);
    const json = await res.json();
    // console.log(json.data);

    const filtered = json.data.filter(issue => issue.title.toLowerCase().includes(searchText.toLowerCase()));
    displayIssues(filtered);

    const FilteredissueCount = document.getElementById("issue-count");
    FilteredissueCount.innerText = filtered.length;

})


//Show Modal when a issue card clicked
const showIssueModal = async(issueId) => {
    
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${issueId}`);
    const json = await res.json();
    // console.log(json.data);
    displayIssueModal(json.data);
    
}

const displayIssueModal = (issue) => {
    const issueModal = document.getElementById('issueModal');
    issueModal.showModal();
}