
let myLeads = []
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")

saveBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

function renderLeads() {
    ulEl.innerHTML = ""
    for (let lead of myLeads) {
        ulEl.innerHTML += "<li><a href='" + lead + "' target='_blank'>" + lead + "</a></li>"
    }
}
