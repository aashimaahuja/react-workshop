### Storybook exercise

Add `Alert` component in storybook

Code reference for Alert Component `src/common/components/Alert`

---

Alert component should have four versions

- Success
- Error
- Warning
- Info

Alert component accepts following props

```js
type Props {
    title: string,
    description: string,
    severity: 'success' | 'error' | 'warning' | 'info'
    variant: 'filled' | 'outlined'
}
```
