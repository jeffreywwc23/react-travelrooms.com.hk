import { createSelector } from 'reselect';

const selectBlog = state => state.blog;

export const selectBlogSelector = createSelector(
    [selectBlog],
    blog => blog.blogContent
);
