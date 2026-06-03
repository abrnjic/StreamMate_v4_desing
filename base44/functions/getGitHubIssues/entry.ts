import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get GitHub access token
    const { accessToken } = await base44.asServiceRole.connectors.getConnection("github");

    // Fetch issues from the repository
    const response = await fetch('https://api.github.com/repos/abrnjic/StreamMate_v4_desing/issues', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'StreamMate-App'
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const issues = await response.json();

    // Transform issues for roadmap display
    const roadmapData = issues.map(issue => ({
      id: issue.id,
      number: issue.number,
      title: issue.title,
      state: issue.state,
      labels: issue.labels.map(label => ({
        name: label.name,
        color: `#${label.color}`
      })),
      created_at: issue.created_at,
      updated_at: issue.updated_at,
      body: issue.body,
      html_url: issue.html_url,
      assignees: issue.assignees.map(assignee => assignee.login),
      comments: issue.comments
    }));

    return Response.json({ issues: roadmapData });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});