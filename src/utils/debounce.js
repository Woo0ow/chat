// 防抖函数实现
let timeout;
export default function debounce(func, wait) {
    return function (...args) {
        clearTimeout(timeout);//清除前面的任务
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}