
document.addEventListener('DOMContentLoaded', () => {

//function init() {
    var arr = ["Яблоко", "Апельсин", "Груша"]

    console.log("(массив:" + arr + ")");

    arr.sort(() => {

        return 0.5 - Math.random();

    }).reverse().forEach((item, i) => {
        console.log(item + ": " + i + " (массив:" + arr + ")" + " " + arr[i]);
    });


    function keyHandler(event) {
       // if (gameInFocus) {
            console.log(event.key, event.code);

            /*switch (event.code) {
                case 'ArrowLeft':
                    moveFigure(gameBoard.currentPosition - 1);
                    event.preventDefault();
                    break;
                case 'ArrowRight':
                    moveFigure(gameBoard.currentPosition + 1);
                    event.preventDefault();
                    break;
                case 'ArrowUp':
                    rotateFigure();
                    event.preventDefault();
                    break;
                case 'ArrowDown':
                    moveFigure(gameBoard.currentPosition + BOARDWIDTH, true);
                    event.preventDefault();
                    break;
                case 'KeyP':
                    pauseHandler();
                    event.preventDefault();
                    break;
            }*/
       // }
    }


    document.addEventListener('keydown', keyHandler);

//}//

//window.onload = init;

});