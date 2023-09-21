
import dayjs from "dayjs";

export default function getDate(value) {

  return dayjs(value).format('M月D日')

}



export function getDateDiff(value1,value2,parms) {
  // console.log(value1,value2,parms);
  // console.log(value[1],value[0]);

  return dayjs(value1).diff(value2,parms)
}