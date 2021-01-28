
module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const mongoose = require('mongoose')
  const Article = mongoose.model('Article')
  //const Article = require('../../models/Article')
  const Category = mongoose.model('Category')


  //用JS批量导入文章标题和文章分类
  router.get('/news/init',async(req,res) => {
    const parent = await Category.findOne({
      name: '新闻分类'
    })
    //1.获取分类，lean()方法表示取纯粹的json，js对象或数组
    const cats = await Category.find().where({
      parent: parent
    }).lean()
    const newsTitles = ["新皮肤爆料｜守护万千星河，云上仙君新装登场！", "顺风局主题语音票选活动结果公告", "这大唐盛世如你所愿 《乱世王者》喜迎公测三周年庆", "创意互动营互动小任务第三期开启公告", "《御龙在天手游》全新资料篇“天下一统”震撼上线", "12月2日体验服违规处罚公告", "12月2日净化游戏环境声明及处罚公告", "12月2日外挂专项打击公告", "12月2日“演员”惩罚名单", "12月1日体验服停机更新公告", "王者创意互动周好礼来袭 云中君-纤云弄巧限时秒杀", "【手Q独家】商城限时免单", "感恩节快乐，参与活动领缤纷好礼", "挑战绝悟赢荣誉称号，S17赛季战令限时返场", "【手Q独家】商城限时免单", "四强集结！12月4日季后赛第二周重庆开战，一起见证总决赛战队诞生！", "2020年KPL秋季赛常规赛最佳选手——DYG小义", "2020年王者荣耀冬季冠军杯赛程赛制公布", "2020KPL秋季赛第十周周最佳出炉：火力全开，钎城斩获双料周最佳", "2020KPL秋季赛总决赛12月19日重庆开战，重山之上，一战成王！"]
    const newsList = newsTitles.map(title =>{
      //slice返回的是新数组，表示从cats里面复制一份出来，然后进行排序,sort只要返回结果大于0，就会交换位置
      const randomCats = cats.slice(0).sort((a,b) => Math.random() - 0.5)
      return{
        categories:randomCats.slice(0,2),
        title: title
      }
    })
    
    await Article.deleteMany({})
    await Article.insertMany(newsList)
    res.send(newsList)
  })


  router.get('/news/list',async(req,res) => {
    // const parent = await Category.findOne({
    //   name: '新闻分类'
    // }).populate({
    //   path: 'children',
    //   populate:{
    //     path:'newsList'
    //   }
    // }).lean()
    const parent = await Category.findOne({
      name: '新闻分类'
    })
    const cats = await Category.aggregate([
      {$match:{parent: parent._id}},
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'categories',
          as: 'newsList'
        }
      },
      {
        $addFields:{
          newsList:{$slice: ['$newsList',5]}
        }
      }
    ])
    const subCats = cats.map(v => v._id)
    cats.unshift({
      name:'热门',
      newsList: await Article.find().where({
        categories:{$in: subCats}
      }).populate('categories').limit(5).lean()
    })
    cats.map(cat => {
      cat.newsList.map(news => {
        news.categoryName = (cat.name === '热门') ? news.categories[0].name :cat.name
        return news
      })
      return cat
    })
    res.send(cats)
    //res.send(subCats)
  })

  app.use('/web/api',router)
}