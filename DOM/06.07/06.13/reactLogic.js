const overlay = document.querySelector(".overlay")
const openModal = document.querySelector(".openModal")
const esc = document.querySelector(".esc")


const form = document.querySelector("form")
const cards = document.querySelector(".cards")
const inProgress = document.querySelector(".inProgress")
const blocked = document.querySelector(".blocked")
const done = document.querySelector(".done")
const checkBox = document.querySelector(".myCheckBox")

const card = document.querySelector(".card")


const titleInput = document.querySelector(".title")
const textInput = document.querySelector(".textArea")
const selectorInput = document.getElementById("selector")
const statusSelectorInput = document.querySelector("#statusSelector")
let index = 0

openModal.addEventListener("click", (event) => {
    event.preventDefault()
    overlay.classList.add("active");
})
esc.addEventListener("click", (event) => {
    event.preventDefault()
    overlay.classList.remove("active")
})

const myFunction = (title, description, id, selector, status) => {
    return `<div class="card">
    <input type="checkbox" ${status === "Done" ? "checked" : ""} id="myCheckBox" onclick="switchItem(${id})">
    <button onclick="deleteItem(${id})" class="small" >X</button>
    <div>Priority:${selector}</div>
    <h2>${title}</h2>
    <p>${description}</p>`
}


//State
let data = []

//Set state

const setData = (arr) => {
    data = arr;
    sortData()
    render();
}

// Sort 

const sortData = () => {
    data.sort((a, b) => {
        const priorityOrder = { "high": 1, "medium": 2, "low": 3 }
        return priorityOrder[a.selector] - priorityOrder[b.selector];
    })
}
//Render

const render = () => {
    cards.innerHTML = ""
    blocked.innerHTML = ""
    inProgress.innerHTML = ""
    done.innerHTML = ""
    const toDoArr = []
    const blockedArr = []
    const inProArr = []
    const doneArr = []

    data.forEach((item) => {
        if (item.status === "To Do") {
            toDoArr.push(myFunction({ ...item }));
        } else if (item.status === "Blocked") {
            blockedArr.push(myFunction({ ...item }));
        } else if (item.status === "In Progress") {
            inProArr.push(myFunction({ ...item }));
        } else if (item.status === "Done") {
            doneArr.push(myFunction({ ...item }));
        }
    }
    )
    document.querySelector("#toDoCount").innerHTML = toDoArr.length
    document.querySelector("#inProCount").innerHTML = inProArr.length
    document.querySelector("#doneCount").innerHTML = doneArr.length
    document.querySelector("#blockedCount").innerHTML = blockedArr.length

    data.forEach((item) => {
        if (item.status === "To Do") {
            cards.innerHTML += myFunction(item.title, item.description, item.id, item.selector, item.status);
        } else if (item.status === "Blocked") {
            blocked.innerHTML += myFunction(item.title, item.description, item.id, item.selector, item.status);
        } else if (item.status === "In Progress") {
            inProgress.innerHTML += myFunction(item.title, item.description, item.id, item.selector, item.status);
        } else if (item.status === "Done") {
            done.innerHTML += myFunction(item.title, item.description, item.id, item.selector, item.status);
        }
    }
    )
}


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const description = textInput.value;
    const selector = selectorInput.value;
    const status = statusSelectorInput.value;

    const newData = [
        ...data,
        {
            "id": index,
            title,
            description,
            selector,
            status,
        }
    ];
    index++;
    setData(newData);
    overlay.classList.remove("active")
});

const deleteItem = (id) => {
    const newData = [...data].filter((item) => item.id !== id);
    setData(newData);
};
const switchItem = (id) => {
    const newData = data.map((item) => {
        if (item.id === id) {
            return { ...item, status: "Done" };

        } return item
    });
    setData(newData)
}

render();
