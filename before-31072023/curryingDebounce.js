function debounce(func, timeout) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

function onSubmit() {
    console.log("-------saving changes---->")
}

//   const result = debounce(onSubmit, 2000)
console.log(debounce(onSubmit, 2000))
console.log(debounce(onSubmit, 2000))