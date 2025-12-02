let tabsContent = [
    {
        dataContent: "dashboard",
        content: "Dashboard",
        isActive: true
    },
    {
        dataContent: "tasks",
        content: "Tasks"
    },
    {
        dataContent: "projects",
        content: "Projects",
    },
    {
        dataContent: "tags",
        content: "Tags"
    },
    {
        dataContent: "settings",
        content: "Settings"
    },
    {
        dataContent: "profile",
        content: "Profile"
    }
]
let navBarListContent = [
    {
        imagePath: "dashboard",
        content: "Dashboard",
        isActive: true
    },
    {
        imagePath: "tasks",
        content: "Tasks"
    },
    {
        imagePath: "projects",
        content: "Projects",
    },
    {
        imagePath: "tags",
        content: "Tags"
    },
    {
        imagePath: "settings",
        content: "Settings"
    },
    {
        imagePath: "profile",
        content: "Profile"
    }
]
/*----APP INITIALIZING----*/
const app = document.querySelector("#app")
function initialMessage(message) {
    const element = `
        <h1>${message}</h1>
    `
    return element
}
/*----NAV BAR----*/
function NavBarListItem(imagePath, content, dataContent, isActive) {
    return `
        <li class="navbar-list-item ${isActive ? 'active' : ''}" data-btn=${dataContent}>
            <img src="./images/navbar/${imagePath}.svg" />
            <p>${content}</p>
        </li>
    `
}
function NavBar(navBarListContent) {
    let listItems = ``
    navBarListContent.map((el) => {
        if (el.imagePath === "settings") {
            listItems += `<p class="navbar-settings-section-heading">Settings</p>`
        }
        if (el.isActive) {
            listItems += NavBarListItem(el.imagePath, el.content, el.imagePath, el.isActive)
        } else {
            listItems += NavBarListItem(el.imagePath, el.content, el.imagePath)
        }

    })
    const element = `
        <nav class="navbar">
            <div class="navbar-controlls">
                <div class="navbar-logo">
                    <img src="./images/logo.png" />
                    <h1 class="navbar-logo-heading">SynTask</h1>
                </div>
                <ul class="navbar-list" id="tabs">
                    ${listItems}
                </ul>
            </div>
            <div class="navbar-account-information">
                <img class="navbar-account-logo" src="./images/navbar/account-logo.png" />
                <div class="navbar-account-description">
                    <h1>John Doe</h1>
                    <p>john@syntask.com</p>
                </div>
            </div>
        </nav>
    `

    return element
}
/*----NAV BAR----*/
function TabElement(tabContent, dataContent, isActive) {
    return `        
        <div class="tab-content ${isActive ? 'active' : ''}" data-content="${dataContent}">
            <h1>${tabContent}</h1>
        </div>
    `
}
function Tab(tabsContent) {
    let listItems = ``
    tabsContent.map((el) => {
        console.log(el)
        if (el[0].type === "html") {
            listItems += el[0].content
        }
        else if (el[0].isActive) {
            listItems += TabElement(el[0].content, el[0].dataContent, el[0].isActive)
        } else {
            listItems += TabElement(el[0].content, el[0].dataContent)
        }

    })
    const element = `
        <div class="content">
            ${listItems}
        </div>
    `

    return element
}
/*----DASHBOARD----*/
function DashboardSearchDropDown(content) {
    return `
        <div class="dashboard-search-dropdown">            
            <p>${content}</p>
            <img src="./images/dashboard/arrow.svg"/>
        </div>
    `
}
function DashboardSearchSection() {
    const dropdownContent = [
        {
            content: "Priority"
        },
        {
            content: "Status"
        },
        {
            content: "Date"
        }
    ]

    let dropdowns = ``
    dropdownContent.map((el) => {
        dropdowns += DashboardSearchDropDown(el.content)
    })
    return `
        <div class="dasboard-serch-section">
            <div class="dashboard-search-input">
                <img src="./images/dashboard/search-icon.svg"/>
                <input placeholder="Search tasks and projects...">
            </div>
            <ul class="dashboard-search-dropdowns">
                ${dropdowns}
            </ul>
        </div>
    `
}
function DashboardRecentTask(content) {
    return `
        <div class="recent-task  ${content.importance === 'urgent' ? 'urgent' : 'inprogress'}">
            <div class="recent-task-heading">
                <h1>${content.heading}</h1>
                <span class='${content.importance === 'urgent' ? 'urgent' : 'inprogress'}'>${content.importance==='urgent' ? 'Urgent' : 'In Progress'}</span>
            </div>
            <div class="recent-task-progress">
                <div class="recent-task-progress-bar ${content.importance === 'urgent' ? 'urgent' : 'inprogress'}"></div>
            </div>
            <div class="recent-task-time">
                <img src="./images/dashboard/timer-icon.svg"/>
                <p>${content.timeToEnd}</p>
            </div>
        </div>
    `
}
function DashboardRecentTasks() {
    const content = [
        {
            importance:"urgent",
            heading:"Update API Documentation",
            timeToEnd:"Due Today"
        },{
            importance:"inprogress",
            heading:"Design System Updates",
            timeToEnd:"Due in 3 days"
        }
    ]

    let elements = ``
    content.map((el)=>{
        elements+=DashboardRecentTask(el);
    })

    return `
        <div class="tasks">   
            <h1>Recent Tasks</h1>       
            <div class="dashboard-recent-tasks">
                ${elements}
            </div>
        </div>  
    `
}
function DashboardActiveProject(content){
    return `
        <div class="active-project">
            <div class="active-project-heading">
                <h1>${content.heading}</h1>
                <span class="${content.type === 'ontrack' ? 'ontrack' : content.type==='inprogress' ? 'inprogress' : 'review'}">${content.type === 'ontrack' ? 'On Track' : content.type==='inprogress' ? 'In Progress' : 'Review'}</span>
            </div>
            <span class="active-project-description">${content.description}</span>
            <div class="active-project-progress">
                <span>
                    <p>Progress</p>
                    <p><strong>${content.procent}%</strong></p>
                </span>
                <div class="project-progress">
                    <div class="project-progress-bar ${content.type === 'ontrack' ? 'ontrack' : content.type==='inprogress' ? 'inprogress' : 'review'}"></div>
                </div>
            </div>
            <span class="active-project-ending">${content.timeToEnd}</span>
        </div>
    `
}
function DashboardActiveProjects(){
    const content = [
        {
            type:"ontrack",
            description:"Upgrading backend infrastructure for better performance",
            heading:"Backend Infrastructure",
            procent:60,
            timeToEnd:"Due Apr 15, 2025"
        },{
            type:"inprogress",
            description:"Redesigning the mobile app interface for better user experience",
            heading:"Mobile App Redesign",
            procent:75,
            timeToEnd:"Due Mar 25, 2025"
        },{
            type:"review",
            description:"Creating a new analytics dashboard for clients",
            heading:"Analytics Dashboard",
            procent:90,
            timeToEnd:"Due Mar 30, 2025"
        }
    ]

    let elements = ``
    content.map((el)=>{
        elements+=DashboardActiveProject(el);
    })

    return `
        <div class="projects">   
            <h1>Active Projects</h1>       
            <div class="dashboard-active-projects">
                ${elements}
            </div>
        </div>  
    `
}
function Dashboard(isActive) {
    const element = `
        <div class="tab-content ${isActive ? 'active' : ''}" data-content="dashboard">
            <div class="dashboard-heading">
                <div class="dashboard-heading-text">
                    <h1>Dashboard</h1>
                    <p>Welcome back, John!</p>
                </div>
                <div class="dashboard-heading-controlls">
                    <button>
                        <img src="./images/dashboard/add-new-task-icon.svg" />
                        <p>New Task</p>
                    </button>
                    <button class="new-project-button">
                        <img src="./images/dashboard/add-new-project-icon.svg" />
                        <p>New Project</p>
                    </button>
                </div>
            </div>
            ${DashboardSearchSection()}
            ${DashboardRecentTasks()}
            ${DashboardActiveProjects()}
        </div>
    `
    return element
}
/*----DASHBOARD----*/

