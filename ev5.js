{
    init: function(elevators, floors) {
        var max_floors = floors.length;
        console.log(max_floors);
        elevators.forEach(function(elevator, index){
            elevator.on("idle", function() {
                var ran = Math.floor(Math.random(10)*10)%max_floors;
                console.log(ran);
                elevator.goToFloor(ran);
            })
            elevator.on("floor_button_pressed", function(floorNum) {
                if (elevator.destinationQueue.indexOf(floorNum) == -1) {
                    elevator.goToFloor(floorNum);
                }
            })
        })
    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}
