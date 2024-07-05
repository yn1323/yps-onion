---
name: "FormComponent"
root: "./components"
output: []
ignore: []
questions:
  component: "What is component name??"
  name: "What is form name ??"
  path: "What is path??(i.e. features/Timeline)"
---

# `{{ inputs.path }}/{{ inputs.component | pascal }}/index.stories.tsx`

```tsx
{{ "FormComponent/index.stories.tsx" | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}/index.tsx`

```tsx
{{ "FormComponent/index.tsx" | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}/index.test.tsx`

```tsx
{{ "FormComponent/index.test.tsx" | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}/schema.ts`

```tsx
{{ "FormComponent/schema.ts" | read }}
```

# `{{ inputs.path }}/{{ inputs.component | pascal }}/hooks.ts`

```tsx
{{ "FormComponent/hooks.ts" | read }}
```
