(() => {
console.log("Running!")

const puzzleBoard = document.querySelector(".puzzle-board"),
			puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
			dropZones = document.querySelectorAll(".drop-zone");

let piecesBoard = document.querySelector(".puzzle-pieces")
let draggablePieces = piecesBoard.querySelectorAll("img")

const imageNameArray = ["topLeft", "topRight", "bottomLeft", "bottomRight"];


function switchImage() {
	console.log(this.dataset.puzzleref);

	var deletedImages = resetPuzzlePieces()
	console.log(deletedImages)
	console.log(draggablePieces)
	for (i=0; i < deletedImages.length; i++){
		piecesBoard.appendChild(deletedImages[i]);
	}

	let bgImage = `./images/backGround${this.dataset.puzzleref}.jpg`;
	puzzleBoard.style.backgroundImage = `url(${bgImage})`;
	draggablePieces.forEach((image, index) => {
		image.src = `images/${imageNameArray[index] + this.dataset.puzzleref}.jpg`
	});


}

function resetPuzzlePieces() {
	var deletedImages = []
	dropZones.forEach(zone => {
		while (zone.firstChild) {
			deletedImages.push(zone.firstChild);
  		zone.removeChild(zone.firstChild);
		}
	})
	return deletedImages
}


puzzleSelectors.forEach(button => button.addEventListener("click",switchImage));

draggablePieces.forEach(piece => {
	piece.addEventListener("dragstart", function(e) {
		console.log("dragging...");

		e.dataTransfer.setData("text/plain", this.id);
	})
})

dropZones.forEach(zone => {

	zone.addEventListener('dragover', function(e){
		e.preventDefault();
		console.log("Dragged something over me");
	});
	zone.addEventListener("drop", function(e){

		e.preventDefault();
		console.log("you droped somethig on me");

		let draggedElement = e.dataTransfer.getData("text/plain");
		console.log(draggedElement);


		if (zone.children.length < 1){
			e.target.appendChild(document.querySelector(`#${draggedElement}`));
		} else {
			console.log("Zone already has an element");
		}
	});
})

})();
