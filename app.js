const myArray = [
    {'name':'Paper Mario: The Origami King', 'plantform':'Nintendo Switch', 'review':'4.5 Stars'},
    {'name':'Ghost of Tsushima', 'plantform':'PS4', 'review':'4.5 Stars'},
    {'name':'Valorant', 'plantform':'PC', 'review':'4 Stars'},
    {'name':'Last of Us Part 2', 'plantform':'PS4', 'review':'5 Stars'},
    {'name':'Maneater', 'plantform':'PC, PS4, Xbox', 'review':'4 Stars'},
    {'name':'Final Fantasy 7 Remake', 'plantform':'PS4', 'review':'4.5 Stars'},
    {'name':'Half-Life Alyx', 'plantform':'PC, VR', 'review':'4.5 Stars'},
    {'name':'Animal Crossing: New Horizons', 'plantform':'Nintendo Switch', 'review':'4.5 Stars'},
    {'name':'Dreams', 'plantform':'PS4', 'review':'4.5 Stars'},
    {'name':'Journey to the Savage Planet', 'plantform':'PS4, Xbox One, and PC', 'review':'4 Stars'}
];

const tBody = document.querySelector('tbody');
const search = document.querySelector('#search');

const buildTable = (data) => {
    tBody.innerHTML = '';

    for(let i = 0; i < data.length; i++){
        let row = `
            <tr>
                <td>${data[i].name}</td>
                <td>${data[i].plantform}</td>
                <td>${data[i].review}</td>
            </tr>
        `;

        tBody.innerHTML += row;
    }
}

search.addEventListener('keyup', () => {
    const value = search.value.toLowerCase();

    const result = myArray.filter(arr => arr.name.toLowerCase().includes(value));

    buildTable(result);
});

buildTable(myArray);




