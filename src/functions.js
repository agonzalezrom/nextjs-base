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

export const mediaUrlBuilder = (id, file_name, disk) => {
    if (disk === "s3")
        return "https://" + process.env.NEXT_PUBLIC_AWS_BUCKET + ".s3." + process.env.NEXT_PUBLIC_AWS_DEFAULT_REGION + ".amazonaws.com/" + id + "/" + file_name
    if(disk === "local")
        return process.env.NEXT_PUBLIC_SITE_BE + "/" + file_name
}