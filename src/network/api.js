import {get} from "./request";
import {post} from "./request";


//院校查询(全部)get请求
export const getschoolinfo = params => get('/allSchoolInfo',params);

//专业查询（全部）get请求
export const getspecial = params => get('/allSpecialInfo',params);

//通过id查院校
export const getschoolbyid = params => get('/schoolInfoByID',params);

//查询院校简介
export const  getschoolcontentbyid = params => get('/schoolContent',params);

//查询院校专业
export const getschoolspecial = params => get('/schoolSpecialBySchoolID',params);

//智能填报志愿接口
export const getschoolbyscore = params => get('/recommend',params);

//通过id查询专业
export const getmajorbyid = params => get('/getSpecialInfoByID',params);

//查询专业满意度
export const getmajorsat = params => get('/specialSat',params);

//通过专业id查询专业代码
export const getmajorcodebyid = params => get('/specialCode',params);

//通过学校id查询2020最低位次
export const getsclowrank2020 = params => get('/getLowerRank2020',params);

//通过学校名字查询学校满意度
export const getscsatbyname = params => get('/schoolSatisfaction',params);

//通过学校名查询2021最低位次
export const getsclowrank2021 = params => get('/schoolLowerRank',params);

//筛选学校
export const selectschool = params => get('/selectSchoolInfo',params);

//通过校名查询学校
export const getscbyname = params => get('/schoolInfo',params);

//筛选专业
export const selectmajor = params => get('/selectSpecialInfo',params);

//通过专业名查询专业
export const getmajorbyname = params => get('/getSpecialInfoByName',params);

//模糊查询问题
export const  getprobleminfo = params => get('/getAnswer',params);

//登录接口
export const getlogin = params => get('/login',params);

//注册接口
export const postreg = data => post('/register',data);