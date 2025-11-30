const app = document.querySelector("#app")


function initialMessage(message){
    const element = `
        <h1>${message}</h1>
    `
    return element
}

function NavBarListItem(imagePath, content){
    return `
        <li class="navbar-list-item">
            <img src="./images/navbar/${imagePath}.svg" />
            <p>${content}</p>
        </li>
    `
}

function NavBar(){
    const obj = {
        firstEl: {
            imagePath:"dashboard",
            content:"Dashboard",
        },
        secondEl:{
            imagePath:"tasks",
            content:"Tasks"
        }
    }
    const element = `
        <nav class="navbar">
            <div class="navbar-controlls">
                <div class="navbar-logo">
                    <img src="./images/logo.png" />
                    <h1 class="navbar-logo-heading">SynTask</h1>
                </div>
                <ul class="navbar-list">
                    ${NavBarListItem("dashboard", "Dashboard")}
                    ${NavBarListItem("tasks", "Tasks")}
                    ${NavBarListItem("projects", "Projects")}
                    ${NavBarListItem("tags", "Tags")}
                    <p class="navbar-settings-section-heading">Settings</p>
                    ${NavBarListItem("settings", "Setting")}
                    ${NavBarListItem("profile", "Profile")}
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

function Tab(tabContent, isActive ){
    const element =`
        <div>
            <h1>${tabContent}</h1>
        </div>
    `
    return element
}

function DashBoard(){

}

function createApp(elements){
    const app = elements.join(" ")
    console.log(app)
    return app
}

function bootstrap(createdApp){
    console.log("Website builded!")
    app.innerHTML = createdApp
}

const oneMessage = initialMessage("Hello world");
const navBar = NavBar()
const createdApp = createApp([navBar])
bootstrap(createdApp);