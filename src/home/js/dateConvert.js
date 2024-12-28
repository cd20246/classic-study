import dayjs from "dayjs";

/**
 * 计算积日
 * @param {*} x 第y年的第x个节气 从0开始算
 * @param {*} y 第y年(从1900年开始算起)
 * @returns 积日
 */
function _jiri(x,y){
    let f = 365.242*(y-1900) + 6.2 + 15.22*x -1.9*Math.sin(0.262*x);
    return f;
}

/**
 * 计算第y年的第x个节气是几月几日
 * @param {*} x 第y年的第x个节气 从0开始算
 * @param {*} y 第y年(从1900年开始算起)
 * @returns 返回公历日期 yyyy-mm-dd
 */
export function resolveJiri(x,y){
    // todo 限定y在1900~2100之间

    const f = Math.floor(_jiri(x,y));
    const date1 = dayjs("1900-01-01");
    const date2 = date1.add(f-1,"day");
    return date2;
}

/**
 * 计算从1900年开始的第m个朔日的累积天数
 * @param {*} m 从0开始计数
 * @returns 
 */
function _shuori(m){
    let M = 1.6 + 29.5306*m + 0.4*Math.sin(1-0.45058*m);
    return M;
}

/**
 * 计算从1900年开始的第m个朔日的日期
 * @param {*} m 从0开始计数
 * @returns 
 */
export function resolveShuori(m){
    const f = Math.floor(_shuori(m));
    const date1 = dayjs("1900-01-01");
    const date2 = date1.add(f-1,"day");
    return date2;
}

/**
 * 获取离某个日期最近的上一个朔日的索引
 * @param {*} date dayjs("yyyy-mm-dd");
 */
function _get_last_shuori_index(date){
    const startDate = dayjs("1900-01-01");
    const diffDays = Math.abs(startDate.diff(date,'day')) + 1;
    let m1 = Math.floor(diffDays/29.5306);
    if(m1>0) m1 = m1 - 1;
    while (_shuori(m1) < diffDays){
        m1 = m1 + 1
    }
    if(m1>0) m1 = m1 - 1;
    return m1;
}

/**
 * 获取离某个日期最近的上一个朔日的日期
 * @param {*} date dayjs("yyyy-mm-dd");
 */
export function get_last_shuori(date){
    const m1 = _get_last_shuori_index(date);
    const date1 = resolveShuori(m1);
    return date1;
}

/**
 * 输入公历日期，输出对应的农历月份
 * 1）找到该公历年份的冬至日期
 * 2）如果该公历日期小于冬至日期，则找到上一年冬至日期，如果大于则找下一年冬至日期，等于则对应11月
 * 3）计算两个冬至日期之间的朔日，如果有13个朔日，则为闰年，否则为平年
 * 4）计算两个冬至日期之间的中气，如果为闰年时则找到一个没有中气的月份，为上一月的闰月
 * 5）根据4、5两步获得了每个农历月的起始和结束公历日期，与输入的日期比对获得该日期对应的农历月
 */
/**
 * 获取公历日期对应的农历月份，1~12， 处在闰月在置为对应月份的负数
 * @param {*} date date dayjs("yyyy-mm-dd");
 */
export function get_lunar_month(date){
    const y1 = date.year();
    if(year>=2100 || year<=1900){}
    const dz1 = resolveJiri(23,year);
    let dz2 = -1;
    if(dz1.isAfter(date)){
        dz2 = resolveJiri(23,year - 1);



        
    }
    else if(dz1.isBefore(date)){
        dz2 = resolveJiri(23,year + 1);
    }
    else {
        return 11;
    }

}



export function test(){
    const date = dayjs("2024-12-23");
    // const startDate = dayjs("1900-01-01");
    // const diffDays = Math.abs(startDate.diff(date,'day')) + 1;
    // console.log(diffDays)  
    console.log(get_last_shuori(date))
}


