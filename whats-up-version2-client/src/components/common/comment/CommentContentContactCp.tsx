import styled from "styled-components";
import CommentContactCp from "./CommentContactCp";
import ReplyCommentOpenCp from "./replyComment/ReplyCommentOpenCp";
import { useRecoilState, useRecoilValue } from "recoil";
import toggleState from "@/store/toggleState";
import ReplyCommentInput from "./ReplyCommentInput";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCommentHasReplyComments } from "@/apis/comment/getApis";
import onCheckHasReplyComments from "@/store/getCommentState/onCheckHasReplyComments";

interface Props {
  commentId: number;
  contentId: number;
  nickname: string;
  content: string;
  hasReplyComments: boolean;
  likeCount: number;
  contentType: string;
}

const CommentContentContactCp = ({
  contentId,
  commentId,
  nickname,
  content,
  hasReplyComments: preHasReplyCom,
  likeCount,
  contentType,
}: Props) => {
  // const [replyCommentInputOpen, setReplyCommentInputOpen] = useState(false);

  const replyCommentInputOpen = useRecoilValue(
    toggleState(`replyComInputOpen-${commentId}`)
  );
  const onCheckHasReplyCom = useRecoilValue(
    onCheckHasReplyComments(`comment-${commentId}`)
  );

  const { data: hasReplyCom } = useQuery({
    queryKey: [`hasReplyComment`, commentId],
    queryFn: () => getCommentHasReplyComments(commentId, "post"),
    enabled: onCheckHasReplyCom,
  });

  const hasReplyComData = hasReplyCom || preHasReplyCom;

  return (
    <CommentContentContainer>
      <CommentProfileName>{nickname}</CommentProfileName>
      <CommentContent>{content}</CommentContent>
      <CommentContactCp
        likeCount={likeCount}
        commentId={commentId}
        contentType={contentType}
      />
      {replyCommentInputOpen && (
        <ReplyCommentInput
          commentId={commentId}
          contentType={contentType}
          contentId={contentId}
        />
      )}
      {hasReplyComData && (
        <ReplyCommentOpenCp commentId={commentId} contentType={contentType} />
      )}
    </CommentContentContainer>
  );
};

export default CommentContentContactCp;

const CommentProfileName = styled.span`
  font-weight: 800;
  margin-right: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
`;

const CommentContentContainer = styled.div`
  min-height: 40px;
  margin-left: 10px;
  margin-top: 7px;
  flex: 1;
`;

const CommentContent = styled.span`
  font-size: 13px;
  white-space: pre-wrap;
  color: ${(props) => props.theme.fontColor};
`;
