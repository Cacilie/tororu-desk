
(function () {    
    document
        .querySelector("#textarea")
        .addEventListener("input", function countWord() {
            let res = [];
            let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
            str.map((s) => {
                let trimStr = s.trim();
                if (trimStr.length > 0) {
                    res.push(trimStr);
                }
            });


            const text = `Words - ${res.length}`

            document.querySelector("#wordCounter").innerText = text;
        });
})()
