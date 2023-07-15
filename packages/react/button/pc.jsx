import { useRenderless } from '../../react-common'
import { renderless, api } from '../../renderless/button/vue';
export default function Button(props) {
    const context = {};
    const { state } = useRenderless({ props, context, renderless, api })

    return (
        <button>这是一句话</button>
    );
}