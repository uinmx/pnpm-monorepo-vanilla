import { pkgName } from '@prefix/bar'
import foo_main, { pkgName as fooPkName, getRandom } from '@prefix/foo'

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    console.info('Running in Web Environment')

    document.addEventListener('DOMContentLoaded', function () {
        var root = document.getElementById('root')
        root.innerHTML = `
            <p>test bar: ${pkgName}</p>
            <p>test foo: ${fooPkName}</p>
            <p>test foo_main: ${foo_main('main intput 1233')}</p>
            <p>test utils: ${getRandom()}</p>
        `
    })
} else {
    console.info('Running in Node.js Environment')
    console.info('=========Running main start...=========\n')

    console.log('test bar:', pkgName)
    console.log('test foo:', fooPkName)
    console.log('test foo_main:', foo_main())
    console.log('test utils:', getRandom() + '\n')

    console.info('=========Running main end...=========\n')
}
