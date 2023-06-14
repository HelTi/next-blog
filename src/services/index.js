import fetch from "./fetch";

export const fetchArticles = ({ pageNo = 1, pageSize = 10 } = {}) => {
  return fetch(`/article`, {
    pageNo: pageNo,
    pageSize: pageSize,
  });
};

/**
 * 推荐文章
 */
export const fetchTopArticles = () => {
  return fetch(`/article/top`);
};
/**
 * 文章详情
 */
export const articelDetail = (uuid) => {
  return fetch(`/article/detail/${uuid}`);
};

/**
 * 获取分类标签
 */
export const fetchTags = () => {
  return fetch("/tag");
};

//搜索
export const search = (params) => {
  return fetch("/article/search", params, "post");
};

/**
 *
 * @param {评论} _id
 */
export const commentArticle = (
  _id,
  { content = "", nickName = "", userEmail = "" } = {}
) => {
  return fetch(
    "/comment/add",
    {
      _id: _id,
      content: content,
      nickName: nickName,
      userEmail: userEmail,
    },
    "post"
  );
};

/**
 *
 * @param {*} _id
 */
export const fetchCommentsByArticle = (_id) => {
  return fetch("/comment/byArticle", {
    _id,
  });
};

/**
 * 获取最新文章
 */
export const fetchLatestArticle = () => {
  return fetch("/article/latest");
};

/**
 * 保存访客信息
 * @returns 
 */
export const fetchSaveVistor = ({route_path}) => {
  return fetch("/visitor/save",{
    route_path
  },"post");
};

/**
 * 增加文章访问量
 * @param {*} uuid 
 * @returns 
 */
export const fetchViewArticle = (uuid) => {
  return fetch(`/article/detail/view/${uuid}`);
};


