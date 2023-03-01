linkFunc = () => {
    const links = document.querySelectorAll(".has-link")
    links.forEach((linkable) => {
        const link = linkable.dataset.link
        console.log(link);

        linkable.addEventListener('click', () => {
            window.open(link, "_blank")
        })
    })
}


setTimeout(linkFunc, 100);