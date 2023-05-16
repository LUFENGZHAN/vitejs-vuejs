import user from './login'
import { App } from 'vue';
export const api = {
    user,
}
declare global {
    interface Window {
        api: typeof api;
    }
}
export default {
    install(app: App<Element>) {
        app.config.globalProperties.api = api;
        window.api = api;
    },
};

