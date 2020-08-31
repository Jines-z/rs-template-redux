// 实例代码，在真实场景中一般不需要把域名写死
const domain = __ENV__ === 'production' ? 'https://www.easy-mock.com' : ''

export default {
    LOGIN: `${domain}/mock/5c4989d06498891c5bff820d/rsk/login`
}
