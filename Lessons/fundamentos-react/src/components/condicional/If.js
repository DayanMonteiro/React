/*
Testar se uma expressão é verdadeira e exixir os spans, se for falsa não renderizar nada
<If test={expressão}>
    <span>.....</span>
    <span>.....</span>
    <span>.....</span>
</If>
*/

export default props => {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}