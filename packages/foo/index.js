import { getNumber } from '@prefix/utils'
import { pkgName as BarPkgName } from '@prefix/bar'
export const pkgName = 'foo'

export const getRandom = () => getNumber()

export default function foo_main(params) {
    console.log('--------------foo-main------start--------')

    console.log(`Hello, ${pkgName}!`)
    console.log(`utils method, ${getNumber()}!`)
    console.log(`test pnpm link:, ${BarPkgName}!`)

    console.log('--------------foo-main-------end--------')
    return `foo return ${params}`
}