/*----APP CREATING----*/
function createApp(elements) {
    const app = elements.join(" ")
    return app
}

function bootstrap(createdApp) {
    console.log("Website builded!")
    app.innerHTML = createdApp
}

function updateTabs(tabsContentKeys) {
    const newTabs = tabsContent.map((el) => {
        return tabsContentKeys.map((key) => {
            if (el.dataContent === key.dataContent) {
                return key
            } else {
                return el
            }
        })
    })
    console.log(newTabs)
    return newTabs;
}

const navBar = NavBar(navBarListContent)
const tabsContentKeys = [{
    dataContent: "dashboard",
    content: Dashboard(true),
    type: "html"
}]
const updatedTabs = updateTabs(tabsContentKeys)
const allTabs = Tab(updatedTabs)
console.log(allTabs)
const createdApp = createApp([navBar, allTabs])
bootstrap(createdApp);
/*----APP CREATING----*/
/*----APP INITIALIZING----*/

/*----APP LOGIC----*/
/*TABS LOGIC*/
const tabs = document.querySelectorAll('#tabs > li');
const contents = document.querySelectorAll('.tab-content');

const changeClass = el => {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const currTab = tab.dataset.btn;
        changeClass(tab);
        for (let i = 0; i < contents.length; i++) {
            contents[i].classList.remove('active');
            if (contents[i].dataset.content === currTab) {
                contents[i].classList.add('active');
            }
        }
    })
})


/*----APP LOGIC----*/