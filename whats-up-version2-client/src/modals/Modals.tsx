import ModalSwitch from "./ModalSwitch";
import MakePostMd from "./MakePostMd";
import PostCommentMd from "./MorePostMd";
import RequestLoginMd from "./RequestLoginMd";
import MakeStoryMd from "./MakeStoryMd";

const Modals = () => {
  return (
    <ModalSwitch
      modals={{
        makePostMd: <MakePostMd />,
        makeStoryMd: <MakeStoryMd />,
        postCommentMd: <PostCommentMd />,
        requestLoginMd: <RequestLoginMd />,
      }}
    />
  );
};

export default Modals;
