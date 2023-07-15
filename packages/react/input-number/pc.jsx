import { useState } from 'react'
import { increase, decrease } from '@opentiny/renderless/input-number';

const useRenderless = (options) => {
  const { props } = options
  const [ _value , setValue ] = useState(0)
  const value = props.value ?? _value

  return {
    state: {
      value
    },
    increase: () => {
      const val = increase(value)
      setValue(val)
      props.onChange?.(val)
    },
    decrease: () => {
      const val = decrease(value)
      setValue(val)
      props.onChange?.(val)
    },
    onChange: (_val) => {
      const val = Number(_val)
      setValue(val)
      props.onChange?.(val)
    }
  }
}

export default function Button(props) {
    const {
      state,
      increase,
      decrease,
      onChange,
    } = useRenderless({ props })

    return (
        <div>
          <button onClick={decrease}>-</button>
          <input type="text" value={state.value.toString()} onChange={onChange} />
          <button onClick={increase}>+</button>
        </div>
    );
}