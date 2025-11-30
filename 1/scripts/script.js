const app = document.querySelector("#app")


function initialMessage(message) {
    const element = `
        <h1>${message}</h1>
    `
    return element
}

function NavBarListItem(imagePath, content) {
    return `
        <li class="navbar-list-item">
            <img src="./images/navbar/${imagePath}.svg" />
            <p>${content}</p>
        </li>
    `
}

function NavBar() {
    const obj = [
        {
            imagePath: "dashboard",
            content: "Dashboard",
        },
        {
            imagePath: "tasks",
            content: "Tasks"
        },
        {
            imagePath:"projects",
            content:"Projects",
        },
        {
            imagePath:"tags",
            content:"Tags"
        },
        {
            imagePath:"settings",
            content:"Settings"
        },
        {
            imagePath:"profile",
            content:"Profile"
        }
    ]

    let listItems = ``
    obj.map((el) => {
        if (el.imagePath === "settings") {
            listItems += `<p class="navbar-settings-section-heading">Settings</p>`
        }
        listItems += NavBarListItem(el.imagePath, el.content)
    })
    const element = `
        <nav class="navbar">
            <div class="navbar-controlls">
                <div class="navbar-logo">
                    <img src="./images/logo.png" />
                    <h1 class="navbar-logo-heading">SynTask</h1>
                </div>
                <ul class="navbar-list">
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

function Tab(tabContent, isActive) {
    const element = `
        <div>
            <h1>${tabContent}</h1>
        </div>
    `
    return element
}

function DashBoard() {

}

function createApp(elements) {
    const app = elements.join(" ")
    return app
}

function bootstrap(createdApp) {
    console.log("Website builded!")
    app.innerHTML = createdApp
}

const oneMessage = initialMessage("Hello world");
const navBar = NavBar()
const createdApp = createApp([navBar])
bootstrap(createdApp);