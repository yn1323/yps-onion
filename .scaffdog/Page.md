---
name: "Page"
root: "."
output: []
ignore: []
questions:
  component: "What is Page name??(without 'Page' suffix)"
  path: "What is path to get above page??(i.e. login/forgetPassword)"
---


# `app/{{ inputs.path }}/page.tsx`

```tsx
{{ "Page/page.tsx" | read }}
```

# `components/pages/{{ inputs.path }}/index.stories.tsx`

```tsx
{{ "Page/index.stories.tsx" | read }}
```

# `components/pages/{{ inputs.path }}/index.test.tsx`

```tsx
{{ "Page/index.test.tsx" | read }}
```


# `components/pages/{{ inputs.path }}/index.tsx`

```tsx
{{ "Page/index.tsx" | read }}
```
