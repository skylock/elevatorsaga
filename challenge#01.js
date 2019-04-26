{
    init: (elevators, floors) => {
        let elevator = elevators[0] // Let's use the first elevator
        let midleFloor = Math.floor(floors.length / 2);

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", () => {
            // let's go to the middle of the building
            if(elevator.currentFloor() !== 0)
                elevator.goToFloor(midleFloor);         
        });

        elevator.on('floor_button_pressed', floorNum => {
            elevator.goToFloor(floorNum);
        })
        
        for(let i=0; i < floors.length; i++) {
            floors[i].on("up_button_pressed", () => {
                elevator.goToFloor(floors[i].floorNum());
            })
        }
    },
        update: (dt, elevators, floors) => {
            // We normally don't need to do anything here
        }
}
