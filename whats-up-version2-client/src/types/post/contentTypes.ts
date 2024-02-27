export interface PostStoryForm {
  content: string;
  img: string;
}

export interface PostPostForm {
  mainContent: string;
  subContent: string;
  img: string;
  allowComment: boolean;
  allowLike: boolean;
  allowSubcontent: boolean;
}

export interface PostDiaryForm {
  title: string;
  content: string;
  img: string;
  allowComment: boolean;
  allowLike: boolean;
  allowPublic: boolean;
}
