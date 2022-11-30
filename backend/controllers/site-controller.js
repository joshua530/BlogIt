const asyncHandler = require('express-async-handler');
const Post = require('../models/post-model');
const { cleanPost } = require('../utils/models');

/**
 * @does fetches home page
 * @path /api/v1/home
 * @protected false
 */
const home = asyncHandler(async (req, res) => {
  const imageUrl = '<img url>';
  const posts = await Post.find().limit(10).sort({ _id: 'desc' });

  const latestPosts = [];
  posts.forEach((post) => {
    latestPosts.push(cleanPost(post, true));
  });

  const resData = { imageUrl, latestPosts };
  res.status(200).json(resData);
});

/**
 * @does fetches about page
 * @path /api/v1/about
 * @protected false
 */
const about = (req, res) => {
  const aboutPage = {
    welcomeText:
      'Welcome to <strong>BlogIt</strong> where people <strong>share</strong> and <strong>learn</strong> new ideas',
    aboutText:
      `<p>Do you have an Idea that you feel the world needs to know about and can't wait to share it?</p>

      <p>You have come to the right place, just <a href="/sign-up">create an account</a> with us and you'll be able to do just that.</p>
      
      <p>Come to see what awesome ideas other people have had to share? Good. We have a <a href="/">list of them here</a>. Hope you enjoy the plentiful ideas that we have in store for you.</p>
      
      <p>Whether you want to just share an idea or to look at other awesome ideas, and maybe even gain inspiration from them, we have all that covered for you</p>
      `,
    welcomeImage: '<image url>'
  };
  res.status(200).json(aboutPage);
};

module.exports = { home, about };
