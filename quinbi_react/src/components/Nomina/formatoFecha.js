function formatoFecha (fecha) {
    var month = fecha.substr(0, 3)
    var day = fecha.substr(4, 2)
    var year = fecha.substr(7,4)
    switch (month) {
        case "Jan":
            month = 1
            break;
        case "Feb":
            month = 2
            break;
        case "Mar":
            month = 3
            break;
        case "Apr":
            month = 4
            break;
        case "May":
            month = 5
            break;
        case "Jun":
            month = 6
            break;
        case "Jul":
            month = 7
            break;
        case "Aug":
            month = 8
            break;
        case "Sep":
            month = 9
            break;
        case "Oct":
            month = 10
            break;
        case "Nov":
            month = 11
            break;
        default:
            month = 12
            break;
    }
    fecha = `${day}-${month}-${year}`
    return fecha
}

export { formatoFecha };