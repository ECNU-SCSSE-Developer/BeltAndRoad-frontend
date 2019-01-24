import axios from 'axios';
import {Message} from 'iview';
import router from '../router'
const handle = {};

const http = axios.create({
	baseURL: 'https://timeline.proadap.xyz',
	timeout: process.env.httpTimeout,
	headers:{'authorization':window.localStorage.getItem('token')},
});

handle.get = (url, param, callback) => {
	http.get(url, {params:param}).then(res => {
		if (res.status === 200) {
			callback && callback(res.data);
		}
		if(res.data.statusCode != 200){
			Message.error(res.data.message);
		}
	}).catch((err) => {
		if(err && err.response.status === 401){
			Message.info('登录状态失效，请重新登录');
			window.localStorage.removeItem('token');
			router.push({
				name:'login'
			})
		}else{
			Message.error("网络异常，请求失败");
		}
	})
}


handle.post = (url, param, callback) => {
	http.post(url, param,{headers:{'authorization':window.localStorage.getItem('token')}}).then(res => {
		if (res.status === 200) {
			callback && callback(res.data);
		}
		if(res.data.statusCode != 200){
			Message.error(res.data.message);
		}
	}).catch((err) => {
		if(err && err.response.status === 401){
			Message.info('登录状态失效，请重新登录');
			window.localStorage.removeItem('token');
			router.push({
				name:'login'
			})
		}else{
			Message.error("网络异常，请求失败");
		}
	})
}

export default handle;