
export function generateSubmitTime(event){
    event.preventDefault()
    const time = document.querySelector("#time-stamp")
    let currentTime = new Date().toString()
    time.value = currentTime
    event.target.submit()
}


