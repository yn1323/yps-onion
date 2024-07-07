---
name: "Page"
root: "./app"
output: []
ignore: []
questions:
  component: "What is Page name??(without 'Page' suffix)"
  path: "What is path to get above page??(i.e. login/forgetPassword)"
---


# `{{ inputs.path }}/page.tsx`

```tsx
{{ "Page/page.tsx" | read }}
```

# `{{ inputs.path }}/page.stories.tsx`

```tsx
{{ "Page/page.stories.tsx" | read }}
```

# `{{ inputs.path }}/page.test.tsx`

```tsx
{{ "Page/page.test.tsx" | read }}
```
