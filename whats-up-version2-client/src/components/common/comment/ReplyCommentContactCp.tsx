import React from "react";
import ReplyCommentOpenCp from "./replyComment/ReplyCommentOpenCp";
import ReplyCommentInput from "./ReplyCommentInput";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import toggleState from "@/store/toggleState";
import { getCommentHasReplyComments } from "@/apis/comment/getApis";
import ReplyCommentsRCp from "./replyComment/ReplyCommentsRCp";

interface Props {
  contentType: string;
  commentId: number;
  hasReplyComment: boolean;
  contentId: number;
}
const ReplyCommentContactCp = ({
  contentType,
  commentId,
  hasReplyComment: preHasReplyCom,
  contentId,
}: Props) => {
  const replyCommentsOpen = useRecoilValue(
    toggleState(`replyCommentsOpen-${contentType}-${commentId}`)
  );

  const replyCommentInputOpen = useRecoilValue(
    toggleState(`replyComInputOpen-${contentType}-${commentId}`)
  );

  const getHasReplyInfoEnabledState = useRecoilValue(
    toggleState(`getHasReplyInfoEnable-${contentType}-${commentId}`)
  );
  const { data: hasReplyCom } = useQuery({
    queryKey: [`hasReplyComment-${contentType}-${commentId}`],
    queryFn: () => getCommentHasReplyComments(commentId, contentType),
    enabled: getHasReplyInfoEnabledState,
  });

  const hasReplyComData = preHasReplyCom;
  return (
    <div>
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
      {replyCommentsOpen && (
        <ReplyCommentsRCp contentType={contentType} commentId={commentId} />
      )}
    </div>
  );
};

export default ReplyCommentContactCp;
