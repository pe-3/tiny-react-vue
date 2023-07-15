import * as hooks from 'vue'

export function setup({
    props,
    context,
    renderless,
    api,
    extendOptions = {},
    mono = false,
    classes = {},
}) {
    const render = renderless;
    const utils = {
        emit: context.emit,
        parent: context.parent,
    };
    const sdk = render(props, hooks, utils, {});
    const attrs = {};

    if (Array.isArray(api)) {
        api.forEach((name) => {
            const value = sdk[name];

            if (typeof value !== "undefined") {
                attrs[name] = value;
            }
        });
    }
    return attrs;
}