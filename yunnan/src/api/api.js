import axios from "axios";
let api = "http://vue.thexxdd.cn"
    // 轮播的请求
export const banner = () => {
        return axios.get(api + "/tourism")
    }
    // 攻略的请求
export const homes = (page) => {
        return axios.get(api + "/homes/?page=" + page)
    }
    // 攻略的详情页
export const goods = (goodsId) => {
        return axios.get(api + "/goods/" + goodsId)
    }
    // 语音合成
export const speeched = (params) => {
        return axios.post((api + "/speech/"), params)
    }
    // 搜索
export const searchData = (params) => {
        return axios.get(api + "/goods/?search=" + params)
    }
    // 发送验证码
export const getcode = (params) => {
        return axios.post((api + "/codes/"), params)
    }
    // 注册
export const register = (params) => {
        return axios.post((api + "/users/"), params)
    }
    // 登录
export const login = (params) => {
        return axios.post((api + "/login/"), params)
    }
    // 判断攻略是否收藏
export const getcoll = (goodsId) => {
        return axios.get(api + "/collect/ " + goodsId + "/")
    }
    // 收藏
export const collect = (goods) => {
        return axios.post((api + "/collect/"), goods)
    }
    //取消收藏
export const delectCollect = (goods_id) => {
        return axios.delete(api + "/collect/" + goods_id + "/")
    }
    //获取收藏列表
export const listData = () => {
    return axios.get(api + "/collect/")
}