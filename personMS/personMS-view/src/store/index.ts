import { defineStore } from "pinia";
const store = defineStore('counterStore', {
    // state存放所有的状态
    state: () => ({
        userId: 0 
    }),
    actions: {
        EditUserId(val: number){
            this.userId = val
        }
    },
});
export default store