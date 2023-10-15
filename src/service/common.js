
export function user(){
    var data = localStorage.getItem("user")
    return data 
}


let objSharedData = {}

export function objSharedRequest(data){
    objSharedData = data
}

export function objSharedResponse(){
   return objSharedData 
}