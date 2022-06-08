/*
    向数据库插入文档
        db.<collection>.insert()
        - 向集合中插入一个或多个文档
        - 当我们向集合中插入文档时，如果没有给文档指定_id属性，则数据库会自动为文档添加_id
            该属性用来作为文档的唯一标识
        - _id我们可以自己指定，如果我们指定了数据库就不会在添加了，如果自己指定_id 也必须确保它的唯一性
        
    db.collection.insertOne()
        - 插入一个文档对象
    db.collection.insertMany() 
        - 插入多个文档对象
*/
db.stus.insert({name:"猪八戒",age:28,gender:"男"});

db.stus.insert([
    {name:"沙和尚",age:38,gender:"男"},
    {name:"白骨精",age:16,gender:"女"},
    {name:"蜘蛛精",age:14,gender:"女"}
]);

db.stus.insert({_id:"hello",name:"猪八戒",age:28,gender:"男"});

db.stus.find();

ObjectId()