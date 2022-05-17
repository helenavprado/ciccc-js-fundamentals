function getSleepHours(day) {
    switch (day) {
        case "monday":
            return 7
            break;
        case "tuesday":
            return 7
            break;
        case "wednesday":
            return 7
            break;
        case "thursday":
            return 8
            break;
        case "friday":
            return 7
            break;
        case "saturday":
            return 5
            break;
        case "sunday":
            return 6
            break;
            
    }
}

function getActualSleepHours() {
    return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("saturday") + getSleepHours("friday") + getSleepHours("sunday")
}

const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
}

const calculateSleepDept = () => {
    return getIdealSleepHours() - getActualSleepHours();
}

console.log(calculateSleepDept());