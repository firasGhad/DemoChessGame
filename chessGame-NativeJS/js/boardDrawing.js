 const chessGameDemo = document.addEventListener("DOMContentLoaded", () => {
  //  import {chessBoards} from './board';
  //      const chessBoard = chessBoards;

    const chessBoard = document.createElement("div");
    chessBoard.id = "chessboard";
    document.body.appendChild(chessBoard);
    
    //function to draw the chess board
    (async () => {

     let chessItem = document.createElement('div');
     chessItem.classList.add('item');
     chessItem.setAttribute('draggable',"true");
     chessItem.innerHTML="&#9820;"

      let idAttr=0, currTileId, possibleDistanceMoves, tiles=[], starterId;
      //get allowed moves distance from server
      await fetch('http://localhost:3000/possible_distance_moves').then(res=>res.json()).then(data => possibleDistanceMoves =data.possibleDistanceMoves)
      for (let i = 1; i <= 8; i++) {//rows
        let colorClass, tile;
        for (let j = 1; j <= 8; j++) {//columns
          (i+j) %2 == 0 ? colorClass ="black" : colorClass ="white";
          tile = document.createElement("div");
          tile.classList.add(colorClass);
         
          if(i==4 && j ==4){
            currClass = colorClass;
            tile.appendChild(chessItem);

          document.getElementById("chessboard").appendChild(tile);
          currTileId=idAttr;
          const itemMove = document.querySelector('.item')
       
          itemMove.addEventListener('dragstart', dragStart)
          itemMove.addEventListener('dragend', dragEnd)
          }
          tiles.push({id: idAttr, class: colorClass})
          tile.setAttribute("id", idAttr++);
          document.getElementById("chessboard").appendChild(tile);
          tileId = document.querySelector('id')
          tile.addEventListener('drop', dragDrop);
          tile.addEventListener('dragover', dragOver);
          tile.addEventListener('dragenter', dragEnter);
          tile.addEventListener('dragleave', dragLeave);

        }
      }

      const getAvailabeMovesIds = ()=>{
        let AvMoves = possibleDistanceMoves.map(dis => starterId - dis).filter(id => id > 0);
        AvMoves= AvMoves.concat(possibleDistanceMoves.map(dis => starterId + dis).filter(id => id < 64));
        return AvMoves;
      }

      let AvMovesId=[];
      function dragStart(){
        setTimeout(() => this.className = 'invisible', 0);
        starterId = parseInt(this.parentElement.id);
        AvMovesId  = getAvailabeMovesIds()
        AvMovesId.forEach((avTile)=> {
         document.getElementById(avTile).className='hovered'
        })

      }

      function dragEnd(e){
        this.className='item';
        AvMovesId.forEach((avTile)=> {
         document.getElementById(avTile).className=tiles.filter(tile => tile.id == avTile)[0].class;
        })
      }

      function dragDrop(e){
        currTileId=parseInt(this.id);
        if(AvMovesId.includes(currTileId)){
          this.append(chessItem);
        }
      }
       
      function dragOver(e){
        e.preventDefault();
        
       } 
        function dragEnter(e){
        e.preventDefault();
       }  
       function dragLeave(e){
        e.preventDefault();
       }
      
    })();


  });

