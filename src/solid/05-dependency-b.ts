import {
	// JsonDatabaseService,
	// LocalDataBaseService,
	PostProvider,
} from './05-dependency-c';

export interface Post {
	body: string;
	id: number;
	title: string;
	userId: number;
}

export class PostService {
	private posts: Post[] = [];

	// constructor(private postProvider: JsonDatabaseService) {}
	// constructor(private postProvider: LocalDataBaseService) {}
	constructor(private postProvider: PostProvider) {}

	async getPosts() {
		// const jsonDB = new LocalDataBaseService();
		// const jsonDB = new JsonDatabaseService();

		// this.posts = await jsonDB.getFakePosts();
		// this.posts = await jsonDB.getPosts();
		// this.posts = await this.postProvider.getPosts();
		// this.posts = await this.postProvider.getFakePosts();
		this.posts = await this.postProvider.getPosts();

		return this.posts;
	}
}
