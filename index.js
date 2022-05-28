/*function superbowlWin(record) {
    if(record.result === "W") {
        return record.year
    } //else {
        //return undefined;
    }
//}

record.find(superbowlWin);*/

function superbowlWin(record){

    const superbowlWin = record.find(record => record.result === "W");
    if (superbowlWin) {
        return superbowlWin.year
    } else {
        return undefined;
    }
}    