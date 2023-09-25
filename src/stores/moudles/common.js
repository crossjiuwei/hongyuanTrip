import {defineStore} from 'pinia'
import dayjs1 from '../../utils/date'

export default defineStore('comomon',{
  state:()=>({
    nowDate: new Date(),
    passDate:new Date().setDate(new Date().getDate()+1),
    nowdayjs : '',
    passdayjs : '',
    latitude:'',
    longitude:''
  }),

  actions:{



    gettime() {


     this.nowdayjs =dayjs1(this.nowDate)
     this.passdayjs =dayjs1(this.passDate)

    }
  }
})