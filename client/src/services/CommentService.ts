import { AxiosResponse } from 'axios';
import { IComment } from '../models/IComment';
import $api from '../http/index';

export default class CommentService {
  static async addComment(
    body: string,
    articleId: string,
    userId: string,
    date: string,
  ): Promise<AxiosResponse<IComment>> {
    return await $api.post<IComment>('/api/comment/addComment', { body, articleId, userId, date });
  }

  static async patchComment(
    commentId: string,
    commentBody: string,
  ): Promise<AxiosResponse<IComment>> {
    return await $api.patch<IComment>(`/api/comment/${commentId}`, { commentBody });
  }

  static async deleteComment(commentId: string): Promise<AxiosResponse> {
    return await $api.delete<IComment>(`api/comment/${commentId}`);
  }

  static async replyComment(
    body: string,
    articleId: string,
    userId: string,
    date: string,
    answerTo: string,
  ): Promise<AxiosResponse<IComment>> {
    return await $api.post<IComment>('/api/comment/replyComment', {
      body,
      articleId,
      userId,
      date,
      answerTo,
    });
  }

  static async getArticleComments(articleId: string): Promise<AxiosResponse<IComment[]>> {
    return await $api.get<IComment[]>(`/api/comment/getArticleComments/${articleId}`);
  }

  static async getArticleCommentsCount(articleId: string): Promise<AxiosResponse<IComment[]>> {
    return await $api.get<IComment[]>(`/api/comment/count/${articleId}`);
  }

  static async getCommentReplies(commentId: string): Promise<AxiosResponse<IComment[]>> {
    return await $api.get<IComment[]>(`/api/comment/getCommentReplies`, {
      params: {
        commentId,
      },
    });
  }
}
