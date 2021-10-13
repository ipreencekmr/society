
const config = {
    OPEN_CONSOLE:true
}

const konsole = {
    log:(...args:any)=>{
        if (config.OPEN_CONSOLE) {
            console.log(...args);
        }
    },
    error:(...args:any)=>{
        if (config.OPEN_CONSOLE) {
            console.error(...args);
        }
    },
    decor:(...args:any)=>{
        if (config.OPEN_CONSOLE) {
            console.log('-*-*-*-',...args,'-*-*-*-');
        }
    },
    encapse:(...args:any)=>{
        if (config.OPEN_CONSOLE) {
            console.log('-*-*-*-*-*-*--*-*-*-*-*-*--*-*-*-*-*-*-');
            console.log(...args);
            console.log('-*-*-*-*-*-*--*-*-*-*-*-*--*-*-*-*-*-*-');
        }
    }
}

export default konsole;