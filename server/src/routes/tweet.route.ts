import express from 'express';

import { logger } from '../middlewares/logger';
import TwitterModel from '../models/tweet.model';
import { getTweetInfoByIds } from '../controllers/tweet.controller';

const router = express.Router();

router.post('/create-tweet', async (req, res, next) => {
  const {
    id,
    tweetContent,
    tweetAuthorName,
    tweetAuthorTag,
    submitBy,
    submitByUid,
  } = req.body;

  try {
    const createdTweet = await new Promise((resolve, reject) => {
      new TwitterModel({
        _id: id,
        content: tweetContent,
        authorName: tweetAuthorName,
        authorTag: tweetAuthorTag,
        submitBy,
        submitByUid,
      }).save((err, result) => {
        if (err) reject(err);

        console.log({ result });
        resolve(result);
      });
    });

    logger.verbose('MongoDB - Create Tweet', createdTweet);

    // TODO send to AI for prediction

    res.sendStatus(200);
  } catch (err) {
    logger.error(err);

    res.sendStatus(500);
  }
});

router.post('/retrieve-tweet-info', async (req, res, next) => {
  const { hashedTweetIdList } = req.body;

  try {
    const tweetInfo = await getTweetInfoByIds(hashedTweetIdList);

    res.json({ tweetInfo });
  } catch (err) {
    logger.error(err);

    res.sendStatus(500);
  }
});

export default router;
