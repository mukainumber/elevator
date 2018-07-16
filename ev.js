{
    init: function(elevators, floors) {
        //var elevator = elevators[0]; // Let's use the first elevator
        var max_floors = 3;
        elevators.forEach(function(elevator, floors){

            elevator.on("idle", function() {
                if (elevator.currentFloor() != 0){
                    elevator.goToFloor(0);
                }
                else{
                    elevator.goToFloor(max_floors);
                }
            })

            elevator.on("floor_button_pressed", function(floorNum) {
                if (elevator.destinationQueue.indexOf(floorNum) == -1) {
                    elevator.goToFloor(floorNum); 
                }
                console.log("bbbb");
            })

            elevator.on("passing_floor", function(floorNum, direction) {
                if(elevator.getPressedFloors().length > 0 && elevator.getPressedFloors().indexOf(floorNum) != -1 && elevator.loadFactor() < 1) {
                    elevator.goToFloor(floorNum, true);
                    console.log("aaaaa");
                }
                
            })

        });
    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}
