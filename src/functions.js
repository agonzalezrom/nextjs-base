export const buildFullName = string => {
    let [name, lastname, secondLastname] = string.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } )
    lastname = typeof lastname !== "undefined" ? lastname : ""
    secondLastname = typeof secondLastname !== "undefined" ? secondLastname : ""
    return [name, lastname, secondLastname]
}

export const setComponentsPerCols = (elements, cols) => {
    let content = [];
    let tmp = [];
    elements.forEach((element, index)=>{
        if (index%cols===0) {
            tmp=[];
            tmp.push(element);
            if(tmp.length>0)
                content.push(tmp);
        }else{
            tmp.push(element);
        }
    });
    return content;
}

export const dateToTimestamp = date => {
    return '@' + Math.round(date.getTime()/1000)
}