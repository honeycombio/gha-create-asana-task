# `gha-create-asana-task` Action

> [!IMPORTANT]
> This repository is archived and no longer maintained.

This Github Action allows you to create an Asana task within your Github workflows.

## How to use it

```yaml
- name: Create Asana task
  uses: honeycombio/gha-create-asana-task@main
  with:
    asana-secret: ${{ secrets.ASANA_PAT }}
    asana-workspace-id: ${{ secrets.ASANA_WORKSPACE_ID }}
    asana-project-id: ${{ secrets.ASANA_PROJECT_ID }}
    asana-section-id: ${{ secrets.ASANA_SECTION_ID }}
    asana-task-name: My Asana Task
    asana-task-description: My Asana Description # optional
    asana-due-date: 2022-12-05 # optional
    asana-tags: '["123456789"]' # optional
```
## License

This Action is distributed under the terms of the MIT license, see [LICENSE](./LICENSE) for details.