import axios from 'axios';

const baseURL = process.env.NODE_ENV == "development" ? "/api" : ""

const instance = axios.create({
  baseURL,
  timeout: 10000
});

const xhr = {
  get(url, data, config) {
    return new Promise((resolve, reject) => {
      instance.get(url, {params: data}, config).then(res => {
        resolve(res.data)
      }).catch(err =>{
        reject(err)
      })
    })
  },
  fetch(url, data, config, method) {
    return new Promise((resolve, reject) => {
      instance[method](url, data, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url, data, config) {
    return this.fetch(url, data, config, "post")
  },
  put(url, data, config) {
    return this.fetch(url, data, config, "put")
  },
  delete(url, data, config) {
    return this.fetch(url, data, config, "delete")
  },
};

export default xhr;
