const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot2mc6m/",
            name: "springboot2mc6m",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot2mc6m/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园资料分享平台"
        } 
    }
}
export default base
