console.log('hello');

let list = document.getElementById('list-container');
let arr = [];
let count = 0;
// let element = document.createElement('li');
// let span = document.createElement('span');


function myfunction(){
    let text = document.getElementById('input'); 
    console.log(text);
    if (text.value == ""){
        alert('please add to do list');
    }
    else{
        
        // element.innerHTML = '<input type = "checkbox" >' + text.value;
        // list.appendChild(element);
        // let list = document.getElementById('list-container');
        arr.push(text.value);

        let element = document.createElement('li');
        let span = document.createElement('span');
        
        
        span.innerHTML = 'X';
        // for (ele in arr){

        // }
        element.innerHTML = '<input type = "checkbox" >' + text.value;
        list.appendChild(element);
        element.appendChild(span);
        count = count+1;
        document.getElementById('count').innerHTML = count;
        text.value = "";
        saveItem();

    }
}

    list.addEventListener("click", function(e){
        console.log(e.target.tagName);
        if (e.target.tagName == 'INPUT'){
        let checkbox = e.target;
        let parent = checkbox.parentNode;
        parent.classList.toggle('toggle');
        }
        // console.log(e.target.tagName);
        // if (e.target.tagName == 'LI'){
        //     let li = e.target;
        //     console.log(li.checked);
        // }
        if (e.target.tagName === 'SPAN'){
            // console.log(e.target.tagName);
            e.target.parentElement.remove();
            count-=1;
            document.getElementById('count').innerHTML = count;
            saveItem();
        }
    });


    function saveItem(){
        localStorage.setItem('data', list.innerHTML);
    }
    

  

