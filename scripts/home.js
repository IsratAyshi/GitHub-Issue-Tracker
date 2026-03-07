
const allIssues = [];
let allIssuesCount = 0;
let openIssuesCount = 0;
let closedIssuesCount = 0;

const loadIssues = async() => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const json = await res.json();
    allIssuesCount = json.data.length;
    displayIssues(json.data);
    
}
loadIssues();

const displayIssues = (issues) => {
    
    const issueContainer = document.getElementById('issueContainer');
    issueContainer.innerHTML = "";

    issues.forEach(issue => {

        if (issue.status === "open") {
            openIssuesCount++;
        }
        else {
            closedIssuesCount++;
        }

        const issueCard = document.createElement('div');
        issueCard.className = `card bg-white shadow-sm ${issue.status === 'open' ? "border-t-2 border-[#00a96eFF]" : "border-t-2 border-[#a855f7FF]"} `;

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

        issueCard.innerHTML = `
        <div class="card bg-base-100 w-full shadow-sm h-full">
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

    console.log(allIssuesCount);
    console.log(openIssuesCount);
    console.log(closedIssuesCount);
}





