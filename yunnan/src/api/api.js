import axios from "axios";
let api = "http://vue.thexxdd.cn"
    // 轮播的请求
export const banner = () => {
        return axios.get(api + "/tourism")
    }
    // 攻略的请求
export const homes = () => {
    return axios.get(api + "/homes/")
}