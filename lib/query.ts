export function createQuery(username: string): string {
    return `
    {
        user(login: "${username}") {
            pinnedItems(first: 6, types: REPOSITORY) {
                nodes { 
                    ... on Repository {
                        name
                        description
                        url
                        forkCount
                        stargazerCount
                        primaryLanguage {
                            name
                            color
                        }
                    }
                }
            }
        }
    }`
}