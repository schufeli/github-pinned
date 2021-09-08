import { Repository } from './repository.ts';

export interface Response {
    data: {
        user: {
            pinnedItems: {
                nodes: Repository[];
            }
        }
    }
}