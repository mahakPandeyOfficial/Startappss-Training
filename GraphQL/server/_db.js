let games = [
    {id : '1', title: 'Game One' , platform: 'PC'},
    {id : '2', title: 'Game Two' , platform: 'Xbox'},
    {id : '3', title: 'Game Three' , platform: 'PlayStationm'},
    {id : '4', title: 'Game Four' , platform: 'Nintendo Switch'},
    {id : '5', title: 'Game Five' , platform: 'PC'},
]

let authors = [
    {id: '1', name: 'Jasica', verified: true},
    {id: '2', name: 'John', verified: false},
    {id: '3', name: 'Alice', verified: true},
    {id: '4', name: 'Bob', verified: false},
    {id: '5', name: 'Charlie', verified: true},
]

let reviews = [
    {id: '1', rating: 5, content: 'Amazing game!', gameId: '2', authorId: '1'},
    {id: '2', rating: 4, content: 'Great gameplay!', gameId: '1', authorId: '2'},
    {id: '1', rating: 3, content: 'It was okay.', gameId: '1', authorId: '3'},
    {id: '4', rating: 2, content: 'Not my favorite.', gameId: '4', authorId: '1'},
    {id: '1', rating: 1, content: 'Terrible experience.', gameId: '1', authorId: '5'},
]

export default { games, authors, reviews }