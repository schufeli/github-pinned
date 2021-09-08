export interface Repository {
    name: string;
    description: string;
    url: string;
    forkCount: number;
    stargazeCount: number;
    primaryLanguage: {
        name: string;
        color: string;
    }
}