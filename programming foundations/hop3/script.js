class GrandParents {
   constructor(familyMember, hairColor, eyeColor, verticalHeight){
       this.familyMember = familyMember;
       this.verticalHeight = verticalHeight
       this.hairColor = hairColor;
       this.eyeColor = eyeColor;
   }

   vertical(){
       console.log(`${this.familyMember} has a ${this.verticalHeight} vertical`);
   }
}

class Parents extends GrandParents {
    constructor(familyMember, hairColor, eyeColor, verticalHeight){
        super(familyMember, hairColor, eyeColor, verticalHeight);
    }
}

class Child extends Parents {
    constructor(familyMember, hairColor, eyeColor, verticalHeight){
        super(familyMember, hairColor, eyeColor, verticalHeight);
    }
}

let susy = new Child('Daughter', 'Blonde', 'Green', '10 inch');
let becca = new Parents('Mom', 'Blonde', 'Brown', '15 inch');
let harold = new GrandParents('Grandfather', 'Brown', 'Green', '30 inch');

const familyTree = [susy, becca, harold];

function logVert(arr) {
    arr.forEach(function(item) {
        item.vertical();
    });
}

logVert(familyTree);