import config from '../config'
import axios from 'axios'
import { resolveArguement } from './resolve'

let pageCount = 10;
export function getActivityListShow() {
    let argObj = resolveArguement(arguments),
        currentN = argObj.currentN ? argObj.currentN : 1;
    pageCount = argObj.pageCount ? parseInt(argObj.pageCount) : pageCount;
    return (dispatch) => {
        axios({
                method: 'post',
                url: config.serverURL + 'hera/v1/activities/list',
                data: {
                    "startTime": argObj.startTime ? argObj.startTime : "",
                    "endTime": argObj.endTime ? argObj.endTime : "",
                    "orderBy": "_id",
                    "IsDesc": true,
                    "offsetHead": (currentN - 1) * pageCount,
                    "offsetTail": currentN * pageCount,
                    "keywords": argObj.keywords ? argObj.keywords : "",
                    "where": {
                        "status": argObj.status ? argObj.status : "",
                        "region": argObj.region ? [argObj.region] : [],
                    }

                },
                headers: {
                    "Content-Type": "application/json",
                    "X-Tuso-Authentication-Token": localStorage.getItem('token'),
                    "X-Tuso-Device-Token": config.deviceToken,
                },
            })
            .then((res) => {
                if (res.status == 200) {
                    dispatch({
                        type: 'GETACTIVITYLISTSHOW',
                        data: res.data.data
                    })
                }
            })
    }
}

export function addActivityList(data) {
    return new Promise((resolve, rej) => {
        axios({
                method: 'post',
                url: config.serverURL + 'hera/v1/activities',
                data: [data],
                headers: {
                    "Content-Type": "application/json",
                    "X-Tuso-Authentication-Token": localStorage.getItem('token'),
                    "X-Tuso-Device-Token": config.deviceToken,
                },
            })
            .then((res) => {
                if (res.status == 200) {
                    if (res.data.data) {
                        resolve(res.data.data)
                    } else {
                        resolve(res.data)
                    }

                }
            })
    })
}

export function deleteActivity(data) {
    return new Promise((resolve, rej) => {
        axios({
                method: 'delete',
                url: config.serverURL + 'hera/v1/activities',
                data: data,
                headers: {
                    "Content-Type": "application/json",
                    "X-Tuso-Authentication-Token": localStorage.getItem('token'),
                    "X-Tuso-Device-Token": config.deviceToken,
                },
            })
            .then((res) => {
                if (res.status == 200) {
                    resolve(res.data.data)
                }
            })
    })
}

export function viewMood(id) {
    return (dispatch) => {
        axios({
                method: 'post',
                url: config.serverURL + 'hera/v1/moods/view',
                data: [id],
                headers: {
                    "Content-Type": "application/json",
                    "X-Tuso-Authentication-Token": localStorage.getItem('token'),
                    "X-Tuso-Device-Token": config.deviceToken,
                },
            })
            .then((res) => {
                if (res.status == 200) {
                    dispatch({
                        type: 'VIEWMOOD',
                        data: res.data.data[0]
                    })
                }
            })
    }
}

export function modifyActivity(data) {
    return new Promise((resolve, rej) => {
        axios({
                method: 'put',
                url: config.serverURL + 'hera/v1/activities',
                data: data.length >= 1 ? data : [data],
                headers: {
                    "Content-Type": "application/json",
                    "X-Tuso-Authentication-Token": localStorage.getItem('token'),
                    "X-Tuso-Device-Token": config.deviceToken,
                },
            })
            .then((res) => {
                if (res.status == 200) {
                    resolve(res.data.data)
                }
            })
    })
}

export function uploadActivityImg(file) {
    console.log(file)
    return new Promise((resolve, rej) => {
        axios({
                method: 'post',
                url: config.serverURL + 'hera/v1/activities/upload',
                data: file,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "X-Tuso-Authentication-Token": localStorage.getItem('token'),
                    "X-Tuso-Device-Token": config.deviceToken,
                },
            })
            .then((res) => {
                if (res.status == 200) {
                    resolve(res.data)
                }
            })
    })
}