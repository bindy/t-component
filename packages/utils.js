// 判断参数是否是其中之一
export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}


export function uuid() {
    return "" + 'xxxx-xxxx-xxxx'.replace(/x/g, function () { return ((Math.random() * 16) | (0 & 0x3)).toString(16); });
  }

const userAgent = window.navigator.userAgent.toLowerCase();
class DeviceDetector {
  
  constructor() {
    this.windows = this.find("windows");
    // this.ipod = this.find("ipod");
    this.ipad = this.find("ipad") ;
    this.iphone = !this.windows && this.find("iphone");
    this.dingding = this.find("dingtalk");
    this.wechat = this.find("micromessenger");
    this.wechatMiniApp = this.find("miniprogram");
    this.ios = this.iphone || this.ipad;
    this.android = !this.windows && this.find("android");
    this.androidPhone = this.android && this.find("mobile");
    this.mobile = this.androidPhone || this.iphone

  }

  getType(){
    return this.windows? 'PC':this.mobile?'H5':''
  }

  find(needle) {
    return userAgent.indexOf(needle) !== -1;
  }
}
const DeviceInstance = () => {
  const deviceDetector = new DeviceDetector() ;
  return deviceDetector
}


export { DeviceInstance };

export const on = function(
  element,
  event,
  handler,
  useCapture = false,
) {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture)
  }
}

export const off = function(
  element,
  event,
  handler,
){
  if (element && event && handler) {
    element.removeEventListener(event, handler, false)
  }
}