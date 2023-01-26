export const api = {
  searchUsers(user) {
    user || 0
    return {
      "total_count": 1,
      "incomplete_results": false,
      "items": [
        {
          "login": "Ronald-ps",
          "id": 104438755,
          "node_id": "U_kgDOBjmb4w",
          "avatar_url": "https://avatars.githubusercontent.com/u/104438755?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Ronald-ps",
          "html_url": "https://github.com/Ronald-ps",
          "followers_url": "https://api.github.com/users/Ronald-ps/followers",
          "following_url": "https://api.github.com/users/Ronald-ps/following{/other_user}",
          "gists_url": "https://api.github.com/users/Ronald-ps/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Ronald-ps/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Ronald-ps/subscriptions",
          "organizations_url": "https://api.github.com/users/Ronald-ps/orgs",
          "repos_url": "https://api.github.com/users/Ronald-ps/repos",
          "events_url": "https://api.github.com/users/Ronald-ps/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Ronald-ps/received_events",
          "type": "User",
          "site_admin": false,
          "score": 1.0
        },
        {
          "login": "Ronald-ps-2",
          "id": 104438755,
          "node_id": "U_kgDOBjmb4w",
          "avatar_url": "https://avatars.githubusercontent.com/u/104438755?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Ronald-ps",
          "html_url": "https://github.com/Ronald-ps",
          "followers_url": "https://api.github.com/users/Ronald-ps/followers",
          "following_url": "https://api.github.com/users/Ronald-ps/following{/other_user}",
          "gists_url": "https://api.github.com/users/Ronald-ps/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Ronald-ps/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Ronald-ps/subscriptions",
          "organizations_url": "https://api.github.com/users/Ronald-ps/orgs",
          "repos_url": "https://api.github.com/users/Ronald-ps/repos",
          "events_url": "https://api.github.com/users/Ronald-ps/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Ronald-ps/received_events",
          "type": "User",
          "site_admin": false,
          "score": 1.0
        }
      ]
    }
  },
  async listRepos(user, page) {
    user || page
    return [
      {
        "id": 580359943,
        "node_id": "R_kgDOIpeXBw",
        "name": "About-Me",
        "full_name": "Ronald-ps/About-Me",
        "private": false,
        "owner": {
          "login": "Ronald-ps",
          "id": 104438755,
          "node_id": "U_kgDOBjmb4w",
          "avatar_url": "https://avatars.githubusercontent.com/u/104438755?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Ronald-ps",
          "html_url": "https://github.com/Ronald-ps",
          "followers_url": "https://api.github.com/users/Ronald-ps/followers",
          "following_url": "https://api.github.com/users/Ronald-ps/following{/other_user}",
          "gists_url": "https://api.github.com/users/Ronald-ps/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Ronald-ps/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Ronald-ps/subscriptions",
          "organizations_url": "https://api.github.com/users/Ronald-ps/orgs",
          "repos_url": "https://api.github.com/users/Ronald-ps/repos",
          "events_url": "https://api.github.com/users/Ronald-ps/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Ronald-ps/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/Ronald-ps/About-Me",
        "description": "Pequena carta de apresentação criada com mkdocs",
        "fork": false,
        "url": "https://api.github.com/repos/Ronald-ps/About-Me",
        "forks_url": "https://api.github.com/repos/Ronald-ps/About-Me/forks",
        "keys_url": "https://api.github.com/repos/Ronald-ps/About-Me/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/Ronald-ps/About-Me/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/Ronald-ps/About-Me/teams",
        "hooks_url": "https://api.github.com/repos/Ronald-ps/About-Me/hooks",
        "issue_events_url": "https://api.github.com/repos/Ronald-ps/About-Me/issues/events{/number}",
        "events_url": "https://api.github.com/repos/Ronald-ps/About-Me/events",
        "assignees_url": "https://api.github.com/repos/Ronald-ps/About-Me/assignees{/user}",
        "branches_url": "https://api.github.com/repos/Ronald-ps/About-Me/branches{/branch}",
        "tags_url": "https://api.github.com/repos/Ronald-ps/About-Me/tags",
        "blobs_url": "https://api.github.com/repos/Ronald-ps/About-Me/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/Ronald-ps/About-Me/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/Ronald-ps/About-Me/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/Ronald-ps/About-Me/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/Ronald-ps/About-Me/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/Ronald-ps/About-Me/languages",
        "stargazers_url": "https://api.github.com/repos/Ronald-ps/About-Me/stargazers",
        "contributors_url": "https://api.github.com/repos/Ronald-ps/About-Me/contributors",
        "subscribers_url": "https://api.github.com/repos/Ronald-ps/About-Me/subscribers",
        "subscription_url": "https://api.github.com/repos/Ronald-ps/About-Me/subscription",
        "commits_url": "https://api.github.com/repos/Ronald-ps/About-Me/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/Ronald-ps/About-Me/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/Ronald-ps/About-Me/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/Ronald-ps/About-Me/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/Ronald-ps/About-Me/contents/{+path}",
        "compare_url": "https://api.github.com/repos/Ronald-ps/About-Me/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/Ronald-ps/About-Me/merges",
        "archive_url": "https://api.github.com/repos/Ronald-ps/About-Me/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/Ronald-ps/About-Me/downloads",
        "issues_url": "https://api.github.com/repos/Ronald-ps/About-Me/issues{/number}",
        "pulls_url": "https://api.github.com/repos/Ronald-ps/About-Me/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/Ronald-ps/About-Me/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/Ronald-ps/About-Me/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/Ronald-ps/About-Me/labels{/name}",
        "releases_url": "https://api.github.com/repos/Ronald-ps/About-Me/releases{/id}",
        "deployments_url": "https://api.github.com/repos/Ronald-ps/About-Me/deployments",
        "created_at": "2022-12-20T11:18:31Z",
        "updated_at": "2022-12-20T12:00:50Z",
        "pushed_at": "2022-12-20T12:19:45Z",
        "git_url": "git://github.com/Ronald-ps/About-Me.git",
        "ssh_url": "git@github.com:Ronald-ps/About-Me.git",
        "clone_url": "https://github.com/Ronald-ps/About-Me.git",
        "svn_url": "https://github.com/Ronald-ps/About-Me",
        "homepage": "https://ronald-ps.github.io/About-Me/",
        "size": 2738,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": true,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [

        ],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
      },
      {
        "id": 581638445,
        "node_id": "R_kgDOIqsZLQ",
        "name": "Game-Of-Life",
        "full_name": "Ronald-ps/Game-Of-Life",
        "private": false,
        "owner": {
          "login": "Ronald-ps",
          "id": 104438755,
          "node_id": "U_kgDOBjmb4w",
          "avatar_url": "https://avatars.githubusercontent.com/u/104438755?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Ronald-ps",
          "html_url": "https://github.com/Ronald-ps",
          "followers_url": "https://api.github.com/users/Ronald-ps/followers",
          "following_url": "https://api.github.com/users/Ronald-ps/following{/other_user}",
          "gists_url": "https://api.github.com/users/Ronald-ps/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Ronald-ps/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Ronald-ps/subscriptions",
          "organizations_url": "https://api.github.com/users/Ronald-ps/orgs",
          "repos_url": "https://api.github.com/users/Ronald-ps/repos",
          "events_url": "https://api.github.com/users/Ronald-ps/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Ronald-ps/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/Ronald-ps/Game-Of-Life",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life",
        "forks_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/forks",
        "keys_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/teams",
        "hooks_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/hooks",
        "issue_events_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/issues/events{/number}",
        "events_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/events",
        "assignees_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/assignees{/user}",
        "branches_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/branches{/branch}",
        "tags_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/tags",
        "blobs_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/languages",
        "stargazers_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/stargazers",
        "contributors_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/contributors",
        "subscribers_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/subscribers",
        "subscription_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/subscription",
        "commits_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/contents/{+path}",
        "compare_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/merges",
        "archive_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/downloads",
        "issues_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/issues{/number}",
        "pulls_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/labels{/name}",
        "releases_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/releases{/id}",
        "deployments_url": "https://api.github.com/repos/Ronald-ps/Game-Of-Life/deployments",
        "created_at": "2022-12-23T19:51:55Z",
        "updated_at": "2023-01-09T16:05:56Z",
        "pushed_at": "2023-01-04T01:34:39Z",
        "git_url": "git://github.com/Ronald-ps/Game-Of-Life.git",
        "ssh_url": "git@github.com:Ronald-ps/Game-Of-Life.git",
        "clone_url": "https://github.com/Ronald-ps/Game-Of-Life.git",
        "svn_url": "https://github.com/Ronald-ps/Game-Of-Life",
        "homepage": null,
        "size": 112,
        "stargazers_count": 1,
        "watchers_count": 1,
        "language": "Python",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": true,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [

        ],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 1,
        "default_branch": "master"
      },
      {
        "id": 587822232,
        "node_id": "R_kgDOIwl0mA",
        "name": "lista-de-desafios-leet-code",
        "full_name": "Ronald-ps/lista-de-desafios-leet-code",
        "private": false,
        "owner": {
          "login": "Ronald-ps",
          "id": 104438755,
          "node_id": "U_kgDOBjmb4w",
          "avatar_url": "https://avatars.githubusercontent.com/u/104438755?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Ronald-ps",
          "html_url": "https://github.com/Ronald-ps",
          "followers_url": "https://api.github.com/users/Ronald-ps/followers",
          "following_url": "https://api.github.com/users/Ronald-ps/following{/other_user}",
          "gists_url": "https://api.github.com/users/Ronald-ps/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Ronald-ps/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Ronald-ps/subscriptions",
          "organizations_url": "https://api.github.com/users/Ronald-ps/orgs",
          "repos_url": "https://api.github.com/users/Ronald-ps/repos",
          "events_url": "https://api.github.com/users/Ronald-ps/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Ronald-ps/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/Ronald-ps/lista-de-desafios-leet-code",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code",
        "forks_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/forks",
        "keys_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/teams",
        "hooks_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/hooks",
        "issue_events_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/issues/events{/number}",
        "events_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/events",
        "assignees_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/assignees{/user}",
        "branches_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/branches{/branch}",
        "tags_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/tags",
        "blobs_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/languages",
        "stargazers_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/stargazers",
        "contributors_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/contributors",
        "subscribers_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/subscribers",
        "subscription_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/subscription",
        "commits_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/contents/{+path}",
        "compare_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/merges",
        "archive_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/downloads",
        "issues_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/issues{/number}",
        "pulls_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/labels{/name}",
        "releases_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/releases{/id}",
        "deployments_url": "https://api.github.com/repos/Ronald-ps/lista-de-desafios-leet-code/deployments",
        "created_at": "2023-01-11T17:06:31Z",
        "updated_at": "2023-01-13T23:42:20Z",
        "pushed_at": "2023-01-13T23:59:55Z",
        "git_url": "git://github.com/Ronald-ps/lista-de-desafios-leet-code.git",
        "ssh_url": "git@github.com:Ronald-ps/lista-de-desafios-leet-code.git",
        "clone_url": "https://github.com/Ronald-ps/lista-de-desafios-leet-code.git",
        "svn_url": "https://github.com/Ronald-ps/lista-de-desafios-leet-code",
        "homepage": null,
        "size": 5,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [

        ],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
      },
      {
        "id": 592737795,
        "node_id": "R_kgDOI1R2Aw",
        "name": "vueHub",
        "full_name": "Ronald-ps/vueHub",
        "private": false,
        "owner": {
          "login": "Ronald-ps",
          "id": 104438755,
          "node_id": "U_kgDOBjmb4w",
          "avatar_url": "https://avatars.githubusercontent.com/u/104438755?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Ronald-ps",
          "html_url": "https://github.com/Ronald-ps",
          "followers_url": "https://api.github.com/users/Ronald-ps/followers",
          "following_url": "https://api.github.com/users/Ronald-ps/following{/other_user}",
          "gists_url": "https://api.github.com/users/Ronald-ps/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Ronald-ps/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Ronald-ps/subscriptions",
          "organizations_url": "https://api.github.com/users/Ronald-ps/orgs",
          "repos_url": "https://api.github.com/users/Ronald-ps/repos",
          "events_url": "https://api.github.com/users/Ronald-ps/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Ronald-ps/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/Ronald-ps/vueHub",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/Ronald-ps/vueHub",
        "forks_url": "https://api.github.com/repos/Ronald-ps/vueHub/forks",
        "keys_url": "https://api.github.com/repos/Ronald-ps/vueHub/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/Ronald-ps/vueHub/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/Ronald-ps/vueHub/teams",
        "hooks_url": "https://api.github.com/repos/Ronald-ps/vueHub/hooks",
        "issue_events_url": "https://api.github.com/repos/Ronald-ps/vueHub/issues/events{/number}",
        "events_url": "https://api.github.com/repos/Ronald-ps/vueHub/events",
        "assignees_url": "https://api.github.com/repos/Ronald-ps/vueHub/assignees{/user}",
        "branches_url": "https://api.github.com/repos/Ronald-ps/vueHub/branches{/branch}",
        "tags_url": "https://api.github.com/repos/Ronald-ps/vueHub/tags",
        "blobs_url": "https://api.github.com/repos/Ronald-ps/vueHub/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/Ronald-ps/vueHub/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/Ronald-ps/vueHub/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/Ronald-ps/vueHub/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/Ronald-ps/vueHub/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/Ronald-ps/vueHub/languages",
        "stargazers_url": "https://api.github.com/repos/Ronald-ps/vueHub/stargazers",
        "contributors_url": "https://api.github.com/repos/Ronald-ps/vueHub/contributors",
        "subscribers_url": "https://api.github.com/repos/Ronald-ps/vueHub/subscribers",
        "subscription_url": "https://api.github.com/repos/Ronald-ps/vueHub/subscription",
        "commits_url": "https://api.github.com/repos/Ronald-ps/vueHub/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/Ronald-ps/vueHub/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/Ronald-ps/vueHub/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/Ronald-ps/vueHub/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/Ronald-ps/vueHub/contents/{+path}",
        "compare_url": "https://api.github.com/repos/Ronald-ps/vueHub/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/Ronald-ps/vueHub/merges",
        "archive_url": "https://api.github.com/repos/Ronald-ps/vueHub/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/Ronald-ps/vueHub/downloads",
        "issues_url": "https://api.github.com/repos/Ronald-ps/vueHub/issues{/number}",
        "pulls_url": "https://api.github.com/repos/Ronald-ps/vueHub/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/Ronald-ps/vueHub/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/Ronald-ps/vueHub/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/Ronald-ps/vueHub/labels{/name}",
        "releases_url": "https://api.github.com/repos/Ronald-ps/vueHub/releases{/id}",
        "deployments_url": "https://api.github.com/repos/Ronald-ps/vueHub/deployments",
        "created_at": "2023-01-24T12:31:37Z",
        "updated_at": "2023-01-24T12:31:43Z",
        "pushed_at": "2023-01-24T19:11:45Z",
        "git_url": "git://github.com/Ronald-ps/vueHub.git",
        "ssh_url": "git@github.com:Ronald-ps/vueHub.git",
        "clone_url": "https://github.com/Ronald-ps/vueHub.git",
        "svn_url": "https://github.com/Ronald-ps/vueHub",
        "homepage": null,
        "size": 111,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "Vue",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [

        ],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
      }
    ]
  },
  listContent(user, repo, file) {
    return [
      {
        "name": ".github",
        "path": ".github",
        "sha": "3bc9c680e6187f95f75e075753c1791f39666d79",
        "size": 0,
        "url": "https://api.github.com/repos/launasci/aboutme/contents/.github?ref=main",
        "html_url": "https://github.com/launasci/aboutme/tree/main/.github",
        "git_url": "https://api.github.com/repos/launasci/aboutme/git/trees/3bc9c680e6187f95f75e075753c1791f39666d79",
        "download_url": null,
        "type": "dir",
        "_links": {
          "self": "https://api.github.com/repos/launasci/aboutme/contents/.github?ref=main",
          "git": "https://api.github.com/repos/launasci/aboutme/git/trees/3bc9c680e6187f95f75e075753c1791f39666d79",
          "html": "https://github.com/launasci/aboutme/tree/main/.github"
        }
      },
      {
        "name": ".gitignore",
        "path": ".gitignore",
        "sha": "45ddf0ae397075d91d1660f81bc5f6c39f60f9fb",
        "size": 6,
        "url": "https://api.github.com/repos/launasci/aboutme/contents/.gitignore?ref=main",
        "html_url": "https://github.com/launasci/aboutme/blob/main/.gitignore",
        "git_url": "https://api.github.com/repos/launasci/aboutme/git/blobs/45ddf0ae397075d91d1660f81bc5f6c39f60f9fb",
        "download_url": "https://raw.githubusercontent.com/launasci/aboutme/main/.gitignore",
        "type": "file",
        "_links": {
          "self": "https://api.github.com/repos/launasci/aboutme/contents/.gitignore?ref=main",
          "git": "https://api.github.com/repos/launasci/aboutme/git/blobs/45ddf0ae397075d91d1660f81bc5f6c39f60f9fb",
          "html": "https://github.com/launasci/aboutme/blob/main/.gitignore"
        }
      },
      {
        "name": "docs",
        "path": "docs",
        "sha": "2449b0cc90ac244576e7ef0b028264ca451f60e1",
        "size": 0,
        "url": "https://api.github.com/repos/launasci/aboutme/contents/docs?ref=main",
        "html_url": "https://github.com/launasci/aboutme/tree/main/docs",
        "git_url": "https://api.github.com/repos/launasci/aboutme/git/trees/2449b0cc90ac244576e7ef0b028264ca451f60e1",
        "download_url": null,
        "type": "dir",
        "_links": {
          "self": "https://api.github.com/repos/launasci/aboutme/contents/docs?ref=main",
          "git": "https://api.github.com/repos/launasci/aboutme/git/trees/2449b0cc90ac244576e7ef0b028264ca451f60e1",
          "html": "https://github.com/launasci/aboutme/tree/main/docs"
        }
      },
      {
        "name": "mkdocs.yml",
        "path": "mkdocs.yml",
        "sha": "1d09e02c4e32060be1b616a13bcad6f0b49a5242",
        "size": 60,
        "url": "https://api.github.com/repos/launasci/aboutme/contents/mkdocs.yml?ref=main",
        "html_url": "https://github.com/launasci/aboutme/blob/main/mkdocs.yml",
        "git_url": "https://api.github.com/repos/launasci/aboutme/git/blobs/1d09e02c4e32060be1b616a13bcad6f0b49a5242",
        "download_url": "https://raw.githubusercontent.com/launasci/aboutme/main/mkdocs.yml",
        "type": "file",
        "_links": {
          "self": "https://api.github.com/repos/launasci/aboutme/contents/mkdocs.yml?ref=main",
          "git": "https://api.github.com/repos/launasci/aboutme/git/blobs/1d09e02c4e32060be1b616a13bcad6f0b49a5242",
          "html": "https://github.com/launasci/aboutme/blob/main/mkdocs.yml"
        }
      },
      {
        "name": "requirements.txt",
        "path": "requirements.txt",
        "sha": "01b942c5b7829cf5d94bd83da2e58f8f0e61923f",
        "size": 29,
        "url": "https://api.github.com/repos/launasci/aboutme/contents/requirements.txt?ref=main",
        "html_url": "https://github.com/launasci/aboutme/blob/main/requirements.txt",
        "git_url": "https://api.github.com/repos/launasci/aboutme/git/blobs/01b942c5b7829cf5d94bd83da2e58f8f0e61923f",
        "download_url": "https://raw.githubusercontent.com/launasci/aboutme/main/requirements.txt",
        "type": "file",
        "_links": {
          "self": "https://api.github.com/repos/launasci/aboutme/contents/requirements.txt?ref=main",
          "git": "https://api.github.com/repos/launasci/aboutme/git/blobs/01b942c5b7829cf5d94bd83da2e58f8f0e61923f",
          "html": "https://github.com/launasci/aboutme/blob/main/requirements.txt"
        }
      }
    ]
  }
}
