/*
    db.collection.remove()
        - 删除一个或多个，可以第二个参数传递一个true，则只会删除一个
        - 如果传递一个空对象作为参数，则会删除所有的
    db.collection.deleteOne()
    db.collection.deleteMany()
    db.collection.drop() 删除集合
    db.dropDatabase() 删除数据库
    
        - 一般数据库中的数据都不会删除，所以删除的方法很少调用
            一般会在数据中添加一个字段，来表示数据是否被删除
*/
        
db.stus.insert([
    
    {
        name:"zbj",
        isDel:0
        },
        {
        name:"shs",
        isDel:0
        },
    {
    name:"ts",
        isDel:0
    }

]);

db.stus.updateOne({name:"ts"},{$set:{isDel:1}});
    
db.stus.find({isDel:0})    
