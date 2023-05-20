
const change = new BroadcastChannel('demo')
export const sendmsg = (type: String, content: any) => {
    change.postMessage({
        type,
        content
    })
}
export const postMsg = (content: Function) => {
    const changes = (event: any) => {
        content && content(event.data)
    }
    change.addEventListener('message', changes)
    return () => {
        change.removeEventListener('message', changes)
    }
}
const utils ={
    sendmsg,
    postMsg
}
declare global{
    interface Window{
        utils: typeof utils,
    }
}
window.utils = utils

export default utils