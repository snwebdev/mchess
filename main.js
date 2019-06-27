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


squares = [
    {
        squareNumber: 1,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 2,
                        intervening: []
                    },
                    {
                        squareNumber: 3,
                        intervening: [2]
                    },
                    {
                        squareNumber: 4,
                        intervening: [2,3]
                    }, {
                        squareNumber: 5,
                        intervening: []
                    },
                    {
                        squareNumber: 9,
                        intervening: [5]
                    },
                    {
                        squareNumber: 13,
                        intervening: [5,9]
                    }
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 6,
                        intervening: []
                    },
                    {
                        squareNumber: 11,
                        intervening: [6]
                    },
                    {
                        squareNumber: 16,
                        intervening: [6,11]
                    }
                ]
            },
            {
                pieceNumber: 3,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    },
                    {
                        squareNumber: 10,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 2,
                        intervening: []
                    },
                    {
                        squareNumber: 5,
                        intervening: []
                    },
                    {
                        squareNumber: 6,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 5,
                destinations: []
            },
            {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 2,
                        intervening: []
                    },
                    {
                        squareNumber: 3,
                        intervening: [2]
                    },
                    {
                        squareNumber: 4,
                        intervening: [2,3]
                    }, {
                        squareNumber: 5,
                        intervening: []
                    },
                    {
                        squareNumber: 9,
                        intervening: [5]
                    },
                    {
                        squareNumber: 13,
                        intervening: [5,9]
                    }
                ]
            },
            {
                pieceNumber: 7,
                destinations: [
                    {
                        squareNumber: 6,
                        intervening: []
                    },
                    {
                        squareNumber: 11,
                        intervening: [6]
                    },
                    {
                        squareNumber: 16,
                        intervening: [6,11]
                    }
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    },
                    {
                        squareNumber: 10,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 2,
                        intervening: []
                    },
                    {
                        squareNumber: 5,
                        intervening: []
                    },
                    {
                        squareNumber: 6,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10,
                destinations: []
            },
        ]
    },
    {
        squareNumber: 2,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    },
                    {
                        squareNumber: 3,
                        intervening: []
                    },
                    {
                        squareNumber: 4,
                        intervening: [3]
                    }, {
                        squareNumber: 6,
                        intervening: []
                    },
                    {
                        squareNumber: 10,
                        intervening: [6]
                    },
                    {
                        squareNumber: 14,
                        intervening: [6,10]
                    }
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 5,
                        intervening: []
                    },
                    {
                        squareNumber: 7,
                        intervening: []
                    },
                    {
                        squareNumber: 12,
                        intervening: [7]
                    }
                ]
            },
            {
                pieceNumber: 3,
                destinations: [
                    {
                        squareNumber: 9,
                        intervening: []
                    },
                    {
                        squareNumber: 11,
                        intervening: []
                    },
                    {
                        squareNumber: 12,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    },
                    {
                        squareNumber: 5,
                        intervening: []
                    },
                    {
                        squareNumber: 6,
                        intervening: []
                    },
                    {
                        squareNumber: 7,
                        intervening: []
                    },
                    {
                        squareNumber: 3,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 5

            },
            {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    },
                    {
                        squareNumber: 3,
                        intervening: []
                    },
                    {
                        squareNumber: 4,
                        intervening: [3]
                    }, {
                        squareNumber: 6,
                        intervening: []
                    },
                    {
                        squareNumber: 10,
                        intervening: [6]
                    },
                    {
                        squareNumber: 14,
                        intervening: [6,10]
                    }
                ]
            },
            {
                pieceNumber: 7,
                destinations: [
                    {
                        squareNumber: 5,
                        intervening: []
                    },
                    {
                        squareNumber: 7,
                        intervening: []
                    },
                    {
                        squareNumber: 12,
                        intervening: [7]
                    }
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 9,
                        intervening: []
                    },
                    {
                        squareNumber: 11,
                        intervening: []
                    },
                    {
                        squareNumber: 12,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    },
                    {
                        squareNumber: 5,
                        intervening: []
                    },
                    {
                        squareNumber: 6,
                        intervening: []
                    },
                    {
                        squareNumber: 7,
                        intervening: []
                    },
                    {
                        squareNumber: 3,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10

            }
        ]
    },
    {
        squareNumber: 3,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 5,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            }
        ]
    },
    {
        squareNumber: 4,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: [2,3]
                    },
                    {
                        squareNumber: 2,
                        intervening: [3]
                    },
                    {
                        squareNumber: 3,
                        intervening: []
                    },
                    {
                        squareNumber: 8,
                        intervening: []
                    },
                    {
                        squareNumber: 12,
                        intervening: [8]
                    },
                    {
                        squareNumber: 16,
                        intervening: [8,12]
                    },
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    },
                    {
                        squareNumber: 10,
                        intervening: [7]
                    },
                    {
                        squareNumber: 13,
                        intervening: [7,10]
                    },
                ]
            },
            {
                pieceNumber: 3,
                destinations: [
                    {
                        squareNumber: 6,
                        intervening: []
                    },
                    {
                        squareNumber: 11,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    },
                    {
                        squareNumber: 7,
                        intervening: []
                    },
                    {
                        squareNumber: 8,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 5
            },
            {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: [2,3]
                    },
                    {
                        squareNumber: 2,
                        intervening: [3]
                    },
                    {
                        squareNumber: 3,
                        intervening: []
                    },
                    {
                        squareNumber: 8,
                        intervening: []
                    },
                    {
                        squareNumber: 12,
                        intervening: [8]
                    },
                    {
                        squareNumber: 16,
                        intervening: [8,12]
                    },
                ]
            },
            {
                pieceNumber: 7,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    },
                    {
                        squareNumber: 10,
                        intervening: [7]
                    },
                    {
                        squareNumber: 13,
                        intervening: [7,10]
                    },
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 6,
                        intervening: []
                    },
                    {
                        squareNumber: 11,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    },
                    {
                        squareNumber: 7,
                        intervening: []
                    },
                    {
                        squareNumber: 8,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10
            }
        ]
    },
    {
        squareNumber: 5,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    },
                    {
                        squareNumber: 2,
                        intervening: []
                    },
                    {
                        squareNumber: 6,
                        intervening: []
                    },
                    {
                        squareNumber: 10,
                        intervening: []
                    },
                    {
                        squareNumber: 9,
                        intervening: []
                    },
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 2,
                        intervening: []
                    },
                    {
                        squareNumber: 10,
                        intervening: []
                    },
                    {
                        squareNumber: 15,
                        intervening: [10]
                    },
                ]
            },
            {
                pieceNumber: 3,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    },
                    {
                        squareNumber: 11,
                        intervening: []
                    },
                    {
                        squareNumber: 14,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    },
                    {
                        squareNumber: 2,
                        intervening: []
                    },
                    {
                        squareNumber: 6,
                        intervening: []
                    },
                    {
                        squareNumber: 10,
                        intervening: []
                    },
                    {
                        squareNumber: 9,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 5,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    },{
                        squareNumber: 2,
                        ifCapturing: 2
                    }
                ]
            },    {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    },
                    {
                        squareNumber: 2,
                        intervening: []
                    },
                    {
                        squareNumber: 6,
                        intervening: []
                    },
                    {
                        squareNumber: 10,
                        intervening: []
                    },
                    {
                        squareNumber: 9,
                        intervening: []
                    },
                ]
            },
            {
                pieceNumber: 7,
                destinations: [
                    {
                        squareNumber: 2,
                        intervening: []
                    },
                    {
                        squareNumber: 10,
                        intervening: []
                    },
                    {
                        squareNumber: 15,
                        intervening: [10]
                    },
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    },
                    {
                        squareNumber: 11,
                        intervening: []
                    },
                    {
                        squareNumber: 14,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    },
                    {
                        squareNumber: 2,
                        intervening: []
                    },
                    {
                        squareNumber: 6,
                        intervening: []
                    },
                    {
                        squareNumber: 10,
                        intervening: []
                    },
                    {
                        squareNumber: 9,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10,
                destinations: [
                    {
                        squareNumber: 9,
                        intervening: []
                    },
                    {
                        squareNumber: 10,
                        ifCapturing: 10
                    }
                ]
            },
        ]
    },
    {
        squareNumber:1,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 5,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            }
        ]
    },
    {
        squareNumber:1,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 5,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            }
        ]
    },
    {
        squareNumber:1,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 5,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            }
        ]
    },
    {
        squareNumber:1,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 5,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            }
        ]
    },
    {
        squareNumber:1,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 5,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            }
        ]
    },
    {
        squareNumber:1,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 5,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            }
        ]
    },
    {
        squareNumber:1,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 5,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            }
        ]
    },
    {
        squareNumber:1,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 5,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            }
        ]
    },
    {
        squareNumber:1,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 5,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            }
        ]
    },
    {
        squareNumber:1,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 5,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            }
        ]
    },
    {
        squareNumber:1,
        pieces:[
            {
                pieceNumber: 1,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 2,
                destinations: [
                    {
                        squareNumber: 3,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 4,
                destinations: [
                    {
                        squareNumber: 5,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 6,
                destinations: [
                    {
                        squareNumber: 7,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 8,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 9,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            },
            {
                pieceNumber: 10,
                destinations: [
                    {
                        squareNumber: 1,
                        intervening: []
                    }
                ]
            }
        ]
    }

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


