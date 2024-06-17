let input=prompt("Enter your request");
let todo=[];
while(true){
    if(input=="quit"){
        console.log("Quitting the app");
        break;
    }
    else if(input=="list"){
        console.log("-------------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-------------------");
    }
    else if(input=="add"){
        let task=prompt("Enter task to add");
        todo.push(task);
        console.log("task added");
    }
    else if(input=="delete"){
        let idx=prompt("Enter index of task which you want to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else{
        console.log("Invalid request");
    }
    input=prompt("Enter your request");


}