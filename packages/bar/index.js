export const pkgName = 'bar123xxx'

export default function bar_main(params) {
    console.log('--------------bar-main------start--------')

    console.log(`Hello, ${pkgName}!`)

    console.log('--------------bar-main-------end--------')
    return `bar return ${params}`
}
