import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { Comment } from './';
import { getCommentReplies, selectCommentReplies, answersReset } from '../slices/commentSlice';

interface CommentAnswersProps {
  mainCommentId: string;
}

export function CommentAnswers(prop: CommentAnswersProps) {
  const dispatch = useAppDispatch();
  const replies = useAppSelector((state) => selectCommentReplies(state, prop.mainCommentId));

  useEffect(() => {
    dispatch(getCommentReplies(prop.mainCommentId));

    return () => {
      dispatch(answersReset(prop.mainCommentId));
    };
  }, []);

  const renderedReplies = () => {
    if (replies) {
      return replies.map((reply, index) => <Comment key={index} {...reply} />);
    }
  };

  return <div className="replies">{renderedReplies()}</div>;
}
