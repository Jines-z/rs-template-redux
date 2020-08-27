// 实例代码，在真实场景中一般不需要把域名写死
const url = __ENV__ === 'production' ? 'http://rap2.taobao.org:38080' : ''

export default {
    LOGIN: `${url}/app/mock/265116/login`
}
