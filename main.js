const denominations = ["rook", "bishop", "knight", "king", "pawn"];
const colours = ["white", "black"];
const startPositions = [0, 13, 14, 15, 16, 12, 4, 3, 2, 1, 5];
var board = [[], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var pieces = [{}];


//sqauare
// counnt_to_next_saquare
// piece
//count to next piece
//count of could move to sqaures
//could move to square
//count of intervening sqaure
//intervening square
//next intervening sqaure...
//next could move to square...


const couldMoveTos = [
    1, 21, 1, 19, 6, 2, 0, 3, 1, 2, 4, 2, 3, 5, 0, 9, 1, 5, 13, 2, 5, 9, 2
]
squares = [
    {
        number: 1,
        pieces: [
            {
                number: 1,
                couldGoTo: [
                    {
                        square: 2,
                        intervening: []
                    },
                    {
                        square: 3,
                        intervening: [2]
                    },
                    {
                        square: 4,
                        intervening: [2, 3]
                    },
                    {
                        square: 5,
                        intervening: []
                    },
                    {
                        square: 9,
                        intervening: [5]
                    },
                    {
                        square: 13,
                        intervening: [5, 9]
                    },
                ]
            },
            {
                number: 2,
                couldGoTo: [
                    {
                        number: 6,
                        intervening: [0]
                    },
                    {
                        number: 11,
                        intervening: [6]
                    },
                    {
                        number: 16,
                        intervening: [6, 11]
                    }
                ]
            },
            {
                number: 3,
                couldGoTo: [
                    {
                        number: 7,
                        intervening: []
                    },
                    {
                        number: 10,
                        intervening: []
                    }
                ]
            },
            {
                number: 4,
                couldGoTo: [
                    {
                        number: 2,
                        intervening: []
                    },
                    {
                        number: 6,
                        intervening: []
                    },
                    {
                        number: 4,
                        intervening: []
                    }
                ]
            },
            {
                number: 5,
                couldGoTo: []
            },
            {
                number: 6,
                couldGoTo: [
                    {
                        square: 2,
                        intervening: []
                    },
                    {
                        square: 3,
                        intervening: [2]
                    },
                    {
                        square: 4,
                        intervening: [2, 3]
                    },
                    {
                        square: 5,
                        intervening: []
                    },
                    {
                        square: 9,
                        intervening: [5]
                    },
                    {
                        square: 13,
                        intervening: [5, 9]
                    },
                ]
            },
            {
                number: 7,
                couldGoTo: [
                    {
                        number: 6,
                        intervening: [0]
                    },
                    {
                        number: 11,
                        intervening: [6]
                    },
                    {
                        number: 16,
                        intervening: [6, 11]
                    }
                ]
            },
            {
                number: 8,
                couldGoTo: [
                    {
                        number: 7,
                        intervening: []
                    },
                    {
                        number: 10,
                        intervening: []
                    }
                ]
            },
            {
                number: 9,
                couldGoTo: [
                    {
                        number: 2,
                        intervening: []
                    },
                    {
                        number: 6,
                        intervening: []
                    },
                    {
                        number: 4,
                        intervening: []
                    }
                ]
            },
            {
                number: 10,
                couldGoTo: []
            }
        ]
    },
    {
        number: 2,
        pieces: [
            {
                number: 1,
                couldGoTo: [
                    {
                        square: 1,
                        intervening: []
                    },
                    {
                        square: 3,
                        intervening: []
                    },
                    {
                        square: 4,
                        intervening: [3]
                    },
                    {
                        square: 6,
                        intervening: []
                    },
                    {
                        square: 10,
                        intervening: [6]
                    },
                    {
                        square: 14,
                        intervening: [6, 10]
                    },

                ]
            },
            {
                number: 2,
                couldGoTo: [
                    {
                        number: 5,
                        intervening: [0]
                    },
                    {
                        number: 7,
                        intervening: [0]
                    },
                    {
                        number: 12,
                        intervening: [7]
                    }
                ]
            },
            {
                number: 3,
                couldGoTo: [
                    {
                        number: 12,
                        intervening: []
                    },
                    {
                        number: 5,
                        intervening: []
                    },
                    {
                        number: 10,
                        intervening: []
                    }
                ]
            },
            {
                number: 4,
                couldGoTo: [
                    {
                        number: 1,
                        intervening: []
                    },
                    {
                        number: 5,
                        intervening: []
                    },
                    {
                        number: 6,
                        intervening: []
                    },
                    {
                        number: 7,
                        intervening: []
                    },
                    {
                        number: 3,
                        intervening: []
                    }
                ]
            },
            {
                number: 5,
                couldGoTo: []
            },
            {
                number: 6,
                couldGoTo: [
                    {
                        square: 1,
                        intervening: []
                    },
                    {
                        square: 3,
                        intervening: []
                    },
                    {
                        square: 4,
                        intervening: [3]
                    },
                    {
                        square: 6,
                        intervening: []
                    },
                    {
                        square: 10,
                        intervening: [6]
                    },
                    {
                        square: 14,
                        intervening: [6, 10]
                    },

                ]
            },
            {
                number: 7,
                couldGoTo: [
                    {
                        number: 5,
                        intervening: [0]
                    },
                    {
                        number: 7,
                        intervening: [0]
                    },
                    {
                        number: 12,
                        intervening: [7]
                    }
                ]
            },
            {
                number: 8,
                couldGoTo: [
                    {
                        number: 12,
                        intervening: []
                    },
                    {
                        number: 5,
                        intervening: []
                    },
                    {
                        number: 10,
                        intervening: []
                    }
                ]
            },
            {
                number: 9,
                couldGoTo: [
                    {
                        number: 1,
                        intervening: []
                    },
                    {
                        number: 5,
                        intervening: []
                    },
                    {
                        number: 6,
                        intervening: []
                    },
                    {
                        number: 7,
                        intervening: []
                    },
                    {
                        number: 3,
                        intervening: []
                    }
                ]
            },
            {
                number: 10,
                couldGoTo: []
            }

        ]
    },
    {
        number: 3,
        pieces: [
            {
                number: 1,
                couldGoTo: [
                    {
                        square: 1,
                        intervening: [2]
                    },
                    {
                        square: 2,
                        intervening: []
                    },
                    {
                        square: 4,
                        intervening: [3]
                    },
                    {
                        square: 7,
                        intervening: []
                    },
                    {
                        square: 11,
                        intervening: [7]
                    },
                    {
                        square: 15,
                        intervening: [7, 11]
                    },

                ]
            },
            {
                number: 2,
                couldGoTo: [
                    {
                        number: 6,
                        intervening: [0]
                    },
                    {
                        number: 9,
                        intervening: [6]
                    },
                    {
                        number: 8,
                        intervening: []
                    }
                ]
            },
            {
                number: 3,
                couldGoTo: [
                    {
                        number: 5,
                        intervening: []
                    },
                    {
                        number: 10,
                        intervening: []
                    },
                    {
                        number: 12,
                        intervening: []
                    }
                ]
            },
            {
                number: 4,
                couldGoTo: [
                    {
                        number: 2,
                        intervening: []
                    },
                    {
                        number: 6,
                        intervening: []
                    },
                    {
                        number: 7,
                        intervening: []
                    },
                    {
                        number: 8,
                        intervening: []
                    },
                    {
                        number: 4,
                        intervening: []
                    }
                ]
            },
            {
                number: 5,
                couldGoTo: []
            },
            {
                number: 6,
                couldGoTo: [
                    {
                        square: 1,
                        intervening: []
                    },
                    {
                        square: 3,
                        intervening: []
                    },
                    {
                        square: 4,
                        intervening: [3]
                    },
                    {
                        square: 6,
                        intervening: []
                    },
                    {
                        square: 10,
                        intervening: [6]
                    },
                    {
                        square: 14,
                        intervening: [6, 10]
                    },

                ]
            },
            {
                number: 7,
                couldGoTo: [
                    {
                        number: 5,
                        intervening: [0]
                    },
                    {
                        number: 7,
                        intervening: [0]
                    },
                    {
                        number: 12,
                        intervening: [7]
                    }
                ]
            },
            {
                number: 8,
                couldGoTo: [
                    {
                        number: 12,
                        intervening: []
                    },
                    {
                        number: 5,
                        intervening: []
                    },
                    {
                        number: 10,
                        intervening: []
                    }
                ]
            },
            {
                number: 9,
                couldGoTo: [
                    {
                        number: 1,
                        intervening: []
                    },
                    {
                        number: 5,
                        intervening: []
                    },
                    {
                        number: 6,
                        intervening: []
                    },
                    {
                        number: 7,
                        intervening: []
                    },
                    {
                        number: 3,
                        intervening: []
                    }
                ]
            },
            {
                number: 10,
                couldGoTo: []
            }

        ]
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},

]


createPieces(denominations, colours);
boardStart(startPositions, pieces, board);
//printPieces((pieces));
console.log(getinterveningSquareNumbersArray(1,1,4));



function createPieces(denominations, colours) {

    for (var i = 0; i < colours.length; i++) {
        for (var j = 0; j < denominations.length; j++) {
            piece = {colour: colours[i], denomination: denominations[j]};
            pieces.push(piece);
        }
    }
}

function boardStart(startPositions, pieces, board) {
    for (var i = 0; i < startPositions.length; i++) {
        board[startPositions[i]] = pieces[i];
        // console.log(i,pieces[i]);
    }
    //console.log(board);
}

function printPieces(pieces) {
    for (var i = 0; i < pieces.length; i++) {
        console.log(i, pieces[i]);
    }
}

function  whereCouldPieceMove(pieceNumber, squareNumber){
    var square = getSquareByNumber(squareNumber);
    var squarePiece = getSquarePiecesByNumber(square, pieceNumber);
    var couldGoToArray = getGouldGoToSquareNumbersFromSquarePiece(squarePiece);

    console.log(couldGoToArray);


    console.log("piece "+ piece
    + " in square " + square
    + " could move to square ")
}

function getSquareByNumber(number){
    for(var i = 0; i < squares.length; i++){
        if(squares[i].number === number) return squares[i];
    }
    return -1;
}

function getSquarePiecesByNumber(square, number){
    for(var i = 0; i < square.pieces.length; i++){
        if(square.pieces[i].number === number) return square.pieces[i];
    }
    return -1;
}

function getGouldGoToSquareNumbersFromSquarePiece(squarePiece){
    var arr = [];
    for(var i = 0; i < squarePiece.couldGoTo.length; i++){
        arr.push (squarePiece.couldGoTo[i].square);
    }
    return arr;
}
function getinterveningSquareNumbersArray(pieceNumber, fromSquareNumber, toSquareNumber){
    var fromSquare = getSquareByNumber(fromSquareNumber);
    var squarePiece = getSquarePiecesByNumber(fromSquare,pieceNumber);
    var couldGoTo =  getSquarePieceCouldGotoFromToSquareNumber(squarePiece, toSquareNumber);
    return couldGoTo.intervening;

}

function getSquarePieceCouldGotoFromToSquareNumber(squarePiece, toSquareNumber){
    for(var i = 0; i < squarePiece.couldGoTo.length; i++){
        if(squarePiece.couldGoTo[i].square === toSquareNumber) return squarePiece.couldGoTo[i];
    }
    return -1;
}


