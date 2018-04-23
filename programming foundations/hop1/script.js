let idNum = 0;
const gradeArrayNum = [];
let functionRan = false;



function numToLetter() {
    let i = 0;
    if(functionRan === false) {
        while(document.getElementsByTagName('input')[i] !== undefined) {
            gradeArrayNum.push(document.getElementsByTagName('input')[i].value);
            i++;
            };

            for(let i = 0; i < gradeArrayNum.length; i++) {
                let gradeNum = gradeArrayNum[i];
                let gradeLet;
                if (gradeNum < 60) {
                    gradeLet = 'F';
                } else if(gradeNum < 70) {
                    gradeLet = 'D';
                } else if(gradeNum < 80) {
                    gradeLet = 'C';
                } else if(gradeNum < 90) {
                    gradeLet = 'B';
                } else if(gradeNum <= 100) {
                    gradeLet = 'A';
                } else {
                    alert('Grade Not Valid');
                }
                displayLetterGen(gradeLet);
            }

            function gradeAvg(arr) {
                let total = 0;

                let avg;
                for (let i = 0; i < arr.length; i++) {
                    let num = Number(arr[i]);
                    total += num;
                }
                avg = Math.round(total / arr.length);
                
                return avg;
            }
            displayAvgGen(gradeAvg(gradeArrayNum));
        }
        

        
        functionRan = true;
}


$(document).ready(function(){
    $('#resetPage').click(function(){
        location.reload();
    })
})



function displayAvgGen(gradeNum){
    let gradeLet;
    if (gradeNum < 60) {
        gradeLet = 'F';
    } else if(gradeNum < 70) {
        gradeLet = 'D';
    } else if(gradeNum < 80) {
        gradeLet = 'C';
    } else if(gradeNum < 90) {
        gradeLet = 'B';
    } else if(gradeNum <= 100) {
        gradeLet = 'A';
    } else {
         alert('Grade Not Valid');
    }
    let newP = document.createElement('p');
    let newPId = document.createAttribute('id');
    newPId.value = "gradeP";
    newP.setAttributeNode(newPId);
    newP.innerHTML = `Your average score is: ${gradeNum}, ${gradeLet}`;
    document.getElementById('output').appendChild(newP);
}





function displayLetterGen(grade){
    let newP = document.createElement('p');
    let newPId = document.createAttribute('id');
    newPId.value = "gradeP";
    newP.setAttributeNode(newPId);
    newP.innerHTML = grade;
    document.getElementById('output').appendChild(newP);
}




$(document).ready(function(){
    $('#inputGen').click(function(){
        if(functionRan === false) {
            let newInput = document.createElement('input');
            let lb = document.createElement('br');
            let lb2 = document.createElement('br');
            let newLabel = document.createElement('label');
            let onChangeAttr = document.createAttribute('onchange');
            onChangeAttr.value = 'handleChange(this)';
            let inputId = document.createAttribute('id');
            inputId.value = `grade${idNum}`;
            newInput.setAttributeNode(inputId);
            newInput.setAttributeNode(onChangeAttr);
            newLabel.innerHTML = 'Grade: ';
            document.getElementById('inputGrade').appendChild(lb);
            document.getElementById('inputGrade').appendChild(lb2);
            document.getElementById('inputGrade').appendChild(newLabel);
            document.getElementById('inputGrade').appendChild(newInput);
        }

    });
});




function handleChange(input) {
        if(input.value < 0) {
        input.value = 0;
    } else if(input.value > 100) {
        input.value = 100;
    }
}