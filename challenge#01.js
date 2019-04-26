{
    init: (elevators, floors) => {
        let elevator = elevators[0] // Let's use the first elevator
        let firstFloor = floors[0];
        let lastFloor = floors[2];

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", () => {
            // let's go to the middle of the building
            let midleFloor = Math.floor(floors.length / 2);
            elevator.goToFloor(midleFloor);
        });
        
        elevator.on('floor_button_pressed', floorNum => {
            elevator.goToFloor(floorNum);
        })
        
        firstFloor.on("up_button_pressed", () => {
            // Maybe tell an elevator to go to this floor?
            elevator.goToFloor(firstFloor.floorNum());
        })
        
        lastFloor.on("down_button_pressed", () => {
            // Maybe tell an elevator to go to this floor?
            elevator.goToFloor(lastFloor.floorNum());
        })
    },
    update: (dt, elevators, floors) => {
        // We normally don't need to do anything here
    }
}
