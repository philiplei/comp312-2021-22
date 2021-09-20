// a module that contains a component of 'my-clock'

export default {
    template: "<div class='clock'>{{ timeNow }}</div>",
    data() {
        return { timeNow: undefined }
    },
    created() {
        this.timeNow = (new Date()).toLocaleTimeString();
        setInterval( ()=>{
            this.timeNow = (new Date()).toLocaleTimeString();
        }, 1000);
    }
};