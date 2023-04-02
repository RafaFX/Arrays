const notes = [10,6.5,8,7.5]

// adiciona um elemnto no ultimo index
notes.push(4);

//remove o ultimo elemento
notes.pop(3);

console.log(notes);

let media = 0;

for(let i = 0; i < notes.length; i++){
    media += notes[i];
}

const result = media / notes.length;

console.log(result)
