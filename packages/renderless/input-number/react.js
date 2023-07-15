import { increase, decrease } from './index'

export const useRenderless = (options) => {
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