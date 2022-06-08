/*
    查询
        db.collection.find()
        - find()用来查询集合中所有符合条件的文档
        - find()可以接收一个对象作为条件参数
            {} 表示查询集合中所有的文档
            {属性:值} 查询属性是指定值的文档
        - find()返回的是一个数组
            
        db.collection.findOne()
        - 用来查询集合中符合条件的第一个文档  
        - findOne()返回的是一个文档对象 
       
       db.collection.find({}).count() 
        - 查询所有结果的数量
*/
db.stus.find({_id:"hello"});
db.stus.find({age:16 , name:"白骨精"});
db.stus.find({age:28});
db.stus.findOne({age:28});

db.stus.find({}).count();