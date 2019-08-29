 var arr = [];
            var wins = 0;
            var losses = 0;
            var maxloss = 9;
            var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            // for (i = 0; i < computerChoices.length; i++) {

            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            var winBox = document.getElementById("wins");

            function update() {
                document.getElementById('wins').innerHTML = wins;
                document.getElementById('losses').innerHTML = losses;
                document.getElementById('maxloss').innerHTML = maxloss;

            }

            document.onkeyup = function (event) {

                // Determines which key was pressed.
                var userGuess = event.key;
                // alert(userGuess)
                arr.push(userGuess)
                console.log(arr)
                document.getElementById('userguess').innerHTML = arr
                // impliment to stop repeating 
                // var down = false;
                // document.addEventListener('keydown', function () {
                //     if (down) return;
                //     down = true;

                //     // your magic code here
                // }, false);

                // document.addEventListener('keyup', function () {
                //     down = false;
                // }, false);





                if (userGuess == computerGuess) {
                    wins++;

                    alert('you have won' + wins + 'times');

                    update()

                }
                else if (maxloss == 0) {
                    alert("Reload! you've lost!" + " the answer is " + computerGuess)
                    // losses++; 
                    computerGuess()
                }

                else {
                    losses++; // losses++;    losses += 1
                    maxloss--;
                    alert('incorrect, you tried ' + losses + ' times, and have ' + maxloss + ' remaining')
                    update()

                }






                // }
            };
            update();
