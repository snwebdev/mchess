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
//count of interviening sqaure
//interviening square
//next interviening sqaure...
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
                        interviening: []
                    },
                    {
                        square: 3,
                        interviening: [2]
                    },
                    {
                        square: 4,
                        interviening: [2, 3]
                    },
                    {
                        square: 5,
                        interviening: []
                    },
                    {
                        square: 9,
                        interviening: [5]
                    },
                    {
                        square: 13,
                        interviening: [5, 9]
                    },
                ]
            },
            {
                number: 2,
                couldGoTo: [
                    {
                        number: 6,
                        interviening: [0]
                    },
                    {
                        number: 11,
                        interviening: [6]
                    },
                    {
                        number: 16,
                        interviening: [6, 11]
                    }
                ]
            },
            {
                number: 3,
                couldGoTo: [
                    {
                        number: 7,
                        interviening: []
                    },
                    {
                        number: 10,
                        interviening: []
                    }
                ]
            },
            {
                number: 4,
                couldGoTo: [
                    {
                        number: 2,
                        interviening: []
                    },
                    {
                        number: 6,
                        interviening: []
                    },
                    {
                        number: 4,
                        interviening: []
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
                        interviening: []
                    },
                    {
                        square: 3,
                        interviening: [2]
                    },
                    {
                        square: 4,
                        interviening: [2, 3]
                    },
                    {
                        square: 5,
                        interviening: []
                    },
                    {
                        square: 9,
                        interviening: [5]
                    },
                    {
                        square: 13,
                        interviening: [5, 9]
                    },
                ]
            },
            {
                number: 7,
                couldGoTo: [
                    {
                        number: 6,
                        interviening: [0]
                    },
                    {
                        number: 11,
                        interviening: [6]
                    },
                    {
                        number: 16,
                        interviening: [6, 11]
                    }
                ]
            },
            {
                number: 8,
                couldGoTo: [
                    {
                        number: 7,
                        interviening: []
                    },
                    {
                        number: 10,
                        interviening: []
                    }
                ]
            },
            {
                number: 9,
                couldGoTo: [
                    {
                        number: 2,
                        interviening: []
                    },
                    {
                        number: 6,
                        interviening: []
                    },
                    {
                        number: 4,
                        interviening: []
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
                        interviening: []
                    },
                    {
                        square: 3,
                        interviening: []
                    },
                    {
                        square: 4,
                        interviening: [3]
                    },
                    {
                        square: 6,
                        interviening: []
                    },
                    {
                        square: 10,
                        interviening: [6]
                    },
                    {
                        square: 14,
                        interviening: [6, 10]
                    },

                ]
            },
            {
                number: 2,
                couldGoTo: [
                    {
                        number: 5,
                        interviening: [0]
                    },
                    {
                        number: 7,
                        interviening: [0]
                    },
                    {
                        number: 12,
                        interviening: [7]
                    }
                ]
            },
            {
                number: 3,
                couldGoTo: [
                    {
                        number: 12,
                        interviening: []
                    },
                    {
                        number: 5,
                        interviening: []
                    },
                    {
                        number: 10,
                        interviening: []
                    }
                ]
            },
            {
                number: 4,
                couldGoTo: [
                    {
                        number: 1,
                        interviening: []
                    },
                    {
                        number: 5,
                        interviening: []
                    },
                    {
                        number: 6,
                        interviening: []
                    },
                    {
                        number: 7,
                        interviening: []
                    },
                    {
                        number: 3,
                        interviening: []
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
                        interviening: []
                    },
                    {
                        square: 3,
                        interviening: []
                    },
                    {
                        square: 4,
                        interviening: [3]
                    },
                    {
                        square: 6,
                        interviening: []
                    },
                    {
                        square: 10,
                        interviening: [6]
                    },
                    {
                        square: 14,
                        interviening: [6, 10]
                    },

                ]
            },
            {
                number: 7,
                couldGoTo: [
                    {
                        number: 5,
                        interviening: [0]
                    },
                    {
                        number: 7,
                        interviening: [0]
                    },
                    {
                        number: 12,
                        interviening: [7]
                    }
                ]
            },
            {
                number: 8,
                couldGoTo: [
                    {
                        number: 12,
                        interviening: []
                    },
                    {
                        number: 5,
                        interviening: []
                    },
                    {
                        number: 10,
                        interviening: []
                    }
                ]
            },
            {
                number: 9,
                couldGoTo: [
                    {
                        number: 1,
                        interviening: []
                    },
                    {
                        number: 5,
                        interviening: []
                    },
                    {
                        number: 6,
                        interviening: []
                    },
                    {
                        number: 7,
                        interviening: []
                    },
                    {
                        number: 3,
                        interviening: []
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
                        interviening: [2]
                    },
                    {
                        square: 2,
                        interviening: []
                    },
                    {
                        square: 4,
                        interviening: [3]
                    },
                    {
                        square: 7,
                        interviening: []
                    },
                    {
                        square: 11,
                        interviening: [7]
                    },
                    {
                        square: 15,
                        interviening: [7, 11]
                    },

                ]
            },
            {
                number: 2,
                couldGoTo: [
                    {
                        number: 6,
                        interviening: [0]
                    },
                    {
                        number: 9,
                        interviening: [6]
                    },
                    {
                        number: 8,
                        interviening: []
                    }
                ]
            },
            {
                number: 3,
                couldGoTo: [
                    {
                        number: 5,
                        interviening: []
                    },
                    {
                        number: 10,
                        interviening: []
                    },
                    {
                        number: 12,
                        interviening: []
                    }
                ]
            },
            {
                number: 4,
                couldGoTo: [
                    {
                        number: 2,
                        interviening: []
                    },
                    {
                        number: 6,
                        interviening: []
                    },
                    {
                        number: 7,
                        interviening: []
                    },
                    {
                        number: 8,
                        interviening: []
                    },
                    {
                        number: 4,
                        interviening: []
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
                        interviening: []
                    },
                    {
                        square: 3,
                        interviening: []
                    },
                    {
                        square: 4,
                        interviening: [3]
                    },
                    {
                        square: 6,
                        interviening: []
                    },
                    {
                        square: 10,
                        interviening: [6]
                    },
                    {
                        square: 14,
                        interviening: [6, 10]
                    },

                ]
            },
            {
                number: 7,
                couldGoTo: [
                    {
                        number: 5,
                        interviening: [0]
                    },
                    {
                        number: 7,
                        interviening: [0]
                    },
                    {
                        number: 12,
                        interviening: [7]
                    }
                ]
            },
            {
                number: 8,
                couldGoTo: [
                    {
                        number: 12,
                        interviening: []
                    },
                    {
                        number: 5,
                        interviening: []
                    },
                    {
                        number: 10,
                        interviening: []
                    }
                ]
            },
            {
                number: 9,
                couldGoTo: [
                    {
                        number: 1,
                        interviening: []
                    },
                    {
                        number: 5,
                        interviening: []
                    },
                    {
                        number: 6,
                        interviening: []
                    },
                    {
                        number: 7,
                        interviening: []
                    },
                    {
                        number: 3,
                        interviening: []
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
console.log(getIntervieningSquareNumbersArray(1,1,4));



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
function getIntervieningSquareNumbersArray(pieceNumber, fromSquareNumber, toSquareNumber){
    var fromSquare = getSquareByNumber(fromSquareNumber);
    var squarePiece = getSquarePiecesByNumber(fromSquare,pieceNumber);
    var couldGoTo =  getSquarePieceCouldGotoFromToSquareNumber(squarePiece, toSquareNumber);
    return couldGoTo.interviening;

}

function getSquarePieceCouldGotoFromToSquareNumber(squarePiece, toSquareNumber){
    for(var i = 0; i < squarePiece.couldGoTo.length; i++){
        if(squarePiece.couldGoTo[i].square === toSquareNumber) return squarePiece.couldGoTo[i];
    }
    return -1;
}


