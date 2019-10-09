const convertTime = time =>{
    var date = new Date();
    date.setTime(time*1000);
    var converted_time = ("0" + date.getHours()).substr(-2) + ":" + ("0" + date.getMinutes()).substr(-2);
    return converted_time;
}

export default convertTime;