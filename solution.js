{
    init: function(elevators, floors) {
        let elevator = elevators[0]; // Let's use the first elevator
        let floorCallQueue = [];
        
        initFloorButtonsListeners();
        
        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", () => {
            log('elevator is idle');
        });
        
        elevator.on('floor_button_pressed ', floorNum => {
            elevator.goToFloor(floorNum, true);
        });
        
        elevator.on("stopped_at_floor", floorNum => {
        });
        
        function log(message) {
            console.log.apply(message, arguments);
        }
        
        function initFloorButtonsListeners() {
            for (let i = 0; i < floors.length; i++) {
                let floor = floors[i];
                floor.on('up_button_pressed ', () => {
                    //floorCallQueue.push({floorNum: floor.floorNum(), direction: 'up'});
                    elevator.goToFloor(floor.floorNum());
                });
                floor.on('down_button_pressed ', () => {
                    //floorCallQueue.push({floorNum: floor.floorNum(), direction: 'down'});
                    elevator.goToFloor(floor.floorNum());
                });
            }
        }
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
