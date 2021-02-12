
// TODO: Beautify :)
let ScriptLoader = {
    scripts: [],
    loadScript: function(source, listLoad) {
        listLoad = listLoad !== undefined && listLoad

        let node = document.createElement('script')

        node.setAttribute('type', 'text/javascript')

        if (typeof source === 'object' && source !== null) {
            node.setAttribute('src', source.path)
            if (source.options !== undefined) {
                for (const key in source.options) {
                    node.setAttribute('key', source[key])
                }
            }
        } else {
            node.setAttribute('src', source)
        }

        if (listLoad)
            node.onload = this.callbackFn;
        document.body.appendChild(node)
    },
    loadScriptList: function (list) {
        this.scripts = list
        this.loadScript(this.scripts[0], true)
    },
    callbackFn: function (event) {
        // console.log('Script loaded: ', event.target.src)

        let replace = window.location.pathname
        let re = new RegExp(replace,'g')
        let thingToReplace = window.location.href.split('?')[0].toString().replace(re, '')
        let src = event.target.src.replace(new RegExp(thingToReplace,'g'), '')

        let currentIndex = ScriptLoader.scripts.indexOf(src)
        let nextScript = ScriptLoader.scripts[currentIndex + 1]

        if (nextScript === undefined || currentIndex === -1) {
            // document.body.appendChild(gmapsScript)
            console.info('All script loaded')
            return
        }

        // console.log(`Src: ${src} with index ${currentIndex}. Next script will be: ${nextScript}`)

        if (currentIndex === -1) {
            return
        }

        ScriptLoader.loadScript(nextScript, true)
    }
}

export default ScriptLoader
