import * as core from '@actions/core'
import asana from 'asana'

async function run(): Promise<void> {
  try {
    const token = core.getInput('asana-secret', {required: true})
    core.setSecret(token)
    const client = asana.Client.create().useAccessToken(token)

    const workspaceId = core.getInput('asana-workspace-id', {required: true})
    const projectId = core.getInput('asana-project-id', {required: true})
    const sectionId = core.getInput('asana-section-id', {required: true})
    const taskName = core.getInput('asana-task-name', {required: true})
    const taskDescription = core.getInput('asana-task-description')
    const dueDate = core.getInput('asana-due-date')
    const tags = core.getInput('asana-tags')

    await client.tasks.create({
      workspace: workspaceId,
      projects: [projectId],
      assignee_section: sectionId,
      name: taskName,
      notes: taskDescription,
      due_on: dueDate,
      tags: JSON.parse(tags)
    })
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
